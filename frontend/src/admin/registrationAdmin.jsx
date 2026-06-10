import { useEffect, useState } from "react";
import api from "../services/api";

export default function RegistrationsAdmin() {

  const [registrations, setRegistrations] = useState([]);

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

          </div>

        ))}

      </div>

    </div>
  );
}