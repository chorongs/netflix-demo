import React from 'react'
import RecommendMovieSlide from '../RecommandMovieSlide/RecommandMovieSlide'

import './RecommandTap.style.css';
import SimilarMovieSlide from '../SimilarMovieSlide/SimilarMovieSlide';

const RecommandTap = () => {
  return (
    <div className="recommand-tap-container">
      <RecommendMovieSlide />
      <div className="spacing">
      <SimilarMovieSlide />
      </div>
    </div>
  )
}

export default RecommandTap