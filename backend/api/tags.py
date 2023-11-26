import fastapi
from backend.models import Tags

tags_router = fastapi.APIRouter()

verification_codes = {}


@tags_router.get('/tags', response_model=list[str], status_code=200)
async def get_all_tags():
    return Tags
