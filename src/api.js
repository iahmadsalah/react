import axios from 'axios';

const API_KEY = '229b783bbeadf763709c5b727850d9af'; 
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};
