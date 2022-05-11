import React from 'react';
import Songs from './Songs';

const DisplaySongs = ({ songs }) => (
  <div className='song-list'>
    {songs.map((song, index) => (
      <Songs
        title={song['im:name'].label}
        key={index}
        chartPosition={index + 1}
        artist={song['im:artist'].label}
        albumCover={song['im:image'][2].label}
        preview={song['link'][1]['attributes']['href']}
      />
    ))}
  </div>
);
export default DisplaySongs;
