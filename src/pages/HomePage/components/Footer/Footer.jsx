import React from 'react';

import './Footer.style.css';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <span>궁금한 영화를 한 곳에서 확인해보세요!</span> 

      </div>
      <div className="footer-address">
        <span> Filmed | </span>
        <span>  </span>
        <span>이메일: charmblues@gmail.com</span>
      </div>
      <div className="footer-copy">
        <span>Copyright © Filmed. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
