import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function AdminLogin() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await api.post(
        "/login",
        {
          username,
          password
        }
      );

      if (response.data.success) {

        localStorage.setItem(
          "admin",
          JSON.stringify(response.data.admin)
        );

        navigate("/admin/dashboard");

      } else {

        alert("Invalid Credentials");

      }

    } catch (error) {

      console.error(error);
      alert("Login Failed");

    }

  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      <form
        onSubmit={handleLogin}
        className="bg-zinc-900 p-10 rounded-2xl w-full max-w-md"
      >

        <h1 className="text-white text-4xl font-bold mb-8 text-center">
          Admin Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 rounded-lg mb-4 bg-zinc-800 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg mb-6 bg-zinc-800 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg"
        >
          Login
        </button>

      </form>

    </div>
  );
}