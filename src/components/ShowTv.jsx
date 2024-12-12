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
        <img src="../assets/icons/it.png" alt="" />
        <h1>Serie tv:</h1>
        {Tv.map((el, index) => (
          <div key={index}>
            <h3>{el.name}</h3>
            <h4>{el.original_name}</h4>
            <img src={`../assets/icons/${el.original_language}.png`} alt="" />
            <p>{el.vote_average}</p>
          </div>
        ))}
      </div>
    );
  }
}
