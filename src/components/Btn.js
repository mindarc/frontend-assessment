import React from 'react';
import { Link } from 'react-router-dom';

const Btn = () => {
  return (
    <div>
      <Link to="/">
        <div className="imgbox">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="backward"
            className="imgs"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >            
            <path
              fill="currentColor"
              d="M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"
            >
            </path>
          </svg>
        </div>
      </Link>
    </div>


  );
};

export default Btn;