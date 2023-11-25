from datetime import datetime

import requests

from db import make_session
from models import Event

response = requests.get(
    url="https://api.predicthq.com/v1/events/",
    headers={
      "Authorization": "Bearer LbFfGI-ndqNaE04bgU5UW61UFwNUEg8UuQjyBiS1",
      "Accept": "application/json"
    },
    params={
        "country": "CY",  "limit": 1000,
    }
)


def parser_city(s: str):
    if 'Nicosia' in s:
        return 'Nicosia'
    elif 'Limassol' in s:
        return 'Limassol'
    elif 'Pafos' in s:
        return 'Pafos'
    elif 'Larnaca' in s:
        return 'Larnaca'
    else:
        return 'Nicosia'

for raw in response.json()['results']:
    data = raw['entities']

    db_session = make_session()

    db_event = Event(
        title=raw['title'],
        created_date=datetime.utcnow(),
        date=raw['start'],
        place=data[0]['name'] if data else 'nowhere',
        description=data[0]['name'] if data else 'lorum ipsum',
        creator_id=1,
        participants=[],
        tags=raw['labels'],
        image=[],
        location=parser_city(data[0]['formatted_address']) if data and data[0] and data[0].get('formatted_address') else 'Nicosia'
    )

    db_session.add(db_event)
    db_session.commit()
    db_session.refresh(db_event)

