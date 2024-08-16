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
    <div className="genre-list">
      <h2>Géneros</h2>
      <ul className="genre-list-horizontal">
        {genres.map((genre) => (
          <li key={genre.id} className="genre-item">
            <div className="genre-content">
              <h3 className="genre-name">{genre.name}</h3>
              <p className="genre-description">{genre.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
