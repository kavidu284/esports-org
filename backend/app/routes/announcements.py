from fastapi import APIRouter
from app.database import get_connection

router = APIRouter()


@router.get("/announcements")
def get_announcements():

    connection = get_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute("""
        SELECT *
        FROM announcements
        ORDER BY created_at DESC
    """)

    announcements = cursor.fetchall()

    cursor.close()
    connection.close()

    return announcements


@router.get("/announcements/{announcement_id}")
def get_announcement(announcement_id: int):

    connection = get_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute(
        """
        SELECT *
        FROM announcements
        WHERE id = %s
        """,
        (announcement_id,)
    )

    announcement = cursor.fetchone()

    cursor.close()
    connection.close()

    return announcement