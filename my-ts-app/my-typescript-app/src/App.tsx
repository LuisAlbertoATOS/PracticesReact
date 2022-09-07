import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { IMovie } from "./interfaces/Movie.interface";
import { IMovieData } from "./interfaces/MovieData.interface";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error|null>(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      
      const transformedMovies = data.results.map((movieData:IMovieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error:any) {
      setError(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(()=>{
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  
  let content = <p>Found no movies</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies}></MoviesList>;
  }
  if (error) {
    content = <p>{error.message}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
