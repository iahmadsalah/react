import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const apiKey = '229b783bbeadf763709c5b727850d9af';
  
    useEffect(() => {
      const fetchMovieDetails = async () => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
          setMovie(response.data);
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      };
  
      fetchMovieDetails();
    }, [id]);
  
    if (!movie) return <div>Loading...</div>;
  
    return (
      <div className="movie-details">
        <h1  style={{ color: 'red' }}>{movie.title}</h1>
        <div className="details-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="details-image"
          />
          <div className="details-content">
            <p style={{ color: '#333' }}><strong>Overview:</strong> {movie.overview}</p>
            <p style={{ color: '#333' }}><strong>Release Date:</strong> {movie.release_date}</p>
            <p style={{ color: '#333' }}><strong >Rating:</strong> {movie.vote_average}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default MovieDetails;