import axios from 'axios'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { apiKey, imgUrl, imgUrlW1250 } from '../Service/Service'
import { AiFillPlayCircle } from 'react-icons/ai';

import './DetalMovie.scss'

import notImg from '../img/icon-image-not-found-free-vector.jpg'
function DetalMovie() {

    // const imgUrles = 'https://image.tmdb.org/t/p/w200'
    // const apiKey = 'f49f131ae603b33413f9aec982a14ae6'

    const youtubeUrl = "https://www.youtube.com/embed/";

    const { id } = useParams()
    // for Detal
    const [movieDetal, setMovieDetal] = React.useState([])

    // for Trailer Video
    const [trailer, setTrailer] = React.useState({})
    const [togglePlay, setTogglePlay] = React.useState(false)

    // toggle
    const getPlayToggle = () => {
        setTogglePlay(!togglePlay)
    }

    const getMovieTrailer = (id) => {
        return axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=f49f131ae603b33413f9aec982a14ae6&language=en`);
    }

    //  fetch Traile
    React.useEffect(() => {
        const fetchApi = async () => {
            const respons = (await getMovieTrailer(id))
            setTrailer(respons?.data.results[3]);
        }
        fetchApi(id)
    }, [id])


    // Fetch Detals
    React.useEffect(() => {
        const detalFetch = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
                setMovieDetal(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        detalFetch()
    }, [id])


    console.log(id)
    console.log(movieDetal)




    return (
        <div className='detalDiv' style={{ backgroundImage: movieDetal.backdrop_path ? `url(${imgUrlW1250}${movieDetal.backdrop_path})` : `url(${notImg})` }} >

            <div className='backgrounColorDiv'>

                <div className='imgDiv'>
                    <img src={movieDetal.poster_path ? `${imgUrl}${movieDetal.poster_path}` : notImg} alt={movieDetal.title} />
                </div>

                <div className='dataDetalDiv'>

                    <h1 style={{ fontSize: '50px' }}>{movieDetal.title}</h1>
                    <div>
                        <h2>Overview:</h2>
                        <p style={{ width: '70%' }}>{movieDetal.overview}</p>
                    </div>

                    <div>
                        <b>Genres: </b>
                        {movieDetal.genres ? movieDetal.genres.slice(0, 5).map((genre) => genre.name).join(', ') : null}
                    </div>

                    <div>
                        <p>Production Companie: {movieDetal.production_companies ? movieDetal.production_companies.map((e, i) => (
                            <span key={i}>{e.name}</span>
                        )) : null}</p>
                    </div>

                    <div>
                        <p>Production Countrie: {movieDetal.production_countries ? movieDetal.production_countries.map((e, i) => (
                            <span key={i}>{e.name}</span>
                        )) : null}</p>
                    </div>

                    <p>Release Date: {movieDetal.release_date}</p>

                    <p> Runtime: {movieDetal.runtime ? Math.floor(movieDetal.runtime / 60) : null}h {movieDetal.runtime ? movieDetal.runtime % 60 : null}m</p>

                    <p className='rang'>⭐{movieDetal.vote_average ? movieDetal.vote_average.toFixed(1) : null} / 10</p>

                    <div className='trailerDiv'>
                        <AiFillPlayCircle onClick={getPlayToggle} /> <span>Trailer</span>
                    </div>


                    <Link to='/'>Back</Link>
                </div>

                {togglePlay ? 
                <div  onClick={getPlayToggle} className='trailerPalyDiv'>
                    <iframe className="iframe"
                        src={ trailer ? `${youtubeUrl}${trailer.key}` : null}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <button onClick={getPlayToggle} >Back</button>
                </div> 
                : null}

            </div>

        </div>
    )
}

export default DetalMovie