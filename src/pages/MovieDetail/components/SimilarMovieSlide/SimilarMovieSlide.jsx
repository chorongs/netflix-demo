import React from 'react';
import { Alert } from 'bootstrap';
import MovieCard from '../../../HomePage/components/MovieCard/MovieCard';
import "./SimilarMovieSlide.style.css";
import useSimilarMovieQuery from '../../../../hooks/useSimilarMovie';
import { useParams } from 'react-router-dom';

const SimilarMovieSlide = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useSimilarMovieQuery(id);

  if (isLoading) {
    return <h1>로딩 중...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <h3>비슷한 취향의 영화</h3>
      <div className="similar-movie-grid">
        {data.results.slice(0, 5).map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovieSlide;
