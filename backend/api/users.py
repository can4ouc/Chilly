import fastapi
from fastapi import HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from fuzzywuzzy import fuzz

from backend import db
from sqlalchemy.orm import Session

from backend.api.schema import UserIn, UserSchema, UserInfo, EventSchema
from backend.core.auth import get_password_hash, authenticate
from backend.models import User, Event

users_router = fastapi.APIRouter()

verification_codes = {}


@users_router.post('/signup', response_model=UserSchema, status_code=201)
async def create_user_signup(user: UserIn, db_session: Session = Depends(db.generate_session)):
    db_user = db_session.query(User).filter(User.username == user.username).first()
    if db_user:
        raise HTTPException(
            status_code=400,
            detail='The user with this name already exists in the system'
        )
    email_exist = db_session.query(User).filter(User.email == user.email).first()
    if email_exist:
        raise HTTPException(
            status_code=400,
            detail='The user with such email already exists in the system'
        )
    db_user = User(
        username=user.username,
        email=user.email,
        password=get_password_hash(user.password),
    )

    db_session.add(db_user)
    db_session.commit()
    db_session.refresh(db_user)
    return db_user


@users_router.post('/users/signup/enrich', response_model=UserSchema, status_code=201)
async def add_user_info(user: UserInfo, db_session: Session = Depends(db.generate_session)):
    db_user: User = db_session.query(User).filter(User.id == user.user_id).first()
    if not db_user:
        raise HTTPException(
            status_code=404,
            detail="Such user doesn't exist"
        )

    db_user.interests = user.interests
    db_user.location = user.location

    db_session.add(db_user)
    db_session.commit()
    db_session.refresh(db_user)
    return db_user


@users_router.post('/users/login', response_model=UserSchema)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db_session: Session = Depends(db.generate_session)) -> any:
    user = authenticate(username=form_data.username, password=form_data.password, db_session=db_session)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username of password")

    return user


@users_router.get("/users/<int:user_id>", response_model=UserSchema, status_code=200)
async def get_user(user_id: int, db_session: Session = Depends(db.generate_session)):
    user = db_session.query(User).filter(User.id == user_id).first()
    if user:
        print(user)
        return user.to_json()

    raise HTTPException(
        status_code=404,
        detail='Event with requested id not found'
    )


@users_router.get("/users/get_feed/<int:user_id>", response_model=list[EventSchema], status_code=200)
async def get_user_feed(user_id: int, db_session: Session = Depends(db.generate_session)):
    user = db_session.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(
            status_code=404,
            detail='Event with requested id not found'
        )

    events_list = db_session.query(Event).filter(
        Event.creator_id != user_id,
    ).all()
    events_list = [event for event in events_list if user_id not in event.participants]
    match_scores = dict()
    events_dict = dict()
    for event in events_list:
        events_dict[event.id] = event
        match_scores[event.id] = calculate_event_user_match_score(user, event)
    # sort by match_score
    feed = dict(sorted(match_scores.items(), key=lambda item: item[1]))
    return [events_dict[i] for i in feed.keys()]


def calculate_event_user_match_score(user: User, event: Event) -> int:
    return len(set(user.interests).intersection(set(event.tags))) + (event.location == user.location)


@users_router.get("/users/search/<str:query>", response_model=list[EventSchema], status_code=200)
async def get_users_search_query(query: str, user_id: int, db_session: Session = Depends(db.generate_session)):
    users_list = db_session.query(User).filter(
        User.id != user_id,
    ).all()

    match_scores = dict()
    events_dict = dict()
    for user in users_list:
        events_dict[user.id] = user
        match_scores[user.id] = calculate_user_user_match_score(query, user)
    # sort by match_score
    feed = dict(sorted(match_scores.items(), key=lambda item: item[1]))
    return [events_dict[i] for i in feed.keys()]


def calculate_user_user_match_score(query: str, user: User) -> int:
    username_match = fuzz.partial_ratio(query, user.username) / 100
    first_name_match = fuzz.partial_ratio(query, user.first_name) / 100
    bio_match = fuzz.partial_ratio(query, user.bio) / 100
    interests_match = fuzz.partial_ratio(query, ' '.join(user.interests)) / 100
    location_match = fuzz.partial_ratio(query, user.location) / 100
    return (
        username_match * 0.4 +
        first_name_match * 0.25 +
        bio_match * 0.2 +
        interests_match * 0.1 +
        location_match * 0.05
    )
