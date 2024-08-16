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
    <div className="playlist-list">
      <h2>Playlists</h2>
      <ul className="playlist-list-horizontal">
        {playlists.map((playlist) => (
          <li key={playlist.id} className="playlist-item">
            <div className="playlist-content">
              <div className="playlist-info">
                <h3 className="playlist-name">{playlist.name}</h3>
                {playlist.description && <p className="playlist-description">{playlist.description}</p>}
                <p className="playlist-visibility">{playlist.public ? 'Public' : 'Private'}</p>
                <p className="playlist-owner">Owner ID: {playlist.owner}</p>
                {playlist.entries.length > 0 ? (
                  <p className="playlist-entries">{playlist.entries.length} songs</p>
                ) : (
                  <p className="playlist-no-entries">No songs in this playlist</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistList;
