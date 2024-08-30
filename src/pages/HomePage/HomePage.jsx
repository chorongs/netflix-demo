import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'


// 1. 배너 => 인기 영화가 나오게.
// 2. 인기 영화
// 3. 높은 선택률 영화
// 4. 뜨는 영화

const HomePage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
    </div>
  )
}

export default HomePage