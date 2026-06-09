import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function NewsDetails() {

  const { id } = useParams();

  const [news, setNews] = useState(null);

    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await api.get(`/announcements/${id}`);
          setNews(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      if (id) void fetchNews();
    }, [id]);

  

  if (!news) {
    return (
      <div className="text-center py-20 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold">
        {news.title}
      </h1>

      <p className="text-gray-400 mt-3">
        {news.created_at
          ? new Date(news.created_at).toLocaleDateString()
          : "No Date"}
      </p>

      <div className="mt-8 bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
        <p className="text-lg text-gray-300 leading-relaxed">
          {news.message}
        </p>
      </div>

    </div>
  );
}