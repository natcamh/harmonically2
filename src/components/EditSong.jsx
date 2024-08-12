import React, { useState } from 'react';
import api from '../utils/api';

const EditSong = ({ song, onUpdate }) => {
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/songs/${song.id}/`, { title, artist });
      onUpdate(response.data);
    } catch (error) {
      console.error('Failed to update song', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-song-form">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        className="input"
      />
      <input 
        type="text" 
        value={artist} 
        onChange={(e) => setArtist(e.target.value)} 
        className="input"
      />
      <button type="submit" className="button">Update</button>
    </form>
  );
};

export default EditSong;
