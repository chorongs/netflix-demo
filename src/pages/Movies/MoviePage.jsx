import React, { useEffect, useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Alert, Button, Col, Container, Dropdown, Row, Spinner } from 'react-bootstrap';
import MovieCard from '../HomePage/components/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './MoviePage.style.css';

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sortOrder, setSortOrder] = useState('desc');
  
  const keyword = query.get('q');
  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });
  
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  
  const totalMovies = data?.total_results || 0;
  const totalPages = Math.min(Math.ceil(totalMovies / 15), 12);

  const genreMap = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    ScienceFiction: 878,
    TVMovie: 10770,
    Thriller: 53,
    War: 10752,
    Western: 37,
  };

  const sortMovies = (movies) => {
    if (!movies) return [];
    return movies.sort((a, b) =>
      sortOrder === 'desc' ? b.popularity - a.popularity : a.popularity - b.popularity
    );
  };

  const filterByGenre = (movies) => {
    if (!selectedGenre) return movies;
    return movies.filter((movie) => movie.genre_ids.includes(selectedGenre));
  };

  const sortedAndFilteredMovies = filterByGenre(sortMovies(data?.results || []));

  const handleSortChange = (eventKey) => {
    setSortOrder(eventKey);
  };

  const handleGenreSelect = (genreName) => {
    setSelectedGenre(genreMap[genreName]);
  };

  useEffect(() => {
    if (!keyword) {
      setPage(1);
      setQuery({});
    }
  }, [keyword, setQuery]);

  useEffect(() => {
    setQuery({ q: keyword || '', page });
  }, [page, keyword, setQuery]);

  if (isLoading) {
    return (
      <div className="spinner-container">
        <Spinner className="spinner" animation="border" variant="danger" />
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container>
      {/* 필터링 및 정렬 부분 */}
      <div className="filters-container">
        <Row>
          <Col lg={4} xs={12}>
            <Dropdown onSelect={handleSortChange}>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                인기 순으로 보기
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="desc">평점 높은 순</Dropdown.Item>
                <Dropdown.Item eventKey="asc">평점 낮은 순</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ marginTop: '20px' }} onSelect={handleGenreSelect}>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                장르 별 보기
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {Object.keys(genreMap).map((genre, index) => (
                  <Dropdown.Item key={index} eventKey={genre}>
                    {genre}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>

      {/* 영화 카드 부분 */}
      <div className="movies-container">
        <Row>
          {totalMovies === 0 ? (
            <div className="alert-container">
              <Alert
                variant="info"
                style={{
                  backgroundColor: 'rgb(129, 107, 255)',
                  color: 'white',
                  border: 'none',
                  width: '80%',
                  fontSize: '1.3rem',
                  textAlign: 'center',
                  marginTop: '100px',
                }}
              >
                검색 결과가 없습니다.
              </Alert>
            </div>
          ) : (
            sortedAndFilteredMovies.slice(0, 16).map((movie, index) => (
              <Col key={index} lg={4} md={4} xs={6}>
                <MovieCard movie={movie} />
              </Col>
            ))
          )}
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
          forcePage={page - 1}
        />
      </div>
    </Container>
  );
};

export default MoviePage;
