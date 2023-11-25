"""Add location

Revision ID: 0b3c80b2a5cb
Revises: 2e610fa12ca7
Create Date: 2023-11-25 15:05:44.615550

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '0b3c80b2a5cb'
down_revision: Union[str, None] = '2e610fa12ca7'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.execute("CREATE TYPE location AS enum('Nicosia', 'Limassol', 'Larnaca', 'Pafos')")
    op.add_column('users', sa.Column('location', sa.Enum('Nicosia', 'Limassol', 'Larnaca', 'Pafos', name='location'), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'location')
    # ### end Alembic commands ###