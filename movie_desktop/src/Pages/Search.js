import React from 'react'
import { Link } from 'react-router-dom'
import './Search.scss'
import notImg from '../img/icon-image-not-found-free-vector.jpg'

function Search({films,imgUrl}) {
  return (
    <div className='searchDivs'>
        <img src={films.poster_path? `${imgUrl}${films.poster_path}`: notImg} alt={films.title}/>
          <div className='searchH3Div'>
            <h3>{films.title}</h3>
          </div>
        
        <Link to={`/detal/${films.id}`}>Detail</Link>

    </div>
  )
}

export default Search