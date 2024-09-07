import React from 'react'
import RecommendMovieSlide from '../RecommandMovieSlide/RecommandMovieSlide'
import SimilarMovieSlide from '../SimilarMovieSlide/SimilarMovieSlide'
import './RecommandTap.style.css';

const RecommandTap = () => {
  return (
    <div className="recommand-tap-container">
        <RecommendMovieSlide />
        <div className="spacing" />
        <SimilarMovieSlide />
    </div>
  )
}

export default RecommandTap