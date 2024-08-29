import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: 'transparent', 
      overflow: 'hidden' 
    }}>
      <a href="/" style={{ display: 'block' }}>
        <img 
          src="https://blog.kakaocdn.net/dn/bVfy7b/btrBqDimNhi/YsGl5yhQPFSK55ooLExHA0/img.png"
          alt="404 Image"
          style={{ 
            width: '100%', 
            height: 'auto', 
            maxWidth: '1000px',
          }}
        />
      </a>
    </div>
  );
}

export default NotFoundPage;
