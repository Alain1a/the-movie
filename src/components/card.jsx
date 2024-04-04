import React from "react";


export default function Card({ title, price, vote, popula, image }) {
  
  return (
      <div className="">
        <img src={image} className='w-30 ' alt="movie poster" />
        <p>{title}</p>
        <p>{price}</p>
        <p>{vote}</p>
        <p>{popula}</p>
      </div>
  );
}

