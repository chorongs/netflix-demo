import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css';

const MovieCard = ({movie}) => {
  return (
    <div
    style={{backgroundImage:
        "url(" + 
        `https://media.themoviedb.org/t/p/w220_and_h330_bestv2${movie.poster_path}` + 
        ")",
     }}
     className='movie-card'
    >
        <div className='overlay'>
        <h1>{movie.title}</h1>

        <div className='badges'>
        {movie.genre_ids.map((id) => <Badge className='badge' bg="danger" key={id}>{id}</Badge>)}
        </div>
        <div className='popularity'>📅{movie.release_date}</div>
        <div className='vote-average'>⭐{movie.vote_average.toFixed(1)}</div>
        <div className='popularity'>📈{Math.floor(movie.popularity)}</div>
        <div>{movie.adult?'🔞':'👶'}</div>
        </div>
    </div>
)
}

export default MovieCard