import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function RegistrationDetails() {
  const { id } = useParams();

  const [registration, setRegistration] = useState(null);
  const [players, setPlayers] = useState([]);

  const fetchRegistration = useCallback(async () => {
    try {
      const response = await api.get(`/registrations/${id}/full`);

      setRegistration(response.data.registration);
      setPlayers(response.data.players);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    const load = async () => {
      await fetchRegistration();
    };

    load();
  }, [fetchRegistration]);

  const approveTeam = async () => {
    try {
      await api.put(
        `/registrations/${id}/approve`
      );

      fetchRegistration();
    } catch (error) {
      console.error(error);
    }
  };

  const rejectTeam = async () => {
    try {
      await api.put(
        `/registrations/${id}/reject`
      );

      fetchRegistration();
    } catch (error) {
      console.error(error);
    }
  };

  if (!registration) {
    return (
      <div className="text-white p-8">
        Loading...
      </div>
    );
  }

  return (
    <div className="text-white">

      <h1 className="text-4xl font-bold mb-8">
        Registration Details
      </h1>

      {/* TEAM INFO */}

      <div className="bg-zinc-900 p-6 rounded-xl mb-6">

        <div className="flex items-center gap-6">

          <img
            src={`${api.defaults.baseURL}/${registration.team_logo}`}
            alt={registration.team_name}
            className="w-32 h-32 rounded-xl object-cover"
          />

          <div>

            <h2 className="text-3xl font-bold">
              {registration.team_name}
            </h2>

            <p className="mt-2">
              Captain: {registration.captain_name}
            </p>

            <p>
              Email: {registration.captain_email}
            </p>

            <p>
              Phone: {registration.captain_phone}
            </p>

            <p>
              Discord: {registration.discord_username}
            </p>

            <div className="mt-3">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  registration.status === "Approved"
                    ? "bg-green-600"
                    : registration.status === "Rejected"
                    ? "bg-red-600"
                    : "bg-yellow-600"
                }`}
              >
                {registration.status}
              </span>
            </div>

          </div>

        </div>

        <div className="flex gap-4 mt-6">

          <button
            onClick={approveTeam}
            className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg"
          >
            Approve
          </button>

          <button
            onClick={rejectTeam}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
          >
            Reject
          </button>

        </div>

      </div>

      {/* LOBBY SCREENSHOT */}

      {registration.lobby_screenshot && (
        <div className="bg-zinc-900 p-6 rounded-xl mb-6">

          <h2 className="text-2xl font-bold mb-4">
            Lobby Screenshot
          </h2>

          <img
            src={`${api.defaults.baseURL}/${registration.lobby_screenshot}`}
            alt="Lobby Screenshot"
            className="rounded-xl max-h-[500px]"
          />

        </div>
      )}

      {/* PLAYERS */}

      <div className="bg-zinc-900 p-6 rounded-xl">

        <h2 className="text-2xl font-bold mb-6">
          Team Players
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {players.map((player) => (

            <div
              key={player.id}
              className="border border-zinc-700 rounded-xl p-4"
            >

              <img
                src={`${api.defaults.baseURL}/${player.player_photo}`}
                alt={player.real_name}
                className="w-24 h-24 rounded-lg object-cover mb-4"
              />

              <h3 className="text-xl font-bold">
                {player.real_name}
              </h3>

              <p>
                IGN: {player.ign}
              </p>

              <p>
                MLBB ID: {player.mlbb_id}
              </p>

              <p>
                Server ID: {player.server_id}
              </p>

              <p
                className={`mt-2 font-semibold ${
                  player.is_substitute
                    ? "text-yellow-400"
                    : "text-green-400"
                }`}
              >
                {player.is_substitute
                  ? "Substitute Player"
                  : "Main Player"}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
