import { useEffect, useState } from "react";
import api from "../services/api";

export default function GalleryAdmin() {
  const [images, setImages] = useState([]);
  const [tournaments, setTournaments] = useState([]);

  const [tournamentId, setTournamentId] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const fetchGallery = async () => {
    try {
      const response = await api.get("/gallery");
      setImages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTournaments = async () => {
    try {
      const response = await api.get("/tournaments");
      setTournaments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchGallery();
      await fetchTournaments();
    })();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!image || !tournamentId) {
      alert("Select tournament and image");
      return;
    }

    const formData = new FormData();

    formData.append("tournament_id", tournamentId);
    formData.append("caption", caption);
    formData.append("image", image);

    try {
      await api.post("/gallery", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Image Uploaded");

      setCaption("");
      setImage(null);
      setTournamentId("");

      fetchGallery();
    } catch (error) {
      console.error(error);
      alert("Upload Failed");
    }
  };

  const deleteImage = async (id) => {
    if (!window.confirm("Delete this image?")) {
      return;
    }

    try {
      await api.delete(`/gallery/${id}`);
      fetchGallery();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Gallery Management
      </h1>

      {/* Upload Form */}

      <form
        onSubmit={handleUpload}
        className="bg-zinc-900 p-6 rounded-xl mb-8 space-y-4"
      >
        <select
          value={tournamentId}
          onChange={(e) => setTournamentId(e.target.value)}
          className="w-full bg-zinc-800 p-3 rounded-lg"
          required
        >
          <option value="">
            Select Tournament
          </option>

          {tournaments.map((tournament) => (
            <option
              key={tournament.id}
              value={tournament.id}
            >
              {tournament.title}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full bg-zinc-800 p-3 rounded-lg"
        />

        <input
          type="file"
          onChange={(e) =>
            setImage(e.target.files[0])
          }
          className="w-full bg-zinc-800 p-3 rounded-lg"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 px-6 py-3 rounded-lg"
        >
          Upload Image
        </button>
      </form>

      {/* Gallery Grid */}

      <div className="grid md:grid-cols-3 gap-6">

        {images.map((item) => (

          <div
            key={item.id}
            className="bg-zinc-900 rounded-xl overflow-hidden"
          >

            <img
              src={`${api.defaults.baseURL}/${item.image_url}`}
              alt={item.caption}
              className="w-full h-60 object-cover"
            />

            <div className="p-4">

              <p className="mb-4">
                {item.caption}
              </p>

              <button
                onClick={() =>
                  deleteImage(item.id)
                }
                className="bg-red-600 px-4 py-2 rounded-lg"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}
