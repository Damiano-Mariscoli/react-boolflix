import { useContext } from "react";
import TvContext from "../context/TvContext";

export default function ShowFilmTv() {
  const { FilmTv } = useContext(TvContext);
  console.log(FilmTv);
  return (
    <div>
      {FilmTv.map((el) => (
        <div key={el.id}>
          <h2>{el.title}</h2>
          <h3>{el.original_title}</h3>
          <p>{el.original_language}</p>
          <p>{el.vote_average}</p>
        </div>
      ))}
    </div>
  );
}
