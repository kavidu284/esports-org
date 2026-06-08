export default function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto py-24 px-6">

      <h2 className="text-4xl font-bold text-center mb-8">
        About Monarchy Esports
      </h2>

      <p className="text-center text-gray-300 leading-8 max-w-4xl mx-auto">
        Monarchy Esports is a non-profit esports organization founded by gamers,
        for gamers, with the vision of building a dynamic and inclusive
        competitive gaming community.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-16">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-bold text-blue-500">
            Competitive
          </h3>
          <p className="text-gray-400 mt-2">
            Professional tournaments.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-bold text-blue-500">
            Community
          </h3>
          <p className="text-gray-400 mt-2">
            Growing MLBB ecosystem.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-bold text-blue-500">
            Development
          </h3>
          <p className="text-gray-400 mt-2">
            Player improvement.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-bold text-blue-500">
            Leadership
          </h3>
          <p className="text-gray-400 mt-2">
            Future esports leaders.
          </p>
        </div>

      </div>

    </section>
  );
}