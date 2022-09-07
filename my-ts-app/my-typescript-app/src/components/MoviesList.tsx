import React, { FC } from 'react';
import { IMovie } from '../interfaces/Movie.interface';
import { IMovieData } from '../interfaces/MovieData.interface';
import { IMoviesList } from '../interfaces/MoviesList.interface';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props:IMoviesList) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie:IMovie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
