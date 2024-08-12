import React, { useState } from 'react';
import api from '../utils/api';

const AddSong = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/songs/', { title, artist });
      onAdd(response.data);
      setTitle('');
      setArtist('');
    } catch (error) {
      console.error('Failed to add song', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-song-form">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Song Title"
        className="input"
      />
      <input 
        type="text" 
        value={artist} 
        onChange={(e) => setArtist(e.target.value)} 
        placeholder="Artist"
        className="input"
      />
      <button type="submit" className="button">Add Song</button>
    </form>
  );
};

export default AddSong;
