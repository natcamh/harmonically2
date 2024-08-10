import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GenreList = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/genres/`);
        setGenres(response.data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchGenres();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Genres</h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <h2>{genre.name}</h2>
            <p>{genre.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
