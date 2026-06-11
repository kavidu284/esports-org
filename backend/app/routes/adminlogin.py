from fastapi import APIRouter
from app.database import get_connection
from app.auth import create_access_token



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
    
    token = create_access_token(
        {
            "admin_id": admin["id"],
            "username": admin["username"]
        })
    return {
        "success": True,
        "access_token": token,
        "admin": {
            "id": admin["id"],
            "username": admin["username"]
        }
}