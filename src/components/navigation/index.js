import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
//styled
import { PagesNav } from "./styled";

export const PageNavigation = () => {
  const { page } = useParams();
  const totalPages = useSelector((store) => store.totalPages);

  return (
    <PagesNav>
      {page !== "1" ? <Link to={`/main/${+page - 1}`}>Предыдущая</Link> : null}
      <span>
        {page}/{totalPages}
      </span>
      {+page < totalPages ? (
        <Link to={`/main/${+page + 1}`}>Следующая</Link>
      ) : null}
    </PagesNav>
  );
};
