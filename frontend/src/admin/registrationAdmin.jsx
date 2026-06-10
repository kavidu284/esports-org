import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function RegistrationsAdmin() {

  const [registrations, setRegistrations] = useState([]);
  const navigate = useNavigate();

  const approveTeam = async (id) => {
    try {
      await api.post(`/registrations/${id}/approve`);
      setRegistrations((prev) =>
        prev.map((t) => (t.id === id ? { ...t, status: "approved" } : t))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const rejectTeam = async (id) => {
    try {
      await api.post(`/registrations/${id}/reject`);
      setRegistrations((prev) =>
        prev.map((t) => (t.id === id ? { ...t, status: "rejected" } : t))
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let mounted = true;

    const fetchRegistrations = async () => {
      try {
        const response = await api.get("/registrationsadmin");
        if (mounted) setRegistrations(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRegistrations();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Registrations
      </h1>

      <div className="space-y-4">

        {registrations.map((team) => (

          <div
            key={team.id}
            className="bg-zinc-900 p-6 rounded-xl"
          >

            <h2 className="text-2xl font-bold">
              {team.team_name}
            </h2>

            <p>
              Captain: {team.captain_name}
            </p>

            <p>
              Email: {team.captain_email}
            </p>

            <p>
              Status: {team.status}
            </p>
            <div className="flex gap-3">

              <button
                onClick={() =>
                  navigate(`/admin/registrations/${team.id}`)
                }
                className="bg-blue-600 px-4 py-2 rounded-lg"
              >
                View
              </button>

            </div>

            <button
              onClick={() => approveTeam(team.id)}
              className="bg-green-600 px-4 py-2 rounded-lg"
            >
              Approve
            </button>

            <button
              onClick={() => rejectTeam(team.id)}
              className="bg-red-600 px-4 py-2 rounded-lg"
            >
              Reject
            </button>
          </div>

        ))}

      </div>

    </div>
  );
}