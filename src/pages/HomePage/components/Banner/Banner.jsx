import React from 'react';
import { usePopularMovicesQuery } from '../../../../hooks/usePopularMovies';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Alert } from 'react-bootstrap';
import './Banner.style.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMovicesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  const topMovies = data.results.slice(0, 7);

  return (
    <Carousel
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3800} 
      centerMode={false}
      responsive={responsive}
      showDots={false}
      arrows={true} 
      containerClass='banner-container'
      itemClass='banner-item'

    >
      {topMovies.map((movie, index) => (
        <div
          key={index}
          style={{
            backgroundImage:  `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
          className='banner'
        >
          <div className='text-white banner-text-area'>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
