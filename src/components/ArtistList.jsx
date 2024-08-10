import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArtistList = () => {
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/artists/`);
        setArtists(response.data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchArtists();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Artists</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            <h2>{artist.name}</h2>
            {artist.bio && <p>{artist.bio}</p>}
            {artist.website && <a href={artist.website} target="_blank" rel="noopener noreferrer">Website</a>}
            {artist.image && <img src={artist.image} alt={`${artist.name} profile`} style={{ width: '100px', height: '100px' }} />}
            {!artist.image && <p>No image available</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
