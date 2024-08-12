import React from 'react';
import api from '../utils/api';

const SongItem = ({ song, onDelete }) => {
  const handleDelete = async () => {
    try {
      await api.delete(`/songs/${song.id}/`);
      onDelete(song.id);
    } catch (error) {
      console.error('Failed to delete song', error);
    }
  };

  return (
    <div className="song-item">
      <p>{song.title} - {song.artist}</p>
      <button onClick={handleDelete} className="button">Delete</button>
    </div>
  );
};

export default SongItem;
