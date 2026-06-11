from fastapi import APIRouter
from app.database import get_connection
from fastapi import Depends
from app.dependencies.auth import get_current_admin

router = APIRouter()

@router.get("/dashboard")
def get_dashboard_data(
    current_admin=Depends(get_current_admin)
):
    connection = get_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute("SELECT COUNT(*) AS total FROM tournaments")
    tournaments = cursor.fetchone()["total"]

    cursor.execute("SELECT COUNT(*) AS total FROM registrations")
    registrations = cursor.fetchone()["total"]

    cursor.execute("""
        SELECT COUNT(*) AS total
        FROM registrations
        WHERE status='Approved'
    """)
    approved = cursor.fetchone()["total"]

    cursor.execute("""
        SELECT COUNT(*) AS total
        FROM registrations
        WHERE status='Pending'
    """)
    pending = cursor.fetchone()["total"]

    cursor.execute("SELECT COUNT(*) AS total FROM announcements")
    announcements = cursor.fetchone()["total"]

    cursor.execute("SELECT COUNT(*) AS total FROM contact_messages")
    messages = cursor.fetchone()["total"]

    cursor.close()
    connection.close()

    return {
        "tournaments": tournaments,
        "registrations": registrations,
        "approved": approved,
        "pending": pending,
        "announcements": announcements,
        "messages": messages
    }
