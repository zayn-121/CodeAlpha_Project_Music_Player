import { useEffect, useRef, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { IoPlaySkipBackCircleSharp } from "react-icons/io5";
import { IoPlaySkipForwardCircleSharp } from "react-icons/io5";
const Player =({currentSong, currentIndex, nextSong, prevSong})  =>{
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, currentIndex]);
  return (
    <div className="player-card">
      <audio ref={audioRef} src={currentSong.music}></audio>
      {currentSong ? (
        <div className="active">
          <h4 className="active-song">{currentSong.name}</h4>
          <h5 className="active-artist">{currentSong.creator}</h5>
        </div>
      ) : (
        ""
      )}

      <div className="control-icon">
        <IoPlaySkipBackCircleSharp color="white" size={50} onClick={prevSong} />
        {isPlaying ? (
          <FaPauseCircle color="white" size={50} onClick={togglePlay} />
        ) : (
          <FaPlayCircle color="white" size={50} onClick={togglePlay} />
        )}

        <IoPlaySkipForwardCircleSharp
          color="white"
          size={50}
          onClick={nextSong}
        />
      </div>
    </div>
  );
}

export default Player;
