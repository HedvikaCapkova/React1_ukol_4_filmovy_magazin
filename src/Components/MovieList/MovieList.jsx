import React from 'react';
import { movies } from '../../movie-database';

export const MovieList = () => {
  return movies.map((movie) => {
    return <div key={movie.id}>{movie.title}</div>;
  });
};
