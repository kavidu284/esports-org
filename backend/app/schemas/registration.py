from pydantic import BaseModel

class RegistrationCreate(BaseModel):
    tournament_id: int
    team_name: str
    captain_name: str
    email: str
    phone: str
    player1: str
    player2: str
    player3: str
    player4: str
    player5: str