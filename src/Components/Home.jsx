import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = '229b783bbeadf763709c5b727850d9af';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="home">
      <h2>Popular Movies</h2>
      <div className="movie-grid">
        {movies.map(movie => (
          <div className="movie-card" key={movie.id}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none'}}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
            <h3>{movie.title}</h3>
            <p>{movie.overview.substring(0, 100)}...</p></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
