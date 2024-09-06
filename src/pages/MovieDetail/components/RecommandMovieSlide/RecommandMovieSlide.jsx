import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Alert } from 'bootstrap';
import './RecommandMovieSlide.style.css'
import useRecommandMovieQuery from '../../../../hooks/movieRecommandMovie';
import MovieCard from '../../../HomePage/components/MovieCard/MovieCard';
import { useParams } from 'react-router-dom';



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

const RecommendMovieSlide = () => {

  const {id} = useParams();
  const {data, isLoading, isError, error} = useRecommandMovieQuery(id)

  if (isLoading) {
    return <h1></h1>
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>
  }

  return (
    <div>
        <h3>추천하는 영화</h3>

  <Carousel
    infinite={true}
    centerMode={true}
    itemClass='movie-slider p-1'
    containerClass='carousel-container'
    responsive={responsive}
>
    {data.results.map((movie,index)=> (
    <MovieCard movie={movie} key={index}/>
    ))}
    </Carousel>
    </div>
  )
}

export default RecommendMovieSlide