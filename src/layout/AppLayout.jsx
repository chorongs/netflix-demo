import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, useNavigate } from 'react-router-dom';
import './AppLayout.style.css';
import Mainlogo from '../asset/logo/MainLogo.png'

const AppLayout = () => {

  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate() 

  const searchByKeyword=(event) => {
    event.preventDefault()
    // url을 바꿔줘야한다.
    navigate(`/movies?q=${keyword}`)
    setKeyword("")
  }

  return (
    <div className='nav-back'>
    <Navbar expand="lg" className="nav-bg">
    <Container fluid>
    <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
              src={Mainlogo}
              alt="FilmIllumination"
              width="135"
              height="75"
              className="d-inline-block align-top"
              style={{ backgroundColor: 'transparent', border: 'none', display: 'block', marginRight:'20px', marginLeft:'10px' }}
            />
        {' '}
        </Navbar.Brand>


      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/movies">Movies</Nav.Link>
          
        </Nav>
        <Form className="search-box" onSubmit={searchByKeyword}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value = {keyword}
            onChange={(event) => setKeyword(event.target.value)} // 내부 변화가 생길때마다 키워드를 세팅 e.t.v 세트임
          />
          <Button variant="dark" type='submit'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <Outlet />
    {/*  // 리액트에 새로나운 기술인데 router내부 자손을 가져올 수 있도록 도와준다. */}
    </div>


  )
}

export default AppLayout