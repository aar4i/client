import React from 'react';
import '../styles/NavBar.css';

export default function NavBar() {
  return (
    <nav className='nav' role='navigation'>
      <button
        onClick={() =>
          window.open(
            'https://www.instagram.com/',
            '_blank',
            'noopener noreferrer'
          )
        }
        aria-label='Go to Instagram'
      >
        About Us
      </button>
      <button
        onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
      >
        Updates
      </button>
      <button
        onClick={() => window.scrollTo({ top: 2100, behavior: 'smooth' })}
      >
        Contact
      </button>
    </nav>
  );
}
