import { useContext } from "react";
import TvContext from "../context/TvContext";

export default function ShowFilmTv() {
  const { Tv } = useContext(TvContext);
  console.log(`serie tv:`, Tv);
  if (Tv.length === 0) {
    return null;
  } else {
    return (
      <div>
        <h1>Serie tv:</h1>
        {Tv.map((el, index) => (
          <div key={index}>
            <img
              src={
                el.poster_path
                  ? `https://image.tmdb.org/t/p/w342/${el.poster_path}`
                  : `https://placehold.co/600x400`
              }
              alt=""
            />
            <h3>{el.name}</h3>
            <h4>{el.original_name}</h4>
            <img src={`/icons/${el.original_language}.svg`} alt="" />
            <p>{el.vote_average}</p>
          </div>
        ))}
      </div>
    );
  }
}
