import { useContext } from "react";
import TvContext from "../context/TvContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ShowFilmTv() {
  const { Tv } = useContext(TvContext);
  console.log(`serie tv:`, Tv);

  if (Tv.length === 0) {
    return null;
  } else {
    return (
      <div className="container">
        <h1>Serie tv:</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {Tv.map((el, index) => {
            const stars = Math.ceil(el.vote_average / 2) || 0;
            return (
              <div key={index} className="col">
                <div className="card h-100">
                  <img
                    src={
                      el.poster_path
                        ? `https://image.tmdb.org/t/p/w342/${el.poster_path}`
                        : `https://placehold.co/600x400`
                    }
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h3 className="card-title">{el.name}</h3>
                  </div>
                  <div className="card-footer">
                    <p className="card-text">
                      {el.original_name}
                      <img
                        src={`/icons/${el.original_language}.svg`}
                        alt=""
                        className="ms-2"
                      />
                    </p>
                    <p className="card-text">
                      {Array(stars)
                        .fill()
                        .map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} />
                        ))}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
