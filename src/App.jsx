import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import TvContext from "./context/TvContext";
import ShowFilm from "./components/ShowFilm";
import SearchBar from "./components/SearchBar";
import ShowTv from "./components/ShowTv";
function App() {
  let [SearchFilmTv, setSearchFilmTv] = useState([]);
  useEffect(() => {
    setSearchFilmTv(SearchFilmTv);
  }, []);

  const [Film, setFilm] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=2639ea2071246be22a299842addbf05e&query=${SearchFilmTv}`
      )
      .then((res) => setFilm(res.data.results))
      .catch((err) => console.error(err));
  }, [SearchFilmTv]);
  const [Tv, setTv] = useState([SearchFilmTv]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=2639ea2071246be22a299842addbf05e&query=${SearchFilmTv}`
      )
      .then((res) => setTv(res.data.results))
      .catch((err) => console.error(err));
  }, [SearchFilmTv]);

  return (
    <TvContext.Provider value={{ Film, Tv, setSearchFilmTv }}>
      <SearchBar />
      <ShowFilm />
      <ShowTv />
    </TvContext.Provider>
  );
}

export default App;
