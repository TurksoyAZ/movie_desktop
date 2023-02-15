import React from 'react'
import { Link } from 'react-router-dom'
import './MovieListe.scss'

function MovieListe({movies,imgUrl}) {
  return (
    <div className='movieListeDivs'>
        <img src={imgUrl+movies.poster_path} alt={movies.title}/>
        <div className='divH3'>
          <h3>{movies.title}</h3>
        </div>
        <Link target={`/detal/${movies.id}`} to={`/detal/${movies.id}`}>Detal</Link>
    </div>
  )
}

export default MovieListe