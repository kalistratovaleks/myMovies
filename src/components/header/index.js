import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/main/1">Главная</Link>
      <Link to="/favorites">Избранное</Link>
    </StyledHeader>
  );
};
