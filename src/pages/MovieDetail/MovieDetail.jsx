import React from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import useMovieDetailQuery from '../../hooks/useMovieDetail';
import './MovieDetail.style.css'

const MovieDetail = () => {
  const { id } = useParams(); // URL에서 영화 ID를 가져옴
  const { data, isLoading, isError, error } = useMovieDetailQuery({ id });

  // 로딩 중일 때 스피너 표시
  if (isLoading) {
    return <Spinner animation="border" />;
  }

  // 에러가 발생하면 에러 메시지 표시
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  // 데이터가 없을 때 처리
  if (!data) {
    return <div>No movie data available</div>;
  }

  // 데이터를 정상적으로 불러왔을 때 화면에 표시
  return (
        <div className='movie-container'>
          
          <div className='movie-box' 
              style={{backgroundImage:
                "url(" + 
                `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}` + 
                ")",  backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }
              
              }
          >
            
            
            <div className='movie-contents'>

            <div className='movie-info'>
            <h1 className="movie-title" >{data.title}</h1>
              <p id='info'>개봉일 : {data.release_date}</p>
              <p id='info'>상영시간 : {data.runtime}분</p>
              <p id='info'>평점 : {data.vote_average.toFixed(1)}</p>
              <p id='info'>연령제한 : {data.adult ? '18+' : '전체 관람가'}</p>
              <p className='overview'>{data.overview}</p>
              
            </div>


            <div className='movie-img'>
             <img
            src={`https://media.themoviedb.org/t/p/w220_and_h330_bestv2${data.poster_path}`}
            alt={data.title}
            className="movie-poster"
          />
            </div>
          </div>
          </div>

          <div>
            <h1>리뷰박스 자리</h1>

          </div>
        </div>
  );
};

export default MovieDetail;
