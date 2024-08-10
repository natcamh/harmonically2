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
      <h1>Songs</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <h2>{song.title}</h2>
            {song.year && <p>Year: {song.year}</p>}
            {song.duration && <p>Duration: {song.duration} seconds</p>}
            {song.song_file && <a href={song.song_file} target="_blank" rel="noopener noreferrer">Listen</a>}
            {song.cover && <img src={song.cover} alt={`${song.title} cover`} style={{ width: '100px', height: '100px' }} />}
            {!song.cover && <p>No cover available</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
