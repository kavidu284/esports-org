import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [stats, setStats] = useState({
    tournaments: 0,
    registrations: 0,
    approved: 0,
    pending: 0,
    announcements: 0,
    messages: 0,
  });

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const response = await api.get("/dashboard");
        if (mounted) setStats(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-gray-400">🏆 Tournaments</h2>
          <p className="text-4xl font-bold mt-2">
            {stats.tournaments}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-gray-400">👥 Registrations</h2>
          <p className="text-4xl font-bold mt-2">
            {stats.registrations}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-gray-400">✅ Approved Teams</h2>
          <p className="text-4xl font-bold mt-2">
            {stats.approved}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-gray-400">⏳ Pending Teams</h2>
          <p className="text-4xl font-bold mt-2">
            {stats.pending}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-gray-400">📢 Announcements</h2>
          <p className="text-4xl font-bold mt-2">
            {stats.announcements}
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-gray-400">📩 Messages</h2>
          <p className="text-4xl font-bold mt-2">
            {stats.messages}
          </p>
        </div>

      </div>
    </div>
  );
}
