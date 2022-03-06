import React from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
//styled
import { MainCard, IconBlock } from "./styled";
//actions
import { toggleFavorites } from "../../store/actions";
//assets
import { ReactComponent as StarIcon } from "../../assets/star.svg";
//helpers
import Api from "../../helpers/api";

export const MovieCard = ({ poster_path, release_date, title, id }) => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const { page } = useParams();

  return (
    <MainCard key={`movie-${id}`}>
      <img
        src={
          poster_path
            ? Api.poster_url + poster_path
            : "https://www.coffeemarket.dp.ua/image/cache/no_photo-500x500.jpg"
        }
      />
      <IconBlock
        onClick={() => dispatch(toggleFavorites(id))}
        active={favorites.includes(id)}
      >
        <StarIcon />
      </IconBlock>
      <h3>{title}</h3>
      <p>Дата выхода: {moment(release_date).format("DD/MM/YYYY")}</p>
      <Link to={`/details/${id}/${page}`}>Подробнее...</Link>
    </MainCard>
  );
};
