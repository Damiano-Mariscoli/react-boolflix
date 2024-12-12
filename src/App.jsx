import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TvContext from "./context/TvContext";
import ShowFilmTv from "./components/ShowFilmTv";
import SearchBar from "./components/SearchBar";
function App() {
  let [SearchFilmTv, setSearchFilmTv] = useState("");
  useEffect(() => {
    setSearchFilmTv((SearchFilmTv = ""));
  }, []);

  const [FilmTv, setFilmTv] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=2639ea2071246be22a299842addbf05e&query=${SearchFilmTv}`
      )
      .then((res) => setFilmTv(res.data.results))
      .catch((err) => console.error(err));
  }, [SearchFilmTv]);

  return (
    <TvContext.Provider value={{ FilmTv, setSearchFilmTv }}>
      <SearchBar />
      <ShowFilmTv />
    </TvContext.Provider>
  );
}

export default App;
