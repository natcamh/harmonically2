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
    <div className="artist-list">
      <h2>Artistas</h2>
      <ul className="artist-list-horizontal">
        {artists.map((artist) => (
          <li key={artist.id} className="artist-item">
            <div className="artist-content">
              <div className="artist-info">
                <h3 className="artist-name">{artist.name}</h3>
                {artist.bio && <p className="artist-bio">{artist.bio}</p>}
                {artist.website && <a href={artist.website} target="_blank" rel="noopener noreferrer" className="artist-website">Website</a>}
                {artist.image ? (
                  <img src={artist.image} alt={`${artist.name} profile`} className="artist-image" />
                ) : (
                  <p className="no-image">No image available</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
