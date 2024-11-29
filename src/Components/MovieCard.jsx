import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-card-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-release-date">{movie.release_date}</p>
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>View Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;
