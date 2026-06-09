import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function AnnouncementSection() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const loadAnnouncements = async () => {
      try {
        const response = await api.get("/announcements");
        const items = Array.isArray(response.data) ? response.data : [];
        setAnnouncements(items.slice(0, 3));
      } catch (error) {
        console.error(error);
      }
    };

    void loadAnnouncements();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Latest Announcements
      </h2>

      <div className="space-y-6">
        {announcements.length > 0 ? (
          announcements.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-blue-500">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-2">
                {item.message}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400 border border-zinc-800 bg-zinc-900 p-6 rounded-xl">
            No new announcements available right now.
          </div>
        )}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/news"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          View All News
        </Link>
      </div>
    </section>
  );
}
