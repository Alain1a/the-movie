import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import Details from './components/details';
import Fullmovies from './components/fullmovie';
import Explore from './components/explore';
import SearchPage from './components/seach';
import small from './components/small.png';
import movie from './components/movie.png';
import SearchIcon from './components/IconBars';
import Login from './components/login';
import SignUp from './components/signup';


function App() {
  return (
    <BrowserRouter>
      <nav className="flex flex-col md:flex-row items-center justify-between py-4 px-6 bg-black text-white">
        <div className='flex items-center'>
          <img src={small} alt="Small Logo" className="w-10 h-10" />
          <img src={movie} alt="Movie Logo" className="ml-5" />
        </div>

        <ul className="flex flex-col md:flex-row md:space-x-4 items-center mt-4 md:mt-0">
          <li className="cursor-pointer mb-2 md:mb-0"><Link to="/">Home</Link></li>
          <li className="cursor-pointer mb-2 md:mb-0"><Link to="/explore">Explore</Link></li>
          <li className="cursor-pointer mb-2 md:mb-0"><Link to="/genres">Genres</Link></li>
          <li className="cursor-pointer mb-2 md:mb-0"><Link to="/movies">Movies</Link></li>
          <li className="cursor-pointer mb-2 md:mb-0"><Link to="/news">News</Link></li>
          <li className="cursor-pointer mb-2 md:mb-0"><Link to="/tv-shows">TV Shows</Link></li>
          <li className="cursor-pointer mb-2 md:mb-0"><Link to="/login">Login</Link></li>
          <li className="cursor-pointer mb-2 md:mb-0"><Link to="/Signup">SignUp</Link></li>
        </ul>

        <SearchIcon />
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/search/:id" element={<Explore />} />
        <Route path="/movies/:id" element={<Fullmovies />} />
        <Route path="/explore" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
