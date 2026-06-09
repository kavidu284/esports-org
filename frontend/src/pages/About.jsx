export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section className="py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold">
            About Monarchy Esports
          </h1>

          <p className="text-gray-400 text-xl mt-6">
            Building a competitive gaming community where
            passion, skill, and sportsmanship come together.
          </p>

        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6">
          Who We Are
        </h2>

        <p className="text-gray-300 leading-8 text-lg">
          Monarchy Esports is a community-driven esports
          organization dedicated to creating exciting and
          professional competitive gaming experiences.
          We organize tournaments, community events, and
          competitive opportunities for players who want
          to challenge themselves and grow within the
          esports scene.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-zinc-900 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            Our mission is to provide fair, organized,
            and engaging tournaments that bring players
            together while encouraging teamwork,
            competitiveness, and continuous improvement.
          </p>

        </div>
      </section>

      {/* Vision */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold mb-6">
          Our Vision
        </h2>

        <p className="text-gray-300 leading-8 text-lg">
          We aim to become one of the most respected esports
          communities by fostering talent, supporting players,
          and creating unforgettable competitive experiences
          for gamers at every level.
        </p>

      </section>

      {/* What We Do */}
      <section className="bg-zinc-900 py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-black p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">
                Tournaments
              </h3>

              <p className="text-gray-400">
                Organizing competitive tournaments with
                structured schedules, fair rules, and
                rewarding prize pools.
              </p>
            </div>

            <div className="bg-black p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">
                Community
              </h3>

              <p className="text-gray-400">
                Building a welcoming environment where
                players can connect, compete, and grow.
              </p>
            </div>

            <div className="bg-black p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">
                Development
              </h3>

              <p className="text-gray-400">
                Encouraging player improvement through
                competitive experiences and community
                engagement.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold mb-10">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-2">
              Fair Play
            </h3>
            <p className="text-gray-400">
              Integrity and sportsmanship in every match.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-2">
              Respect
            </h3>
            <p className="text-gray-400">
              Respect for players, teams, and staff.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-2">
              Growth
            </h3>
            <p className="text-gray-400">
              Helping players improve and succeed.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-2">
              Excellence
            </h3>
            <p className="text-gray-400">
              Delivering high-quality esports experiences.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 text-center">

        <h2 className="text-4xl font-bold">
          Join the Monarchy Esports Community
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Compete, improve, and become part of the next
          generation of esports talent.
        </p>

      </section>

    </div>
  );
}