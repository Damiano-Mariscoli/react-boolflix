import { useContext } from "react";
import TvContext from "../context/TvContext";

export default function SearchBar() {
  const { setSearchFilmTv } = useContext(TvContext);
  return (
    <>
      <div>
        <input type="text" placeholder="Cerca un film o una serie tv" />
        <button onClick={() => setSearchFilmTv("interstellar")}>Cerca</button>
      </div>
    </>
  );
}
