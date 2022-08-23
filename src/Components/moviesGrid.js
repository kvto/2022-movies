import React from 'react'
import movies from "./movies.json"
import MoviesCard from './MoviesCard'
import styles from "./MoviesGrid.module.css"

const moviesGrid = () => {
  return (     
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))
    }
    </ul>
  )
}

export default moviesGrid