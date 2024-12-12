import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TvContext from "./context/TvContext";
import ShowFilmTv from "./components/ShowFilmTv";

function App() {
  const [FilmTv, setFilmTv] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=2639ea2071246be22a299842addbf05e&query=ritorno al futuro"
      )
      .then((res) => setFilmTv(res.data.results))
      .catch((err) => console.error(err));
  }, []);
  console.log(FilmTv);
  return (
    <TvContext.Provider value={FilmTv}>
      <ShowFilmTv />
    </TvContext.Provider>
  );
}

export default App;
