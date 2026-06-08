import { useEffect, useState } from "react";
import api from "../services/api";
import NewsCard from "../components/NewsCard";

export default function News() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get("/announcements");
        setNews(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    void fetchNews();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold text-center mb-12">
        News & Announcements
      </h1>

      {news.length > 0 ? (

        <div className="grid md:grid-cols-2 gap-6">

          {news.map((item) => (
            <NewsCard
              key={item.id}
              news={item}
            />
          ))}

        </div>

      ) : (

        <div className="text-center text-gray-400">
          No announcements available.
        </div>

      )}

    </div>
  );
}