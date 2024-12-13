import { useState } from "react";
import { useContext } from "react";
import TvContext from "../context/TvContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import style from "./Show.module.css";

export default function ShowFilm() {
  const { Film } = useContext(TvContext);
  const [isHovered, setIsHovered] = useState(false);

  if (Film.length === 0) {
    return null;
  } else {
    return (
      <div className="container mt-4 pb-5">
        <h1 className="text-light">Film:</h1>
        <div className="row row-cols-1 row-cols-md-6 g-4">
          {Film.map((el, index) => {
            const stars = (el.vote_average / 2).toFixed(1);

            return (
              <div key={index} className="col">
                <div
                  className={`card ${style.hover}`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className={style.dark_poster}>
                    <img
                      src={
                        el.poster_path
                          ? `https://image.tmdb.org/t/p/w342/${el.poster_path}`
                          : `https://placehold.co/600x400`
                      }
                      className={`card-img-top ${style.poster}`}
                      alt={el.title}
                    />
                    {isHovered && (
                      <div className={style.details}>
                        <h5>{el.title}</h5>
                        <p className="card-subtitle mb-2">
                          {el.original_title}
                        </p>
                        <img
                          src={`/icons/${el.original_language}.svg`}
                          alt=""
                        />
                        <p className={`card-text`}>
                          {Array(Math.ceil(stars))
                            .fill()
                            .map((_, i) => (
                              <FontAwesomeIcon key={i} icon={faStar} />
                            ))}
                        </p>
                      </div>
                    )}
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
