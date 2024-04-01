import { Result } from 'postcss';
import react from 'react';
export const searchlist=() => {
    return(
        <div className='results-list'>
          {
            Result.map((Result, id) =>{
                return <div key={id}>{Result.name}</div>
            })
          }
        </div>
    )
}