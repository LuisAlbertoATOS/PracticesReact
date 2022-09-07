import React, { PropsWithChildren, PropsWithoutRef, PropsWithRef } from 'react';
import { IMovie } from '../interfaces/Movie.interface';

import classes from './Movie.module.css';

const Movie = (props:IMovie) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;
