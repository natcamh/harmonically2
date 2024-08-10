import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlaylistList = () => {
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/playlists/`);
        setPlaylists(response.data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchPlaylists();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Playlists</h1>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <h2>{playlist.name}</h2>
            {playlist.description && <p>{playlist.description}</p>}
            <p>{playlist.public ? 'Public' : 'Private'}</p>
            <p>Owner ID: {playlist.owner}</p>
            {playlist.entries.length > 0 ? (
              <p>{playlist.entries.length} songs</p>
            ) : (
              <p>No songs in this playlist</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistList;
