from datetime import date, datetime, timedelta
from typing import Optional, Set, List

from pydantic import BaseModel, EmailStr

from backend import models
from backend.models import Gender, Tags

fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "first_name": "John Doe",
        "password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
        "gender": Gender.MALE,
        'birthday': date.today() - timedelta(days=10000),
        'bio': 'ne loh',
        'interests': [Tags.CLUB, Tags.DANCE]
    }
}


class UserIn(BaseModel):
    email: EmailStr
    username: str
    password: str
    join_date: Optional[date]


class UserSchema(BaseModel):
    username: str
    password: str
    first_name: Optional[str]
    avatar: Optional[str]
    gender: models.Gender
    birthdate: Optional[date]
    bio: Optional[str]
    interests: Optional[Set[models.Tags]] = None
    friends: List[int] = []

    class Config:
        orm_mode = True


class EventInfo(BaseModel):
    id: int
    title: str
    create_date: datetime
    date: date
    duration: Optional[int]
    place: str
    description: str
    creator: UserSchema
    participants: List[UserSchema]
    tags: Optional[Set[models.Tags]] = None
    image: List[str]

    class Config:
        orm_mode = True


class Events(BaseModel):
    events: List[EventInfo]