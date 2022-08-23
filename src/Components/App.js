import React from 'react'
import MoviesGrid from './moviesGrid'
import styles from './App.module.css'
const App = () => {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Movies</h1>
        <MoviesGrid />
      </header>
    </div>
  )
}

export default App