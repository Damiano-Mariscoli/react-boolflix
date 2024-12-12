import { useContext } from "react";
import TvContext from "../context/TvContext";

export default function ShowFilmTv() {
  const { Tv } = useContext(TvContext);
  console.log(Tv);
  return (
    <div>
      <h1>Serie tv:</h1>
      {Tv.map((el) => (
        <div key={el.id}>
          <h2>{el.name}</h2>
          <h3>{el.original_name}</h3>
          <p>{el.original_language}</p>
          <p>{el.vote_average}</p>
        </div>
      ))}
    </div>
  );
}
