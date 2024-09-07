import React, { useState, useEffect } from 'react';
import { Alert } from 'bootstrap';
import MovieCard from '../../../HomePage/components/MovieCard/MovieCard';
import './SimilarMovieSlide.style.css';
import useSimilarMovieQuery from '../../../../hooks/useSimilarMovie';
import { useParams } from 'react-router-dom';

const SimilarMovieSlide = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useSimilarMovieQuery(id);

  const [visibleMovies, setVisibleMovies] = useState(5);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 767) {
      setVisibleMovies(6); 
    } 
     else if (screenWidth <= 1200) {
      setVisibleMovies(6); 
    } else {
      setVisibleMovies(10); 
    }
  };

  useEffect(() => {
    handleResize(); // 초기 화면 크기에 따른 카드 수 설정
    window.addEventListener('resize', handleResize); // 화면 크기 변경 시 카드 수 재설정

    return () => {
      window.removeEventListener('resize', handleResize); // 이벤트 리스너 제거
    };
  }, []);

  if (isLoading) {
    return <h1>로딩 중...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <h2 className='title'> 비슷한 영화를 보고 싶다면 </h2>
      <div className="similar-movie-grid">
        {data.results.slice(0, visibleMovies).map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovieSlide;
