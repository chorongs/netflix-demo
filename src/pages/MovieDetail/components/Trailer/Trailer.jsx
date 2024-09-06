import React from 'react';
import { useMovieTrailerQuery } from '../../../../hooks/useMovieTrailer';
import './Trailer.style.css';

const Trailer = ({ movieId }) => {
  const { data , error, isLoading } = useMovieTrailerQuery(movieId);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>예고편을 불러오는 데 오류가 발생했습니다.</div>;
  }

  if (!data) {
    return <div>예고편이 없습니다.</div>;
  }

  return (
    <div className='trailer-container'>
       <div className="trailer-video">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${data.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
    </div>
  );
};

export default Trailer;
