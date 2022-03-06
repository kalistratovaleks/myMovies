import { Fragment, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//helpers
import Api from "./helpers/api";
//components
import { Header } from "./components/header";
import { Wrapper } from "./components/common";
//pages
import { MainPage } from "./pages/main";
import { FavoritesPage } from "./pages/favorites";
import { MovieDetails } from "./pages/movieDetails";
//acrions
import { setReady, setTotalPages, setPage, setGenres } from "./store/actions";

function App() {
  const app_ready = useSelector((state) => state.appReady);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    const getInitial = async () => {
      const genres = await Api.getGenresList().catch(console.log);
      const firstPage = await Api.getNowPlaying(1).catch(console.log);
      if (genres && firstPage) {
        const { total_pages, results } = firstPage;
        dispatch(setGenres(genres));
        dispatch(setTotalPages(total_pages));
        dispatch(setPage(1, results));
        dispatch(setReady(true));
      }
    };
    if (!localStorage.getItem("favorites")) {
      localStorage.setItem("favorites", JSON.stringify([]));
    }

    getInitial();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Fragment>
      <Header />
      {app_ready ? (
        <Wrapper>
          <Routes>
            <Route path="/main/:page" element={<MainPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/details/:id/:pageFrom" element={<MovieDetails />} />
            <Route path="/" element={<Navigate to="/main/1" />} />
          </Routes>
        </Wrapper>
      ) : (
        <div>...load</div>
      )}
    </Fragment>
  );
}

export default App;
