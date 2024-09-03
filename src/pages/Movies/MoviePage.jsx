import React, { useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap'
import MovieCard from '../HomePage/components/MovieCard/MovieCard'
import ReactPaginate from 'react-paginate';
import './MoviePage.style.css';
// 2가지 경로
// nav바를 통해서 => popularMovie 보여주기
// keyword를 검색해서 온 경우 => keyword와 관련된 영화들을 보여줌


// 페이지네이션 설치
// page state를 생성
// 페이지네이션 클릭할때마다 page 바꿔주기
// page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fetch해주기

const MoviePage = () => {
  const[query, setQuery] = useSearchParams()
  const [page, setPage] = useState(1)
  const keyword = query.get('q')
  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword, page})
  const handlePageClick = ({selected}) => {
    setPage(selected + 1) 

  }



  const totalMovies = data?.total_results || 0;
  const totalPages = Math.min(Math.ceil(totalMovies / 15), 12); 



  if (isLoading) {
    return (
    <div className='spinner-area'>
      <Spinner
      animation='border'
      variant='danger'
      style={{ width: "5rem", height: "5rem"}}
      />
    </div>
    )
  }

  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }

  return (
    <Container>
      <Row> 
        {/* 첫번째 Row는 Sort와 영화카드 */}

        {/* 필터 + 영화카드 부분 */}
        <Col lg={4} xs={12}> 
        {" "}
        </Col>

        {/* 영화카드 부분 */}
        <Col lg={8} xs={12}>
        <Row>
        {data?.results.slice(0, 15).map((movie, index) =>( 
        <Col key={index} lg={4} md={4} xs={4} className='movie-card'>
        <MovieCard movie={movie} />
        </Col>
      ))}
        </Row>


        {/* 페이지네이션 */}
        <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={page-1}
      />    

        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage