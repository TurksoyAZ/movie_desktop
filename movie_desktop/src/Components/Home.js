import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from '../Components/Movie';
import DetalMovie from '../Pages/DetalMovie';
import './Home.scss'

function Home() {
    return (
        <BrowserRouter>
            <div className='homeContainer'>
                <Routes>
                    <Route path='/' element={<Movie />} />
                    <Route path='/detal/:id' element={<DetalMovie />} />
                    

                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Home