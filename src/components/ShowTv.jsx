import { useContext, useState } from "react";
import TvContext from "../context/TvContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import style from "./Show.module.css";

export default function ShowTv() {
  const { Tv } = useContext(TvContext);
  const [isHovered, setIsHovered] = useState(null);
  console.log(`Serie TV:`, Tv);

  if (Tv.length === 0) {
    return null;
  } else {
    return (
      <div className="container mt-4 pb-5">
        <h1 className="text-light">Serie TV:</h1>
        <div className="row row-cols-lg-6 row-cols-md-4 g-4">
          {Tv.map((el, index) => {
            const stars = Math.ceil(el.vote_average / 2) || 0;

            return (
              <div key={index} className="col">
                <div
                  className={`card h-100 ${style.hover}`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className={style.dark_poster}>
                    <img
                      src={
                        el.poster_path
                          ? `https://image.tmdb.org/t/p/w342/${el.poster_path}`
                          : `https://placehold.co/600x400`
                      }
                      className={`card-img-top ${style.poster}`}
                      alt={el.name}
                    />
                    {isHovered && (
                      <div className={style.details}>
                        <h5>{el.name}</h5>
                        <p className="card-subtitle mb-2">{el.original_name}</p>
                        <img
                          src={`/icons/${el.original_language}.svg`}
                          alt=""
                        />
                        <p className="card-text">
                          {Array(stars)
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
