import { useMemo } from "react";
import crctAudio from "assets/audio/correct-answer.wav";
import wrngAudio from "assets/audio/wrong-answer.mp3";

export default function useAudio() {
  const correctAudio = useMemo(() => new Audio(crctAudio), []);
  const wrongAudio = useMemo(() => new Audio(wrngAudio), []);
  return [correctAudio, wrongAudio];
}
