from app.db.base import Base
from app.db.connection import engine

# Import models so SQLAlchemy knows about them
from app.models.user import User


def create_tables():
    Base.metadata.create_all(bind=engine)
    print("✅ All tables created successfully!")


if __name__ == "__main__":
    create_tables()