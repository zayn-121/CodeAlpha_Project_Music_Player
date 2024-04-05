// import React from 'react'
import { useState } from "react";
import AudioPlayer from "./component/AudioPlayer.jsx";
import { audio } from "./component/audioData.jsx";
import Player from "./component/Player.jsx";

const App = () => {
  const [song, setSong] = useState(audio);
  const [currentSong, setCurrentSong] = useState(song[0]);
  const [currentIndex, setCurrentIndex] = useState(null);
  console.log("song", song, setSong);

  const getSong = (song, index) => {
    console.log("clicked on",song);
    setCurrentIndex(index);
    setCurrentSong(song);
  };
  const nextSong = () => {
    if (currentIndex === song.length - 1) {
      setCurrentIndex(0);
      setCurrentSong(song[0]);
    } 
    else if(currentIndex ==null){
        setCurrentIndex(1);
      setCurrentSong(song[1]);
    }
    else{
        setCurrentIndex(currentIndex + 1);
          setCurrentSong(song[currentIndex + 1]);
    }
  };
  const prevSong = () => {
    if (currentIndex === 0) {
      setCurrentIndex(song.length - 1);
      setCurrentSong(song[song.length - 1]);
    }
    else if(currentIndex ==null){
        setCurrentIndex(song.length - 1);
      setCurrentSong(song[song.length - 1]);
    } else {
      setCurrentIndex(currentIndex - 1);
      setCurrentSong(song[currentIndex - 1]);
    }
  };
  return (
    <div className="app">
      <Player
        currentSong={currentSong}
        currentIndex={currentIndex}
        nextSong={nextSong}
        prevSong={prevSong}
      />
      {song.map((songs, index) => (
        <AudioPlayer
          key={songs.name}
          song={songs}
          getSong={getSong}
          index={index}
        />
      ))}
    </div>
  );
};

export default App;
