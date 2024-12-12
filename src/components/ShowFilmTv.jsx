import { useContext } from "react";
import TvContext from "../context/TvContext";

export default function ShowFilmTv() {
  const FilmTv = useContext(TvContext);
  console.log(FilmTv);
  return (
    <div>
      {FilmTv.map((el) => (
        <h1 key={el.id}>{el.title}</h1>
      ))}
    </div>
  );
}
