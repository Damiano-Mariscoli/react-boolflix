import { useContext } from "react";
import TvContext from "../context/TvContext";

export default function ShowFilmTv() {
  const { Film } = useContext(TvContext);
  console.log(Film);
  return (
    <div>
      <h1>Film:</h1>
      {Film.map((el) => (
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
