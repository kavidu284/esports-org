from fastapi import APIRouter
from app.database import get_connection
from fastapi import Depends
from app.dependencies.auth import get_current_admin

router = APIRouter()

@router.post("/contact")
def send_message(data: dict):

    connection = get_connection()
    cursor = connection.cursor()

    query = """
    INSERT INTO contact_messages
    (
        name,
        email,
        subject,
        message
    )
    VALUES
    (%s,%s,%s,%s)
    """

    values = (
        data["name"],
        data["email"],
        data["subject"],
        data["message"]
    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return {
        "message": "Message Sent Successfully"
    }


# GET ALL MESSAGES
@router.get("/messages")
def get_messages(current_admin: dict = Depends(get_current_admin)):

    connection = get_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute("""
        SELECT *
        FROM contact_messages
        ORDER BY created_at DESC
    """)

    messages = cursor.fetchall()

    cursor.close()
    connection.close()

    return messages


# GET SINGLE MESSAGE
@router.get("/messages/{message_id}")
def get_message(message_id: int, current_admin: dict = Depends(get_current_admin)):

    connection = get_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute(
        """
        SELECT *
        FROM contact_messages
        WHERE id = %s
        """,
        (message_id,)
    )

    message = cursor.fetchone()

    cursor.close()
    connection.close()

    return message


# DELETE MESSAGE
@router.delete("/messages/{message_id}")
def delete_message(message_id: int, current_admin: dict = Depends(get_current_admin)):

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        DELETE FROM contact_messages
        WHERE id = %s
        """,
        (message_id,)
    )

    connection.commit()

    cursor.close()
    connection.close()

    return {
        "message": "Message Deleted Successfully"
    }
