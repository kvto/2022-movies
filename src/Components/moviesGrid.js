import { useEffect, useState } from "react";
import { get } from "../httpClient";
import  MoviesCard  from "./MoviesCard";
import styles from "./MoviesGrid.module.css";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default MoviesGrid