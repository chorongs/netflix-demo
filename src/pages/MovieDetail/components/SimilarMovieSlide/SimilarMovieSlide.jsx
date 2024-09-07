import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Alert } from 'bootstrap';
import MovieCard from '../../../HomePage/components/MovieCard/MovieCard';
import "./SimilarMovieSlide.style.css"
import useSimilarMovieQuery from '../../../../hooks/useSimilarMovie';
import { useParams } from 'react-router-dom';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,

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

const SimilarMovieSlide = () => {

  const {id} = useParams();
  const {data, isLoading, isError, error} = useSimilarMovieQuery(id)

  if (isLoading) {
    return <h1></h1>
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>
  }

  return (
    <div>
        <h3>비슷한 취향의 영화</h3>


    <Carousel
    infinite={false}
    centerMode={false}
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

export default SimilarMovieSlide