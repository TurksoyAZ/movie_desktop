import React from 'react'
import { imgUrl, loadMore, genreFetch, searchFetch } from '../Service/Service'

import MovieListe from '../Pages/MovieListe'
import Search from '../Pages/Search'
import './Movies.scss'

function Movie() {

    // Load More
    const [movieData, setMovieData] = React.useState([])
    const [counter, setCounter] = React.useState(2)

    // search
    const [searchData, setSearchData] = React.useState([])
    const [inputValue, setInputValue] = React.useState('')
    const [identifier, setIdentifier] = React.useState(false)

    // genres
    const [genres, setGenres] = React.useState([])


    // FETCH USEEFFECT 
    React.useEffect(() => {

        const fetchApi = async () => {
            setMovieData(await loadMore())
            setGenres(await genreFetch())
            setSearchData(await searchFetch())
        }
        fetchApi()

    }, [])


    // HANDLE LOAD MORE
    const handleLoadMore = () => {

        const fetchLoad = async () => {
            const more = await loadMore(counter)
            setMovieData([...movieData, ...more])
        }
        fetchLoad()

        setCounter(prev => prev + 1)
    }

    console.log(genres)

    // SEARCH 
    const handleSearch = (e) => {
        e.preventDefault()

        // 
        if (inputValue) {
            setIdentifier(true)
        } else {
            setIdentifier(false)
        }

        // 
        const searchFetching = async () => {
            const data = await searchFetch(inputValue)
            setSearchData(data)
            setInputValue('')
        }
        searchFetching()
    }

    // Genre
    const handleGenres = async (id) => {

        setMovieData(await loadMore('', id))
        setSearchData(await loadMore('', id))
    }

    return (
        <>

            {/* SEARCH Form */}
            <form className='formMovie'>
                <input type="text" placeholder='Search...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type='submit' onClick={handleSearch}> Search</button>
            </form>

            {/* GENRES */}
            {identifier ? null : <div className='genreMovie'>
                {genres ? genres.map((genre, index) => (
                    <button key={index} onClick={() => handleGenres(genre.id)} >{genre.name}</button>
                )
                ) : null}
            </div>}

            {/* MAPS  */}
            <div className='mainMovieContainer'>

                {identifier ?
                    <div className='moviesDiv'>
                        {searchData.map((films, index) => (
                            <Search
                                key={index}
                                films={films}
                                imgUrl={imgUrl}

                            />
                        ))}

                    </div>
                    :
                    <div className='moviesDiv'>
                        {movieData.map((movies, index) => (
                            <MovieListe
                                key={index}
                                movies={movies}
                                imgUrl={imgUrl}
                            />
                        ))}

                    </div>}

                <div className='buttonLoadMoreDiv'>
                    {identifier ? null : <button onClick={handleLoadMore}>Load More</button>}
                </div>
            </div>


        </>
    )
}

export default Movie