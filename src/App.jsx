
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
// import FetchMoview from './components/fetchmovi/fetchMovies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './components/details'
import Home from './components/home'
import movie from './components/movie.png';
import small from './components/small.png';





function App() {

  return (
    <BrowserRouter>
  <nav className="flex items-center justify-between py-4 px-6 bg-black-800 text-white">
  <div className="flex items-center">
    <img src={small} alt="Small Logo" className="w-10 h-10" />
    <img src={movie} alt="Movie Logo" className=" ml-5" />
  </div>
  <ul className="flex space-x-4">
    <li className="cursor-pointer">Home</li>
    <li className="cursor-pointer">Explore</li>
    <li className="cursor-pointer">Genres</li>
    <li className="cursor-pointer">Movies</li>
    <li className="cursor-pointer">Movie</li>
    <li className="cursor-pointer">TV Shows</li>
  </ul>
</nav>

      <Routes>!
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Detail />} />          
         
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
