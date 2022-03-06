import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//helpers
import Api from "../../helpers/api";
//components
import { Loader } from "../../components/loader";
//actions
import { setMovieDetails } from "../../store/actions";
//styled
import { DetailsContainer, Info, SubInfo } from "./styled";

export const MovieDetails = () => {
  const { id, pageFrom } = useParams();

  const moviesDetails = useSelector((store) => store.movieDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!moviesDetails[id]) {
      Api.getDetails(id).then((data) => {
        dispatch(setMovieDetails(id, data));
      });
    }
  }, [id]);

  const renderGenres = (genres) => {
    let str = `Жанры: `;
    genres.forEach(({ name }, i) => {
      str += `${name} ${i < genres.length - 1 ? ", " : "."}`;
    });
    return str;
  };

  if (moviesDetails[id]) {
    const {
      backdrop_path,
      genres,
      homepage,
      title,
      poster_path,
      tagline,
      overview,
      original_title,
      adult,
      runtime,
    } = moviesDetails[id];
    return (
      <DetailsContainer>
        <Link to={`/main/${pageFrom}`}>Назад</Link>
        <h2>
          {title} / {original_title}
        </h2>
        <Info>
          <img
            src={
              poster_path
                ? Api.poster_url + poster_path
                : "https://www.coffeemarket.dp.ua/image/cache/no_photo-500x500.jpg"
            }
            alt="poster"
          />
          <SubInfo>
            <i>{tagline}</i>
            <p>{genres.length > 0 ? renderGenres(genres) : null}</p>
            <p>{adult ? <div>18+</div> : null}</p>
            <p>{runtime ? `Длительность: ${runtime} минут.` : null}</p>
            <p>{overview}</p>
            <div>
              {homepage ? (
                <a target="_blank" href={homepage}>
                  Официальный сайт
                </a>
              ) : null}
            </div>
            {backdrop_path ? (
              <img src={Api.poster_url + backdrop_path} alt="frame" />
            ) : null}
          </SubInfo>
        </Info>
      </DetailsContainer>
    );
  } else {
    return <Loader />;
  }
};
