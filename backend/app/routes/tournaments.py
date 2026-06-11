from fastapi import APIRouter
from app.database import get_connection
from fastapi import Depends
from app.dependencies.auth import get_current_admin

router = APIRouter()

@router.get("/tournaments")
def get_tournaments():

    connection = get_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute("SELECT * FROM tournaments")

    tournaments = cursor.fetchall()

    cursor.close()
    connection.close()

    return tournaments


@router.get("/tournaments/{tournament_id}")
def get_tournament(tournament_id: int):

    connection = get_connection()
    cursor = connection.cursor(dictionary=True)

    cursor.execute(
        "SELECT * FROM tournaments WHERE id = %s",
        (tournament_id,)
    )

    tournament = cursor.fetchone()

    cursor.close()
    connection.close()

    return tournament

@router.post("/tournaments")
def create_tournament(data: dict, current_admin: dict = Depends(get_current_admin)):

    connection = get_connection()
    cursor = connection.cursor()

    query = """
    INSERT INTO tournaments
    (
        title,
        subtitle,
        description,
        game_name,
        banner_image,
        rulebook_url,
        prize_pool,
        status,
        registration_start,
        registration_end,
        tournament_start,
        tournament_end,
        max_teams
    )
    VALUES
    (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
    """

    values = (
        data["title"],
        data["subtitle"],
        data["description"],
        data["game_name"],
        data["banner_image"],
        data["rulebook_url"],
        data["prize_pool"],
        data["status"],
        data["registration_start"],
        data["registration_end"],
        data["tournament_start"],
        data["tournament_end"],
        data["max_teams"]
    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return {
        "message": "Tournament Created Successfully"
    }
    
@router.delete("/tournaments/{tournament_id}")
def delete_tournament(tournament_id: int, current_admin: dict = Depends(get_current_admin)):

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "DELETE FROM tournaments WHERE id=%s",
        (tournament_id,)
    )

    connection.commit()

    cursor.close()
    connection.close()

    return {
        "message": "Tournament Deleted"
    }
@router.put("/tournaments/{tournament_id}")
def update_tournament(
    tournament_id: int,
    data: dict,
    current_admin: dict = Depends(get_current_admin)
):

    connection = get_connection()
    cursor = connection.cursor()

    query = """
    UPDATE tournaments
    SET
        title=%s,
        subtitle=%s,
        description=%s,
        game_name=%s,
        banner_image=%s,
        rulebook_url=%s,
        prize_pool=%s,
        status=%s,
        max_teams=%s
    WHERE id=%s
    """

    values = (
        data["title"],
        data["subtitle"],
        data["description"],
        data["game_name"],
        data["banner_image"],
        data["rulebook_url"],
        data["prize_pool"],
        data["status"],
        data["max_teams"],
        tournament_id
    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return {
        "message": "Tournament Updated"
    }