import { Navbar } from 'react-bootstrap';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import axios from 'axios';


// 홈페이지  / 
// 영화 전체 페이지 /movies
// 영화 상세 페이지 /movies/:id


// 각각 폴더로 구분하는 이유는 style을 각각 관리하기 위해서.

function App() {
  return (



    <Routes>
      <Route path='/' element={<AppLayout/>}>  
          <Route index element={<HomePage />} />
          <Route path='movies' >
            <Route index element={<MoviePage />} />
            <Route path=':id' element={<MovieDetail />} />
          </Route>
      </Route> 

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}


export default App;
