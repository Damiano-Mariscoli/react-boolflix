import { useContext } from "react";
import TvContext from "../context/TvContext";

export default function ShowFilmTv() {
  const { Film } = useContext(TvContext);
  console.log(`Film:`, Film);
  if (Film.length === 0) {
    return null;
  } else {
    return (
      <div>
        <h1>Film:</h1>
        {Film.map((el, index) => (
          <div key={index}>
            <img
              src={
                el.poster_path
                  ? `https://image.tmdb.org/t/p/w342/${el.poster_path}`
                  : `https://placehold.co/600x400`
              }
              alt=""
            />
            <h3>{el.title}</h3>
            <h4>{el.original_title}</h4>
            <img src={`/icons/${el.original_language}.svg`} alt="" />
            <p>{el.vote_average}</p>
          </div>
        ))}
      </div>
    );
  }
}
