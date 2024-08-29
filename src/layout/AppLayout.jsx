import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import './AppLayout.style.css';


const AppLayout = () => {
  return (
    <div className='nav-back'>
    <Navbar expand="lg" className="nav-bg">
    <Container fluid>
    <Navbar.Brand href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
              src="https://cdn.dribbble.com/users/9378043/screenshots/16832559/media/10b207c918d604662e088308d16b366d.png?resize=1600x1200&vertical=center"
              alt="Netflix Logo"
              width="135"
              height="75"
              className="d-inline-block align-top"
              style={{ backgroundColor: 'transparent', border: 'none', display: 'block', marginRight:'20px' }}
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
          <Nav.Link href="/movies">Link</Nav.Link>
          
        </Nav>
        <Form className="search-box">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="dark">Search</Button>
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