import { useEffect, useState } from "react";
import api from "../services/api";
import TournamentSection from "../components/TournamentSection";

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const loadTournaments = async () => {
      try {
        const response = await api.get("/tournaments");
        setTournaments(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    void loadTournaments();
  }, []);

  const current = tournaments.filter(
    (t) => t.status === "Ongoing"
  );

  const upcoming = tournaments.filter(
    (t) => t.status === "Upcoming"
  );

  const completed = tournaments.filter(
    (t) => t.status === "Completed"
  );

  return (
    <div className="min-h-screen bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold text-center mb-16">
          Tournaments
        </h1>

        <TournamentSection
          title="🔥 Current Tournament"
          tournaments={current}
        />

        <TournamentSection
          title="🚀 Upcoming Tournaments"
          tournaments={upcoming}
        />

        <TournamentSection
          title="🏆 Past Tournaments"
          tournaments={completed}
        />

      </div>

    </div>
  );
}