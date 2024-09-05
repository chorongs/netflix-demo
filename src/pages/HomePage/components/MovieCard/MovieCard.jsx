import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {

    const navigate = useNavigate();

    const {data:genreData} = useMovieGenreQuery()
    const showGenre = (genreIdList) => {
        if(!genreData) return []
        const genreNameList = genreIdList.map((id) => {
           const genreObject  = genreData.find((genre) => genre.id === id)
           return genreObject.name;
        })

        return genreNameList
    }

    const goToDetail = () => {
        navigate(`/movies/${movie.id}`);
    }

     return (
    <div
    style={{backgroundImage:
        "url(" + 
        `https://media.themoviedb.org/t/p/w220_and_h330_bestv2${movie.poster_path}` + 
        ")",
     }}
     className='movie-card'
     onClick={() => goToDetail(movie.id)}
    
    >
        <div className='overlay' >
        <h1>{movie.title}</h1>
        <div className='badges'>
        {showGenre(movie.genre_ids).map((genre, index) => (
        <Badge className='badge' key={index}>
            {genre}
            </Badge>
        ))}
        </div>
        <div className='popularity'>📅{movie.release_date}</div>
        <div className='vote-average'>⭐{movie.vote_average.toFixed(1)}</div>
        <div>{movie.adult?'Adult':'All'}</div>
        
        </div>
    </div>
)
}

export default MovieCard