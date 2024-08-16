import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/songs/`);
        setSongs(response.data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchSongs();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Canciones</h2>
      <ul className='song-list'>
        {songs.map((song) => (
          <li key={song.id} className="song-item">
          <div className="song-content">
            {song.cover ? (
              <img src={song.cover} alt={`${song.title} cover`} className="song-cover" />
            ) : (
              <div className="no-cover">No cover available</div>
            )}
            <div className="song-info">
              <h3 className="song-title">{song.title}</h3>
              {song.duration && <p className="song-duration">{song.duration} segundos</p>}
              {song.song_file && (
                <a href={song.song_file} target="_blank" rel="noopener noreferrer" className="play-icon">
                  <img src="/play-icono.svg" alt="Play" />
                </a>
              )}
            </div>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
