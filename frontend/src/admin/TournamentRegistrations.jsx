import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

export default function RegistrationsAdmin() {
  const [registrations, setRegistrations] = useState([]);
  const [tournament, setTournament] = useState(null);

  const navigate = useNavigate();
  const { tournamentId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tournamentRes = await api.get(
          `/tournaments/${tournamentId}`
        );
        setTournament(tournamentRes.data);

        const regRes = await api.get(
          `/registrations/tournament/${tournamentId}`
        );
        setRegistrations(regRes.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (tournamentId) {
      fetchData();
    }
  }, [tournamentId]);

  const approveTeam = async (id) => {
    try {
      await api.put(`/registrations/${id}/approve`);

      const res = await api.get(
        `/registrations/tournament/${tournamentId}`
      );
      setRegistrations(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const rejectTeam = async (id) => {
    try {
      await api.put(`/registrations/${id}/reject`);

      const res = await api.get(
        `/registrations/tournament/${tournamentId}`
      );
      setRegistrations(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ LOADING STATE
  if (!tournament) {
    return (
      <div className="text-white p-6">
        Loading...
      </div>
    );
  }

  // ✅ FAST FIX: MATCH DATABASE VALUES EXACTLY
  const status = tournament.status;

  const isUpcoming = status === "Upcoming";
  const isOngoing = status === "Ongoing";
  const isCompleted = status === "Completed";

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Registrations
      </h1>

      {/* UPCOMING */}
      {isUpcoming && (
        <div className="bg-yellow-800 p-6 rounded-xl">
          Tournament begins soon. No registrations available yet.
        </div>
      )}

      {/* ONGOING / COMPLETED */}
      {(isOngoing || isCompleted) && (
        <div className="space-y-4">
          {Array.isArray(registrations) &&
          registrations.length > 0 ? (
            registrations.map((team) => (
              <div
                key={team.id}
                className="bg-zinc-900 p-6 rounded-xl"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img
                      src={`${api.defaults.baseURL}/${team.team_logo}`}
                      alt={team.team_name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />

                    <div>
                      <h2 className="text-2xl font-bold">
                        {team.team_name}
                      </h2>

                      <p>Captain: {team.captain_name}</p>
                      <p>Email: {team.captain_email}</p>
                      <p>Status: {team.status}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        navigate(
                          `/admin/registrations/${team.id}`
                        )
                      }
                      className="bg-blue-600 px-4 py-2 rounded-lg"
                    >
                      View
                    </button>

                    {/* ONLY ONGOING */}
                    {isOngoing && (
                      <>
                        <button
                          onClick={() =>
                            approveTeam(team.id)
                          }
                          className="bg-green-600 px-4 py-2 rounded-lg"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() =>
                            rejectTeam(team.id)
                          }
                          className="bg-red-600 px-4 py-2 rounded-lg"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">
              No teams registered.
            </p>
          )}
        </div>
      )}
    </div>
  );
}