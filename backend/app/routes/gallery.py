import os
import shutil

from fastapi import APIRouter, UploadFile, File, Form
from app.database import get_connection

router = APIRouter()

UPLOAD_DIR = "uploads/gallery"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.get("/gallery")
def get_gallery():

    connection = get_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute("""
        SELECT *
        FROM gallery
        ORDER BY uploaded_at DESC
    """)

    images = cursor.fetchall()

    cursor.close()
    connection.close()

    return images


@router.post("/gallery")
async def create_gallery_image(
    tournament_id: int = Form(...),
    caption: str = Form(""),
    image: UploadFile = File(...)
):

    file_path = f"{UPLOAD_DIR}/{image.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        """
        INSERT INTO gallery
        (
            tournament_id,
            image_url,
            caption
        )
        VALUES
        (%s,%s,%s)
        """,
        (
            tournament_id,
            file_path,
            caption
        )
    )

    connection.commit()

    image_id = cursor.lastrowid

    cursor.close()
    connection.close()

    return {
        "message": "Image Uploaded",
        "id": image_id
    }


@router.delete("/gallery/{image_id}")
def delete_gallery_image(image_id: int):

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "DELETE FROM gallery WHERE id=%s",
        (image_id,)
    )

    connection.commit()

    cursor.close()
    connection.close()

    return {
        "message": "Image Deleted"
    }
