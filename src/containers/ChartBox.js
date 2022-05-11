import React, { useState, useEffect } from 'react';
import DisplaySongs from '../components/DisplaySongs';

const ChartBox = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    loadSongs();
  }, []);

  const loadSongs = () => {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then((res) => res.json())
      .then((songsList) => setSongs(songsList.feed.entry))
      .catch((err) => console.error);
  };
  return (
    <>
      <div className='main-container'>
        <h1>UK top 20 songs</h1>
        <DisplaySongs songs={songs} />
      </div>
    </>
  );
};

export default ChartBox;
