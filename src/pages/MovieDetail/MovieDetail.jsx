import React from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import useMovieDetailQuery from '../../hooks/useMovieDetail';

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
    <Container>
      <Row>
        <Col>
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
          <p>연령제한: {data.adult ? '18+' : 'Under 18'}</p>
          <p>개봉일자: {data.release_date}</p>
          <p>상영시간: {data.runtime} minutes</p>
          <p>평점: {data.vote_average}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
