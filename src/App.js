import React from 'react'
import MoviesGrid from './Components/moviesGrid'
import Landing from './Components/Landing'
import styles from './App.module.css'
import { Route, Routes } from "react-router";
import MovieDetails from './Components/MovieDetails';

const App = () => {
  return (
    <div  className="App">
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Landing/>}/>
      <Route exact path="/home" element={<MoviesGrid/>}/>
        <Route exact path="/movies/:movieId" element={<MovieDetails/>}>
        </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App