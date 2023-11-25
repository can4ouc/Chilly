from datetime import datetime

import fastapi
from fastapi import Depends, HTTPException
from starlette.responses import JSONResponse

from backend import db
from sqlalchemy.orm import Session

from backend.api.schema import EventSchema, EventInput
from backend.models import Event

from fuzzywuzzy import fuzz

events_router = fastapi.APIRouter()

verification_codes = {}


@events_router.post('/events/create', response_model=EventSchema, status_code=201)
async def create_event(creator_id: int, event: EventInput, db_session: Session = Depends(db.generate_session)):
    db_event = Event(
        title=event.title,
        created_date=datetime.utcnow(),
        date=event.date,
        place=event.place,
        description=event.description,
        creator_id=creator_id,
        participants=[],
        tags=event.tags,
        image=event.image,
    )

    db_session.add(db_event)
    db_session.commit()
    db_session.refresh(db_event)
    return db_event


@events_router.get("/events/<int:event_id>", response_model=EventSchema, status_code=200)
async def get_event(event_id: int, db_session: Session = Depends(db.generate_session)):
    event = db_session.query(Event).filter(Event.id == event_id).first()
    if event:
        return event.to_json()

    raise HTTPException(
        status_code=404,
        detail='Event with requested id not found'
    )


@events_router.post("/events/<int:event_id>/participate", response_model=EventSchema, status_code=200)
async def get_event(event_id: int, user_id: int, db_session: Session = Depends(db.generate_session)):
    db_event = db_session.query(Event).filter_by(id=event_id).first()

    new_participants = [id for id in db_event.participants]
    if user_id in new_participants:
        raise HTTPException(
            status_code=404,
            detail='User already exist in this event'
        )

    new_participants.append(user_id)

    db_session.query(Event).filter(Event.id == event_id).update(
        {Event.participants: new_participants}, synchronize_session=False
    )
    db_session.flush()

    data = {"message": "OK"}
    return JSONResponse(content=data, status_code=200)


@events_router.get("/events/search/<str:query>", response_model=list[EventSchema], status_code=200)
async def get_events_search_query(query: str, user_id, db_session: Session = Depends(db.generate_session)) -> list[Event]:
    # we need to retrieve user_id from current user
    events_list = db_session.query(Event).filter(
        Event.creator_id != user_id,
    ).all()
    # events_list = [event for event in events_list if user_id not in event.participants]
    match_scores = dict()
    events_dict = dict()
    for event in events_list:
        events_dict[event.id] = event
        match_scores[event.id] = calculate_event_query_match_score(query, event)
    # sort by match_score
    feed = dict(sorted(match_scores.items(), key=lambda item: item[1], reverse=True))
    return [events_dict[i] for i in feed.keys()]


def calculate_event_query_match_score(query: str, event: Event) -> float:
    title_match = fuzz.partial_ratio(query, event.title)/100
    description_match = fuzz.partial_ratio(query, event.description)/100
    tags_match = fuzz.partial_ratio(query, ' '.join(event.tags))/100
    location_match = fuzz.partial_ratio(query, event.location)/100
    return title_match * 0.5 + description_match * 0.3 + tags_match * 0.12 + location_match * 0.08
