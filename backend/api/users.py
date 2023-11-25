import fastapi
from fastapi import HTTPException, Depends
from backend import db
from sqlalchemy.orm import Session

from backend.api.schema import UserIn, UserSchema, UserInfo
from backend.core.auth import get_password_hash
from backend.models import User

users_router = fastapi.APIRouter()

verification_codes = {}

@users_router.get("/")
async def root():
    return {"message": "Hello World"}


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


@users_router.post('/signup/enrich', response_model=UserSchema, status_code=201)
async def create_user_signup(user: UserInfo, db_session: Session = Depends(db.generate_session)):
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

