export default function Dashboard() {
  return (
    <div>
      <header className="bg-zinc-900 border-b border-zinc-800 p-4 flex justify-between items-center">

  <h1 className="text-xl font-bold">
    Monarchy Admin Panel
  </h1>

  <button
    className="bg-red-600 px-4 py-2 rounded-lg"
  >
    Logout
  </button>

</header>

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-gray-400">
            Tournaments
          </h2>
          <p className="text-4xl font-bold mt-2">
            0
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-gray-400">
            Registrations
          </h2>
          <p className="text-4xl font-bold mt-2">
            0
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-gray-400">
            Announcements
          </h2>
          <p className="text-4xl font-bold mt-2">
            0
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-gray-400">
            Messages
          </h2>
          <p className="text-4xl font-bold mt-2">
            0
          </p>
        </div>

      </div>

    </div>
  );
}