import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Alert } from 'bootstrap';
import MovieCard from '../MovieCard/MovieCard';
import "./TopRatedMovieSlide.style.css"
import { useTopRatedQuery } from '../../../../hooks/useTopRatedMovies';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,

    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,

    }
  };

const TopRatedMovieSlide = () => {


  const {data, isLoading, isError, error} = useTopRatedQuery()

  if (isLoading) {
    return <h1></h1>
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>
  }

  return (
    <div>
        <h3>높은 평점의 영화</h3>


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

export default TopRatedMovieSlide