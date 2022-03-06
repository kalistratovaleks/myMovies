import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//actions
import { toggleFavoritesFull } from "../../store/actions";
//helpers
import Api from "../../helpers/api";
//styled
import { Flex } from "../main/styled";
//components
import { MovieCard } from "../../components/movieCard";
import { EmptyCard } from "../../components/movieCard/styled";

export const FavoritesPage = () => {
  const favorites = useSelector((store) => store.favorites);
  const favoritesFull = useSelector((store) => store.favoritesFull);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      if (favorites.length && favorites.length !== favoritesFull.length) {
        Promise.all(favorites.map((id) => Api.getDetails(id))).then((resp) =>
          dispatch(toggleFavoritesFull(resp))
        );
      }
    };

    getData();
  }, []);

  const renderMovies = () => {
    return favoritesFull.map(
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
  };

  return (
    <section>
      <Flex>
        {renderMovies()}
        <EmptyCard />
        <EmptyCard />
      </Flex>
    </section>
  );
};
