import contextlib
from typing import Iterator

from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

SQLALCHEMY_DATABASE_URL = "postgresql://postgres:eagle1994@localhost/sss"
metadata = MetaData()

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=True, bind=engine)

Base = declarative_base(metadata=metadata)


def make_session() -> Session:
    return SessionLocal()


def generate_session() -> Iterator[Session]:
    session = make_session()

    try:
        yield session
        session.commit()
    except Exception:
        session.rollback()
        raise
    finally:
        session.close()


session_context = contextlib.contextmanager(generate_session())
