import os

from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_sqlalchemy import DBSessionMiddleware
from backend import db
from sqlalchemy.orm import Session

from backend.api.schema import UserSchema


app = FastAPI()
app.add_middleware(DBSessionMiddleware, db_url=os.environ['DATABASE_URI'])


from backend.api.users import users_router
from backend.core.auth import authenticate

app.include_router(users_router)


@app.post('/login', response_model=UserSchema)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db_session: Session = Depends(db.generate_session)) -> any:
    """
    Get the JWT for a user with data from OAuth2 request form body
    :param form_data:
    :param db_session:
    :return:
    """

    user = authenticate(username=form_data.username, password=form_data.password, db_session=db_session)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username of password")

    return user