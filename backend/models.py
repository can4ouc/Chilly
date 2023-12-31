import datetime
import enum

from sqlalchemy import Column, Integer, String, ARRAY, DateTime, ForeignKey, Enum, Date

from backend.db import Base


class Gender(str, enum.Enum):
    MALE = 'male'
    FEMALE = 'female'


class Tags(str, enum.Enum):
    CLUB = 'club'
    DANCE = 'dance'
    SPORT = 'sport'
    FOOD = 'food'
    CONFERENCE = 'conference'
    OUTDOOR = 'outdoor'
    RUNNING = 'running'
    OBSERVANCE = 'observance'
    BUSINESS = 'business'
    MUSIC = 'music'
    CONCERT = 'concert'
    HOLIDAY_NATIONAL = 'holiday-national'
    HOLIDAY = 'holiday'
    OBSERVANCE_SEASON = 'observance-season'
    SOCCER = 'soccer'
    AIRPORT = 'airport'
    DELAY = 'delay'
    MARATHON = 'marathon'
    BASKETBALL = 'basketball'
    SCIENCE = 'science'
    TECHNOLOGY = 'technology'




class Location(str, enum.Enum):
    Nicosia = 'Nicosia'
    Limassol = 'Limassol'
    Larnaca = 'Larnaca'
    Pafos = 'Pafos'


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    join_date = Column(DateTime, default=datetime.date.today())
    username = Column(String(length=4096), nullable=False)
    password = Column(String(length=4096), nullable=False)
    email = Column(String(length=4096), nullable=False)
    first_name = Column(String(length=4096), nullable=True)
    avatar = Column(String(length=4096), default='ava.jpg', nullable=False)
    gender = Column(Enum(Gender), default=Gender.MALE, nullable=False)
    birthdate = Column(DateTime, nullable=True)
    bio = Column(String(length=4096), nullable=True)
    interests = Column(ARRAY(Enum(Tags)), default=[], nullable=False)
    location = Column(Enum(Location), default=Location.Nicosia, nullable=True)


class Event(Base):
    __tablename__ = 'events'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    created_date = Column(DateTime, default=datetime.datetime.utcnow())
    title = Column(String(length=4096), nullable=False)
    date = Column(DateTime, nullable=False)
    duration = Column(Integer, nullable=True)
    place = Column(String(length=4096), nullable=False)
    description = Column(String(length=4096), nullable=False)
    creator_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    participants = Column(ARRAY(Integer), default=[], nullable=False)
    tags = Column(ARRAY(Enum(Tags)), default=[], nullable=False)
    image = Column(ARRAY(String), default=[], nullable=False)
    location = Column(Enum(Location), default=Location.Nicosia, nullable=True)
