import React from "react";


export default function Card({ title, price, vote, popula, image }) {
  
  return (
      <div>
        <img src={image} className='w-24 ' alt="movie poster" />
        <p>{title}</p>
        <p>{price}</p>
        <p>{vote}</p>
        <p>{popula}</p>
      </div>
  );
}

