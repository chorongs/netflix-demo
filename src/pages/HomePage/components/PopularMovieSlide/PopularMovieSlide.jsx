import React from 'react'
import { usePopularMovicesQuery } from '../../../../hooks/usePopularMovies'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Alert } from 'bootstrap';
import "./PopularMovieSlide.style.css"
import MovieCard from '../MovieCard/MovieCard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,

    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,

    }
  };

const PopularMovieSlide = () => {


  const {data, isLoading, isError, error} = usePopularMovicesQuery()

  if (isLoading) {
    return <h1></h1>
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>
  }

  return (
    <div>
        <h3>인기 영화</h3>


  <Carousel
    infinite={true}
    centerMode={false}
    itemClass='movie-slider p-1'
    containerClass='carousel-container'
    responsive={responsive}
>
    {data.results.map((movie,index)=><MovieCard movie={movie} key={index}/>)}
</Carousel>
    </div>
  )
}

export default PopularMovieSlide