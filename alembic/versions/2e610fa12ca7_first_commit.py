"""First commit

Revision ID: 2e610fa12ca7
Revises: 
Create Date: 2023-11-25 13:42:04.792227

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '2e610fa12ca7'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('join_date', sa.Date(), nullable=True),
    sa.Column('username', sa.String(length=4096), nullable=False),
    sa.Column('password', sa.String(length=4096), nullable=False),
    sa.Column('email', sa.String(length=4096), nullable=False),
    sa.Column('first_name', sa.String(length=4096), nullable=True),
    sa.Column('avatar', sa.String(length=4096), nullable=False),
    sa.Column('gender', sa.Enum('MALE', 'FEMALE', name='gender'), nullable=False),
    sa.Column('birthdate', sa.Date(), nullable=True),
    sa.Column('bio', sa.String(length=4096), nullable=True),
    sa.Column('interests', sa.ARRAY(sa.Enum('CLUB', 'DANCE', 'SPORT', 'FOOD', name='tags')), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_users_id'), 'users', ['id'], unique=False)
    op.create_table('events',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('created_date', sa.Date(), nullable=True),
    sa.Column('title', sa.String(length=4096), nullable=False),
    sa.Column('date', sa.DateTime(), nullable=False),
    sa.Column('duration', sa.Integer(), nullable=True),
    sa.Column('place', sa.String(length=4096), nullable=False),
    sa.Column('description', sa.String(length=4096), nullable=False),
    sa.Column('creator_id', sa.Integer(), nullable=False),
    sa.Column('participants', sa.ARRAY(sa.Integer()), nullable=False),
    sa.Column('tags', sa.ARRAY(sa.Enum('CLUB', 'DANCE', 'SPORT', 'FOOD', name='tags')), nullable=False),
    sa.Column('image', sa.ARRAY(sa.String()), nullable=False),
    sa.ForeignKeyConstraint(['creator_id'], ['users.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_events_id'), 'events', ['id'], unique=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_events_id'), table_name='events')
    op.drop_table('events')
    op.drop_index(op.f('ix_users_id'), table_name='users')
    op.drop_table('users')
    # ### end Alembic commands ###
