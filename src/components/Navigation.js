import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div className= 'Home'>
          <Link
          to ={`/`}
          className = 'Nav-link'
          > Home
          
          </Link>
        </div>
        <div className = "About">
          <Link
          to = {`/about`}
          className = 'Nav-link'
          > About
          </Link>
        </div>
        <div>
          <Link
          to = {`/contact`}
          className = 'Contact'
          > Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
