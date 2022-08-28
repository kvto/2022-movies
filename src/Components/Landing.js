import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

const Landing = () => {
  return (
        <div className={styles.background}>
      <h1 className={styles.title1}>Aplicación de Peliculas</h1>
      <h1 className={styles.title}>*Bienvenidos*</h1>
      <Link to="/home">
        <button className={styles.buttom}>Ingresar 🔸 </button>
      </Link>
    </div>
  )
}

export default Landing