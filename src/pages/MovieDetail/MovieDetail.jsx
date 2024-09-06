import React from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import useMovieDetailQuery from '../../hooks/useMovieDetail';
import './MovieDetail.style.css'
import useMovieReviewQuery from '../../hooks/useMovieReview';

const MovieDetail = () => {
  const { id } = useParams(); // URL에서 영화 ID를 가져옴
  const { data, isLoading, isError, error } = useMovieDetailQuery({ id });
  const { data: reviews, isLoading: isReviewsLoading, isError: isReviewsError, error: reviewsError } = useMovieReviewQuery(id);


  if (isLoading || isReviewsLoading) {
    return <Spinner animation="border" />;
  }


  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  if (isReviewsError) {
    return <Alert variant="danger">{reviewsError.message}</Alert>;
  }


  if (!data) {
    return <div>No movie data available</div>;
  }


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
              <p id='info'>개봉일 | {data.release_date}</p>
              <p id='info'>상영시간 | {data.runtime}분</p>
              <p id='info'>평점 | {data.vote_average.toFixed(1)}</p>
              <p id='info'>연령제한 | {data.adult ? '18+' : '전체 관람가'}</p>
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
            {reviews && reviews.results.length > 0 ? (
             reviews.results.map(review => (
            <div key={review.id} className="review-box">
              <h5>{review.author}</h5>
              <p>{review.content}</p>
            </div>
          ))
        ) : (
          <p>No reviews available</p>
        )}  
          </div>
        </div>
  );
};

export default MovieDetail;
