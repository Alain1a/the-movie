import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./card";
import Nav from './navigation';
import { NavLink } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [movieContent, setMovieContent] = useState({});

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=612c9baaabd0091cc4eca4d3111cd123');

        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching now playing movies:', error);
      }
    };
    const fetchNow = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=612c9baaabd0091cc4eca4d3111cd123');

        setMovie(response.data.results);
      } catch (error) {
        console.error('Error fetching now playing movies:', error);
      }
    };
    fetchNowPlaying();
    fetchNow();
  }, []);


  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${selectedMovie}?language=en-US&api_key=612c9baaabd0091cc4eca4d3111cd123`);
      setMovieContent(response.data);
    }
    fetchMovie();
  }, [selectedMovie])

  return (
    <>
      <div className='mt-20 ml-'>
        <div className='mr-40'>
          <Nav />
        </div>
        <div className='flex'>
          <div className='space-y-4 myclass'>
            <h1 className='text-4xl font-bold text-blue-500'>FIND MOVIES</h1>
            <div className='flex items-center space-x-2 text-4xl'>
              <h1 className="text-blue-600 font-semibold">TV SHOW</h1>
              <h1 className='text-pink-500 font-semibold'>AND MORE</h1>
            </div>
            <p className="text-gray-300 max-w-lg">In React, a default caption for a component typically refers to providing a fallback or default value for a caption in case the component doesn't receive any specific caption through its props. Here's a basic example of how you might implement a default caption in a React component.</p>
            <button className="border border-gray-500 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-gray-700 flex items-center space-x-2">
              <img src={`https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-icon.png`} className='w-6' alt='YouTube Icon' />
              <span>Watch TV Show</span>
            </button>
          </div>
          <div className="flex ml-20">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2eFrUZHdls4208pHleuVHsWfsC-daKpOJvHu5Tj35hPhRfWF1" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4xkF87ths3mrh-okFJQCN0qgHNyGbVoTLe6UbVSA6v5hWemc" alt="" />
          </div>
          <div>
            {/* {movie && <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Upcoming Movie Poster" />} */}
          </div>

        </div>
        <div className='flex justify-between items-center mt-20'>
          <div className='flex items-center gap-2'>
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSTqXRK8_wJi9Yu4QwFtBBFc67dLtvkF3cEqWNOorheD2CcZlJy"
              alt="Trending Icon"
              className="w-8 h-8 rounded-full"
            />
            <h3>Treanding</h3>
          </div>
          <span className='w-full h-[0.10px] bg-gray-500'></span>
          <button>SeeMore</button>
        </div>
        <div className='grid grid-cols-10 flex mx-auto bg-black rounded-20 text-white h-92'>
          {movies.map((movie, index) => (
            <div key={index} className='cursor-pointer' onClick={() => {
              setSelectedMovie(movie.id)
            }}>
              <NavLink to={`/detail/${movie.id}`}>
                <Card
                  key={index}
                  title={movie.original_title}
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  vote={movie.vote_average}
                />
              </NavLink>
            </div>
          ))}
        </div>
        <div className='flex justify-between items-center mt-20'>
          <div className='flex items-center gap-2'>
           
            <h3>YOU MAY LIKE THIS</h3>
          </div>
          <span className='w-full h-[0.10px] bg-gray-500'></span>
          <button>SeeMore</button>
        </div>
        <div className='grid grid-cols-10 gap-1 px-10 flex mx-auto bg-black rounded-20 text-white h-92'>
          {movie.map((movie, index) => (
            <div key={index} className='cursor-pointer' onClick={() => {
              setSelectedMovie(movie.id)
            }}>
              <NavLink to={`/detail/${movie.id}`}>
                <Card
                  title={movie.original_title}
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  vote={movie.vote_average}
                />
              </NavLink>
            </div>
          ))}
        </div>
        <div>
          {movieContent ? (<div className='w-24 mt-20' >
            <img src={`https://image.tmdb.org/t/p/w500${movieContent.poster_path}`} className='w-24 h-24' alt="movie poster" />
            <p>{movieContent.original_title}</p>
            <p>{movieContent.vote_average}</p>
            <p>{movieContent.popula}</p>
          </div>) : `No Movie selected ${movieContent}`}
        </div>
      </div>
    </>
  );
}

export default Home;