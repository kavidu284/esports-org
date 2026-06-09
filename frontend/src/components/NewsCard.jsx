import { Link } from "react-router-dom";

export default function NewsCard({ news }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <h3 className="text-2xl font-bold text-white">
        {news.title}
      </h3>

      <p className="text-gray-400 mt-3 line-clamp-3">
        {news.message}
      </p>

      <Link
        to={`/news/${news.id}`}
        className="mt-5 inline-flex items-center gap-1 font-semibold text-blue-400 transition-colors duration-300 hover:text-blue-300"
      >
        Read More →
      </Link>

    </div>
  );
}