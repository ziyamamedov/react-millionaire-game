import { useEffect, useRef } from "react";

export interface AudiosProps {
  audioName: string;
}
interface ISounds {
  [key: string]: any;
}
let previousAudio: any;
const Audios: React.FC<AudiosProps> = ({ audioName }) => {
  const sounds: ISounds = {
    gameStarted: useRef<any>(),
    correct: useRef<any>(),
    suspend: useRef<any>(),
    victory: useRef<any>(),
    wrong: useRef<any>(),
  };

  useEffect(() => {
    if (audioName) {
      if (previousAudio) {
        previousAudio.pause();
        previousAudio.currentTime = 0;
      }
      sounds[audioName].current.volume = 0.3;
      sounds[audioName].current.play();
      previousAudio = sounds[audioName].current;
    } else {
      if (previousAudio) {
        previousAudio.pause();
        previousAudio.currentTime = 0;
      }
    }
  }, [audioName]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <audio ref={sounds.gameStarted} preload="auto">
        <source src="/sounds/gameStarted.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={sounds.correct} preload="auto">
        <source src="/sounds/correct.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={sounds.suspend} preload="auto">
        <source src="/sounds/suspend.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={sounds.victory} preload="auto">
        <source src="/sounds/victory.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={sounds.wrong} preload="auto">
        <source src="/sounds/wrong.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Audios;
