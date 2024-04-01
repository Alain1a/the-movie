import React, { useEffect, useState } from 'react';
import "./searchbar.css";
import axios from 'axios';
import Card from './card';

function SearchPage() {
  const [searchQuery, setSQuery] = useState("");
  const [data, setData] = useState();
  const[movie, setMovie] = useState();
  const handleSubmit = async (event) => {
    try{
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1&api_key=612c9baaabd0091cc4eca4d3111cd123`);
      console.log(response.data.results);
      setData(response.data.results);
    } catch (error) {
      console.error(error); 
    };
  }

  const handleInputChange =(event) => {
    setSQuery(event.target.value)
  } 
  
  
  useEffect(() => {
    handleSubmit()
  },[searchQuery])


 
  return (
    <div className="p-4 bg-black">
      <form>
      <input
        type="search"
        value={searchQuery}
        onChange={handleInputChange}
        className='text-white w-full justfy-center bg-gray-700'
        placeholder="Search..."
      />
      </form>
      {searchQuery && (
        <div>
          <div className="grid xl:grid-cols-5">
            {data.map((items, index)=>{
              return (
                
                <Card
                  key={index}
                  title={items.title}
                  image={`https://image.tmdb.org/t/p/w500${items.poster_path}`}
                  vote={items.vote_average}
                />
                
              )
            })}
          </div>
        </div>
      )}
      <button onClick={handleSubmit}>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchPage;
