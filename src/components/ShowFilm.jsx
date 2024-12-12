import { useContext } from "react";
import TvContext from "../context/TvContext";

export default function ShowFilmTv() {
  const { Film } = useContext(TvContext);
  console.log(Film);
  if (Film.length === 0) {
    return null;
  } else {
    return (
      <div>
        <h1>Film:</h1>
        {Film.map((el) => (
          <div key={el.id}>
            <h3>{el.title}</h3>
            <h4>{el.original_title}</h4>
            <p>{el.original_language}</p>
            <p>{el.vote_average}</p>
          </div>
        ))}
      </div>
    );
  }
}
