import React from 'react'
import MoviesGrid from './Components/moviesGrid'
import styles from './App.module.css'
import { Route, Routes } from "react-router";
import MovieDetails from './Components/MovieDetails';

const App = () => {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <Routes>
        <Route exact path="/movies/:movieId" element={<MovieDetails/>}>
        </Route>
        <Route path="/" element={<MoviesGrid/>}>
          Home
        </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App