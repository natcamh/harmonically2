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
      <h2>Albums</h2>
      <ul className="album-list-horizontal">
        {albums.map((album) => (
          <li key={album.id} className="album-item">
          <div className="album-content">
            {album.cover ? (
              <img src={album.cover} alt={`${album.title} cover`} className="album-cover" />
            ) : (
              <div className="no-cover">No cover available</div>
            )}
            <div className="album-info">
              <h3 className="album-title">{album.title}</h3>
              <p className="album-year">Year: {album.year || 'Unknown'}</p>
            </div>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
