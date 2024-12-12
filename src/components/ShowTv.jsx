import { useContext } from "react";
import TvContext from "../context/TvContext";

export default function ShowFilmTv() {
  const { Tv } = useContext(TvContext);

  if (Tv.length === 0) {
    return null;
  } else {
    return (
      <div>
        <h1>Serie tv:</h1>
        {Tv.map((el) => (
          <div key={el.id}>
            <h3>{el.name}</h3>
            <h4>{el.original_name}</h4>
            <p>{el.original_language}</p>
            <p>{el.vote_average}</p>
          </div>
        ))}
      </div>
    );
  }
}
