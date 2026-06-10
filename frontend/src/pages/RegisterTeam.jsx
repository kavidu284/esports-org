import { useState } from "react";
import { useParams } from "react-router-dom";
import PlayerSection from "../components/PlayerSection";
import api from "../services/api";

export default function RegisterTeam() {
  const { id } = useParams();

  const [agree, setAgree] = useState(false);


const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  formData.append("tournament_id", id);

  try {
    const response = await api.post(
      "/registrations/register",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    alert(response.data.message);

    e.target.reset();
    setAgree(false);

  } catch (error) {
    console.error(error);
    alert("Registration Failed");
  }
};



  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-black text-center mb-3">
          MLBB Tournament Registration
        </h1>

        <p className="text-center text-gray-400 mb-12">
          Monarchy Esports Official Registration Form
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
          encType="multipart/form-data"
        >

          {/* TEAM INFORMATION */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

            <h2 className="text-3xl font-bold text-blue-500 mb-6">
              Team Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                name="team_name"
                placeholder="Team Name"
                required
                className="bg-zinc-800 p-3 rounded-lg"
              />

              <input
                type="file"
                name="team_logo"
                required
                className="bg-zinc-800 p-3 rounded-lg"
              />

            </div>

          </div>

          {/* CAPTAIN INFORMATION */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

            <h2 className="text-3xl font-bold text-blue-500 mb-6">
              Captain Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                name="captain_name"
                placeholder="Captain Name"
                required
                className="bg-zinc-800 p-3 rounded-lg"
              />

              <input
                type="email"
                name="captain_email"
                placeholder="Captain Email"
                required
                className="bg-zinc-800 p-3 rounded-lg"
              />

              <input
                type="text"
                name="captain_phone"
                placeholder="Captain Phone"
                required
                className="bg-zinc-800 p-3 rounded-lg"
              />

              <input
                type="text"
                name="discord_username"
                placeholder="Discord Username"
                required
                className="bg-zinc-800 p-3 rounded-lg"
              />

            </div>

          </div>

          {/* MAIN PLAYERS */}

          <h2 className="text-4xl font-bold text-center text-blue-500">
            Main Roster
          </h2>

          <PlayerSection
            title="Player 1 (Captain)"
            prefix="player1"
          />

          <PlayerSection
            title="Player 2"
            prefix="player2"
          />

          <PlayerSection
            title="Player 3"
            prefix="player3"
          />

          <PlayerSection
            title="Player 4"
            prefix="player4"
          />

          <PlayerSection
            title="Player 5"
            prefix="player5"
          />

          {/* SUBSTITUTES */}

          <h2 className="text-4xl font-bold text-center text-blue-500">
            Substitute Players
          </h2>

          <PlayerSection
            title="Substitute 1"
            prefix="sub1"
            required={false}
          />

          <PlayerSection
            title="Substitute 2"
            prefix="sub2"
            required={false}
          />

          {/* VERIFICATION */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

            <h2 className="text-3xl font-bold text-blue-500 mb-6">
              Verification
            </h2>

            <label className="block mb-3 text-gray-300">
              Team Lobby Screenshot
            </label>

            <input
              type="file"
              name="lobby_screenshot"
              required
              className="bg-zinc-800 p-3 rounded-lg w-full"
            />

            <div className="mt-6 flex items-center gap-3">

              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />

              <label>
                I agree to the Monarchy Esports tournament
                rules and confirm all submitted
                information is correct.
              </label>

            </div>

          </div>

          {/* SUBMIT */}

          <div className="text-center">

            <button
              type="submit"
              disabled={!agree}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-10 py-4 text-xl font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 disabled:opacity-50"
            >
              Submit Registration
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}
