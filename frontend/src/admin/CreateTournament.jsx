import { useState } from "react";
import api from "../services/api";

export default function CreateTournament() {

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    description: "",
    game_name: "Mobile Legends: Bang Bang",
    banner_image: "",
    rulebook_url: "",
    prize_pool: "",
    status: "Upcoming",
    registration_start: "",
    registration_end: "",
    tournament_start: "",
    tournament_end: "",
    max_teams: 64,
    tournament_format: "Bracket Only"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

  await api.post(
    "/tournaments",
    form
  );

  alert("Tournament Created Successfully");

} catch (error) {

  console.error(error);
  alert("Failed To Create Tournament");

}
  };
const [tournamentFormat, setTournamentFormat] =
  useState("Bracket Only");
  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Create Tournament
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-4xl"
      >

        <input
          name="title"
          placeholder="Tournament Title"
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 rounded-lg"
        />

        <input
          name="subtitle"
          placeholder="Subtitle"
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 rounded-lg"
        />

        <textarea
          name="description"
          placeholder="Description"
          rows="5"
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 rounded-lg"
        />

        <input
          name="banner_image"
          placeholder="Banner Image URL"
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 rounded-lg"
        />

        <input
          name="rulebook_url"
          placeholder="Rulebook URL"
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 rounded-lg"
        />

        <input
          type="number"
          name="prize_pool"
          placeholder="Prize Pool"
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 rounded-lg"
        />

        <select
          name="status"
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 rounded-lg"
        >
          <option>Upcoming</option>
          <option>Ongoing</option>
          <option>Completed</option>
        </select>

        <input
          type="datetime-local"
          name="registration_start"
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 rounded-lg"
        />

        <input
          type="datetime-local"
          name="registration_end"
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 rounded-lg"
        />

        <input
          type="datetime-local"
          name="tournament_start"
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 rounded-lg"
        />

        <input
          type="datetime-local"
          name="tournament_end"
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 rounded-lg"
        />
        <select
          value={tournamentFormat}
          onChange={(e) => setTournamentFormat(e.target.value)}
          className="w-full bg-zinc-900 p-4 rounded-lg"
        >
          <option value="Bracket Only">
            Bracket Only
          </option>

          <option value="Round Robin + Bracket">
            Round Robin + Bracket
          </option>
        </select>
        <input
          type="number"
          name="max_teams"
          placeholder="Max Teams"
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 rounded-lg"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
        >
          Create Tournament
        </button>

      </form>

    </div>
  );
}