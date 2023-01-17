import React from 'react';
import '../styles/header.css';

const Header = () => {
  const tags = ['crime', 'english', 'love', 'magical', 'mystery'];

  return (
    <header className='header'>
      <h1>coolest blog in blogland</h1>
        {tags.map((tag, i) => <ul className='nav' key={i}>{tag}</ul>)}
    </header>
  );
};

export default Header;
