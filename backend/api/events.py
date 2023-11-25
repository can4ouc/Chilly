from datetime import datetime

import fastapi
from fastapi import Depends
from backend import db
from sqlalchemy.orm import Session

from backend.api.schema import EventSchema, UserSchema, EventInput
from backend.models import Event

users_router = fastapi.APIRouter()

verification_codes = {}


@users_router.get("/")
async def root():
    return {"message": "Hello World"}


@users_router.post('/create', response_model=EventSchema, status_code=201)
async def create_event(creator: UserSchema, event: EventInput, db_session: Session = Depends(db.generate_session)):
    db_event = Event(
        title=event.title,
        create_date=datetime.utcnow(),
        date=event.date,
        place=event.place,
        description=event.description,
        creator=creator.id,
        participants=[],
        tags=event.tags,
        image=event.image,
    )

    db_session.add(db_event)
    db_session.commit()
    db_session.refresh(db_event)
    return db_event
