import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className="menu">
      <nav>
        <Link to="/home">Home</Link>
        <span> | </span>
        <Link to="/reviews">Reviews</Link>
        <span> | </span>
        <Link to="/articles">Articles</Link>
        <span> | </span>
        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </div>
  );
};
