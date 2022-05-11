import React from 'react';

const Songs = ({ title, chartPosition, artist, albumCover, preview }) => {
  return (
    <div className='song'>
      <div>
        <img alt='album cover' src={albumCover}></img>
      </div>
      <div className='song-text'>
        <p>Position: {chartPosition}</p>
        <h4>{title}</h4>
        <h5>by {artist}</h5>
        <figure>
          <audio controls src={preview}></audio>
        </figure>
      </div>
    </div>
  );
};

export default Songs;
