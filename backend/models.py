import datetime
import enum

from fastapi import Depends, HTTPException
from sqlalchemy import Column, Integer, String, ARRAY, DateTime, ForeignKey, Enum, Date
from sqlalchemy.orm import Session

from backend import db
from backend.db import Base


class Gender(str, enum.Enum):
    MALE = 'male'
    FEMALE = 'female'


class Tags(str, enum.Enum):
    CLUB = 'club'
    DANCE = 'dance'
    SPORT = 'sport'
    FOOD = 'food'


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    join_date = Column(Date, default=datetime.date.today())
    username = Column(String(length=4096), nullable=False)
    password = Column(String(length=4096), nullable=False)
    email = Column(String(length=4096), nullable=False)
    first_name = Column(String(length=4096), nullable=True)
    avatar = Column(String(length=4096), default='ava.jpg', nullable=False)
    gender = Column(Enum(Gender), default=Gender.MALE, nullable=False)
    birthdate = Column(Date, nullable=True)
    bio = Column(String(length=4096), nullable=True)
    interests = Column(ARRAY(Enum(Tags)), default=[], nullable=False)


class Event(Base):
    __tablename__ = 'events'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    created_date = Column(Date, default=datetime.date.today())
    title = Column(String(length=4096), nullable=False)
    date = Column(DateTime, nullable=False)
    duration = Column(Integer, nullable=True)
    place = Column(String(length=4096), nullable=False)
    description = Column(String(length=4096), nullable=False)
    creator_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    participants = Column(ARRAY(Integer), default=[], nullable=False)
    tags = Column(ARRAY(Enum(Tags)), default=[], nullable=False)
    image = Column(ARRAY(String), default=[], nullable=False)

    def to_json(self):
        return {
            'id': self.id,
            'created_date': self.created_date,
            'title': self.title,
            'date': self.date,
            'duration': self.duration,
            'place': self.place,
            'description': self.description,
            'creator_id': self.creator_id,
            'participants': self.participants,
            'tags': self.tags,
            'image': self.image,
        }
