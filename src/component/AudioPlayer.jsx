// import React from "react";

function AudioPlayer({song, getSong, index}) {
  // console.log("song", song.name);
  return (
    <div className="player-container" onClick={() => getSong(song, index)}>
      <h4 className="song-name">{song.name}</h4>
    </div>
  );
}

export default AudioPlayer;
