import React from 'react';
import { Alert } from 'bootstrap';
import './RecommandMovieSlide.style.css';
import useRecommandMovieQuery from '../../../../hooks/useRecommandMovie';
import MovieCard from '../../../HomePage/components/MovieCard/MovieCard';
import { useParams } from 'react-router-dom';

const RecommandMovieSlide = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useRecommandMovieQuery(id);

  if (isLoading) {
    return <h1>로딩 중...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <h3>추천하는 영화</h3>
      <div className="recommand-movie-grid">
        {data.results.slice(0, 5).map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecommandMovieSlide;
