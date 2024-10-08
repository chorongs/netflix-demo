import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Alert } from 'bootstrap';
import MovieCard from '../MovieCard/MovieCard';
import "./UpcomingMovieSlide.style.css"
import { useUpcomingQuery } from '../../../../hooks/useUpcomingMovies';


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

const UpcomingMovieSlide = () => {


  const {data, isLoading, isError, error} = useUpcomingQuery()

  if (isLoading) {
    return <h1></h1>
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>
  }

  return (
    <div>
        <h3>개봉 예정 영화</h3>


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
export default UpcomingMovieSlide