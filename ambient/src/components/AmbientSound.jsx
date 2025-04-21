import { useEffect, useRef } from 'react';

const AmbientSound = ({ sound, isPlaying, Vol = 0.5 }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(sound);
    audio.loop = true;

    
    const safeVolume = Number.isFinite(Vol) ? Math.max(0, Math.min(1, Vol)) : 0.5;
    audio.volume = safeVolume;

    audioRef.current = audio;

    if (isPlaying) {
      audio.play().catch(err => console.error('Audio play error:', err));
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [sound]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(err => console.error('Audio play error:', err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      const safeVolume = Number.isFinite(Vol) ? Math.max(0, Math.min(1, Vol)) : 0.5;
      audioRef.current.volume = safeVolume;
    }
  }, [Vol]);

  return null;
};

export default AmbientSound;
