import React from 'react';
import { Link } from 'react-router-dom';
import SongList from './SongList';
import PlaylistList from './PlaylistList';
import AlbumList from './AlbumList';
import ArtistList from './ArtistList';
import GenreList from './GenreList';
import useApi from '../hooks/useApi';

const Home = () => {
  const { data: songs, loading: loadingSongs, error: errorSongs } = useApi(/songs/);
  const { data: playlists, loading: loadingPlaylists, error: errorPlaylists } = useApi(/playlists/);
  const { data: albums, loading: loadingAlbums, error: errorAlbums } = useApi(/albums/);
  const { data: artists, loading: loadingArtists, error: errorArtists } = useApi(/artists/);
  const { data: genres, loading: loadingGenres, error: errorGenres } = useApi(/genres/);

  if (loadingSongs || loadingPlaylists || loadingAlbums || loadingArtists || loadingGenres) {
    return <p>Loading...</p>;
  }

  if (errorSongs || errorPlaylists || errorAlbums || errorArtists || errorGenres) {
    return <p>Error fetching data.</p>;
  }

  return (
    <div>
      <SongList songs={songs} />
      <PlaylistList playlists={playlists} />
      <AlbumList albums={albums} />
      <ArtistList artists={artists} />
      <GenreList genres={genres} />
    </div>
  );
};

export default Home;
