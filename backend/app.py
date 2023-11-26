import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi_sqlalchemy import DBSessionMiddleware
from starlette.middleware.cors import CORSMiddleware

from backend.api.events import events_router
from backend.api.tags import tags_router
from backend.api.users import users_router


app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load_dotenv()
app.add_middleware(DBSessionMiddleware, db_url=os.environ['DATABASE_URI'])

app.include_router(users_router)
app.include_router(events_router)
app.include_router(tags_router)


@app.get("/")
async def root():
    return {"message": "Hello World"}
