

// https://api.themoviedb.org/3/movie/popular?api_key=f49f131ae603b33413f9aec982a14ae6&page=1&with_genre=1

import axios from "axios"

// Search Url
// https://api.themoviedb.org/3/search/movie?api_key=f49f131ae603b33413f9aec982a14ae6&query=Jack+Reacher

// genre Url
// https://api.themoviedb.org/3/genre/movie/list?api_key=f49f131ae603b33413f9aec982a14ae6&language=en-US


export const imgUrl = 'https://image.tmdb.org/t/p/w300'
export const imgUrlW1250 = 'https://image.tmdb.org/t/p/w1280'
export const apiKey = 'f49f131ae603b33413f9aec982a14ae6'

// Load More Fetch
export const loadMore = async (counter, genr) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${counter}`,
            {
                params: {
                    with_genres: genr,
                }
            }
        )
        return data.results
    } catch { }
}

// Search Fetch
export const searchFetch = async (inputValue) => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${inputValue}`)
        return data.results
    } catch { }
}

// Genres Fetch
export const genreFetch = async () => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
        return data.genres
    } catch { }
}