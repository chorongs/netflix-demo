import React, { useState, useEffect } from 'react';
import { Alert } from 'bootstrap';
import './RecommandMovieSlide.style.css';
import useRecommandMovieQuery from '../../../../hooks/useRecommandMovie';
import MovieCard from '../../../HomePage/components/MovieCard/MovieCard';
import { useParams } from 'react-router-dom';

const RecommandMovieSlide = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useRecommandMovieQuery(id);

  const [visibleMovies, setVisibleMovies] = useState(5);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 600) {
      setVisibleMovies(4); 
    } else if (screenWidth <= 700) {
      setVisibleMovies(6); 
    } else if (screenWidth <= 1200) {
      setVisibleMovies(8); 
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
      <h2 className='title'>추천하는 영화</h2>
      <div className="recommand-movie-grid">
        {data.results.slice(0, visibleMovies).map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecommandMovieSlide;
