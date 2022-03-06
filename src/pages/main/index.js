import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//components
import { MovieCard } from "../../components/movieCard";
import { EmptyCard } from "../../components/movieCard/styled";
import { PageNavigation } from "../../components/navigation";
import { Loader } from "../../components/loader";
//helpers
import Api from "../../helpers/api";
//actions
import { setPage } from "../../store/actions";
//styled
import { Flex } from "./styled";

export const MainPage = () => {
  const { page } = useParams();

  const movies = useSelector((store) => store.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!movies[page]) {
      Api.getNowPlaying(page).then((data) =>
        dispatch(setPage(page, data.results))
      );
    }
  }, [page]);

  const renderMovies = () => {
    if (movies[page]) {
      return movies[page].map(
        ({ title, id, overview, release_date, poster_path }) => (
          <MovieCard
            key={id}
            title={title}
            id={id}
            overview={overview}
            release_date={release_date}
            poster_path={poster_path}
          />
        )
      );
    }
  };

  return (
    <section>
      <PageNavigation />
      <Flex>
        {movies[page] ? renderMovies() : <Loader />}
        <EmptyCard />
      </Flex>
      {movies[page] ? <PageNavigation /> : null}
    </section>
  );
};
