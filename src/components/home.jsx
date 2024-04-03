import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./card";
import Nav from './navigation';
import { NavLink } from 'react-router-dom';
import front from './front.jpeg';
import back from './back.jpeg'

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



  return (
    <>
          <div className='w-1/2 text-white relative ml-[400px]'>
            <div className='w-[300px] rounded-[20px] absolute top-[50px] right-[60px]'>
              <img src={back} alt="" className='w-[250px] h-[400px] rounded-[20px]' />
            </div>
            <div className='w-[300px] rounded-[20px] absolute bottom-25  left-[300px]'>
              <img src={front} alt="" className='w-[250px] h-[400px] rounded-[20px] mb-20' />
            </div>
          </div>
      <div className='mt-20 ml-'>
        <div className='mr-40'>
        </div>
        <div className='flex'>
          <div className='space-y-4'>
            <h2 className='text-4xl font-bold text-blue-500 bg-white-400'>FIND MOVIES</h2>
            <div>
              <h1 className='text-4xl font-bold text-blue-500 bg-white-400'>TV SHOW AND MORE</h1>
            </div>
            <p className="text-gray-300 max-w-lg">In React, a default caption for a component typically refers to providing a fallback or default value for a caption in case the component doesn't receive any specific caption through its props. Here's a basic example of how you might implement a default caption in a React component.</p>
            <button className="border border-gray-500 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-gray-700 flex items-center space-x-2">
              <img src={`https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-icon.png`} className='w-6' alt='YouTube Icon' />
              <span>Watch TV Show</span>
            </button>
          </div>

        </div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSTqXRK8_wJi9Yu4QwFtBBFc67dLtvkF3cEqWNOorheD2CcZlJy"
              alt="Trending Icon"
              className="w-8 h-8 rounded-full"
            />
            <h3>Treanding</h3>
          </div>
          <span className='w-full h-[0.10px] bg-gray-500 '></span>
          <button>SeeMore</button>
        </div>
        <div className='grid grid-cols-1 flex mx-auto bg-black rounded-20 text-white h-92 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-10 mt-20'>
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
        <div className='flex justify-between items-center mt-10'>
          <div className='flex items-center '>
            <h3>YOU MAY LIKE THIS</h3>
          </div>
          <span className='w-full h-[0.10px] bg-gray-500'></span>
          <button>SeeMore</button>
        </div>
        <div className='grid grid-cols-1 flex mx-auto bg-black rounded-20 text-white h-92 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-10'>
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

      </div>
    </>
  );
}

export default Home;
