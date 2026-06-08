import TournamentCard from "./TournamentCard";

export default function TournamentSection({
  title,
  tournaments,
}) {
  return (
    <section className="mb-20">

      <h2 className="text-3xl font-bold text-blue-500 mb-8">
        {title}
      </h2>

      {tournaments.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">

          {tournaments.map((tournament) => (
            <TournamentCard
              key={tournament.id}
              tournament={tournament}
            />
          ))}

        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center">

          <h3 className="text-2xl font-semibold text-gray-300">
            No Tournaments Available
          </h3>

          <p className="text-gray-500 mt-2">
            There are currently no tournaments in this category.
          </p>

        </div>
      )}

    </section>
  );
}