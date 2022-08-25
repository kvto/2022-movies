import styles from "./MoviesCard.module.css"
import React from 'react'
import { Link } from "react-router-dom";

const MoviesCard = ({movie}) => {
    const imageUrl = "https://image.tmdb.org/t/p/w300"+ movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={`/movies/${movie.id}`} style={{ color: '#FFF' }} >
        <img 
        width={230}
        height={345}
        className={styles.movieImage}
        src={imageUrl} 
        alt={movie.title} />
        <div>{movie.title} </div>
         </Link>
        </li>
  )
}

export default MoviesCard