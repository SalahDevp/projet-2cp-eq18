import { useMemo } from "react";
import crctAudio from "assets/audio/correct-answer.wav";
import wrngAudio from "assets/audio/wrong-answer.mp3";
import { useSoundLevel } from "AppContext";

const createAudio = (src, volume) => {
  const audio = new Audio(src);
  audio.volume = volume;
  return audio;
};

export default function useAudio() {
  const volume = useSoundLevel().soundLevel;
  const correctAudio = useMemo(() => createAudio(crctAudio, volume), [volume]);
  const wrongAudio = useMemo(() => createAudio(wrngAudio, volume), [volume]);
  return [correctAudio, wrongAudio];
}
