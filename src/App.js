import { Navbar } from 'react-bootstrap';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';


// 홈페이지
// 영화 전체 페이지
// 영화 상세 페이지


// 각각 폴더로 구분하는 이유는 style을 각각 관리하기 위해서.

function App() {
  return (



    <Routes>
      <Route path='/' element={<AppLayout/>}>  
      {/* // 이렇게 하게되면 Route 사이에 들어가는 모든 요소들은 AppLayout을 적용받는다. */}
      
      </Route> 
    </Routes>
  );
}

export default App;
