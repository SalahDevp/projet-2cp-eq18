import { useMemo, useRef } from "react";
import crctAudio from "assets/audio/correct-answer.wav";
import wrngAudio from "assets/audio/wrong-answer.mp3";
import { useSoundLevel } from "AppContext";

export const createAudio = (src, volume) => {
  const audio = new Audio(src);
  audio.volume = volume;
  return audio;
};

export default function useAudio() {
  const volume = useSoundLevel().soundLevel;
  //used useRef insted of useMemo bcs the last one causes a delay (dont know why)
  const correctAudio = useRef(createAudio(crctAudio, volume));
  const wrongAudio = useRef(createAudio(wrngAudio, volume));
  return [correctAudio, wrongAudio];
}
