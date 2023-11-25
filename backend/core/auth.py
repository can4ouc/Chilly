from typing import Optional

from fastapi import Depends
from backend import db
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from backend.models import User


password_context = CryptContext(schemes=['bcrypt'], deprecated='auto')


def authenticate(username, password, db_session: Session = Depends(db.generate_session)) -> Optional[User]:
    user = db_session.query(User).filter(User.username == username).first()
    if not user:
        return None
    if not verify_password(password, user.password):
        return None
    return user


def verify_password(password: str, hashed_pass: str) -> bool:
    return password_context.verify(password, hashed_pass)


def get_password_hash(password: str) -> str:
    return password_context.hash(password)