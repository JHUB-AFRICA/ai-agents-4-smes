from sqlalchemy import text

from app.db.connection import engine

try:
    with engine.connect() as connection:
        result = connection.execute(text("SELECT version();"))

        print("\n✅ Connected Successfully!\n")

        for row in result:
            print(row)

except Exception as e:
    print("\n❌ Connection Failed\n")
    print(e)