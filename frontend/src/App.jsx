import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Tournaments from "./pages/Tournaments";

import TournamentDetails from "./pages/TournamentDetails";

import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import Footer from "./components/Footer";




function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/tournament/:id" element={<TournamentDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;