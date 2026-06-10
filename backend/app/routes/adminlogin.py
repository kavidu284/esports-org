from fastapi import APIRouter
from app.database import get_connection

router = APIRouter()

@router.post("/login")
def admin_login(data: dict):

    connection = get_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute(
        """
        SELECT *
        FROM admins
        WHERE username=%s
        AND password_hash=%s
        """,
        (
            data["username"],
            data["password"]
        )
    )

    admin = cursor.fetchone()

    cursor.close()
    connection.close()

    if not admin:
        return {
            "success": False,
            "message": "Invalid Credentials"
        }

    return {
        "success": True,
        "admin": {
            "id": admin["id"],
            "username": admin["username"]
        }
    }