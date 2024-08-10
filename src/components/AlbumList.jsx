import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/albums/`);
        setAlbums(response.data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchAlbums();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <h2>{album.title}</h2>
            <p>Year: {album.year || 'Unknown'}</p>
            {album.cover ? (
              <img src={album.cover} alt={`${album.title} cover`} style={{ width: '100px', height: '100px' }} />
            ) : (
              <p>No cover available</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
