import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  Link,
  Outlet,
} from 'react-router-dom';
import { movies } from '../../movie-database';

export const MovieList = () => {
  return movies.map((movie) => {
    return (
      <div key={movie.id}>
        <Link to={movie.id.toString()}>{movie.title}</Link>
      </div>
    );
  });
};
