"""Add enum

Revision ID: ebe600c9e861
Revises: 9f1ed8ea961f
Create Date: 2023-11-25 20:22:50.502309

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'ebe600c9e861'
down_revision: Union[str, None] = '9f1ed8ea961f'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute("ALTER TYPE tags ADD VALUE 'CONFERENCE';")
    op.execute("ALTER TYPE tags ADD VALUE 'OUTDOOR';")
    op.execute("ALTER TYPE tags ADD VALUE 'RUNNING';")
    op.execute("ALTER TYPE tags ADD VALUE 'OBSERVANCE';")
    op.execute("ALTER TYPE tags ADD VALUE 'BUSINESS';")
    op.execute("ALTER TYPE tags ADD VALUE 'MUSIC';")
    op.execute("ALTER TYPE tags ADD VALUE 'CONCERT';")
    op.execute("ALTER TYPE tags ADD VALUE 'HOLIDAY_NATIONAL';")
    op.execute("ALTER TYPE tags ADD VALUE 'HOLIDAY';")
    op.execute("ALTER TYPE tags ADD VALUE 'OBSERVANCE_SEASON';")
    op.execute("ALTER TYPE tags ADD VALUE 'SOCCER';")

def downgrade() -> None:
    op.execute("ALTER TYPE tags DROP VALUE 'CONFERENCE';")
    op.execute("ALTER TYPE tags DROP VALUE 'OUTDOOR';")
    op.execute("ALTER TYPE tags DROP VALUE 'RUNNING';")
    op.execute("ALTER TYPE tags DROP VALUE 'OBSERVANCE';")
    op.execute("ALTER TYPE tags DROP VALUE 'BUSINESS';")
    op.execute("ALTER TYPE tags DROP VALUE 'MUSIC';")
    op.execute("ALTER TYPE tags DROP VALUE 'CONCERT';")
    op.execute("ALTER TYPE tags DROP VALUE 'HOLIDAY_NATIONAL';")
    op.execute("ALTER TYPE tags DROP VALUE 'HOLIDAY';")
    op.execute("ALTER TYPE tags DROP VALUE 'OBSERVANCE_SEASON';")
    op.execute("ALTER TYPE tags DROP VALUE 'SOCCER';")
