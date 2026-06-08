import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import TournamentCard from "../components/TournamentCard";
import AnnouncementSection from "../components/AnnouncementSection";

import api from "../services/api";

export default function Home() {

  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const loadTournaments = async () => {
      try {

        const response =
          await api.get("/tournaments");

        setTournaments(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    void loadTournaments();
  }, []);

  return (
    <>

      <Hero />

      <AboutSection />

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Tournament
        </h2>

        {tournaments.length > 0 ? (

          <TournamentCard
            tournament={tournaments[0]}
          />

        ) : (

          <div className="text-center text-gray-400">
            No tournaments available
          </div>

        )}

      </section>

      <AnnouncementSection />


    </>
  );
}