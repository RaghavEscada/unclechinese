import { useEffect, useRef, useState } from 'react';

interface UseVideoPreloadOptions {
  src: string;
  preload?: boolean;
  priority?: boolean;
}

export const useVideoPreload = ({ src, preload = true, priority = false }: UseVideoPreloadOptions) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!preload || !src) return;

    setIsLoading(true);
    setError(null);

    // Create a temporary video element for preloading
    const tempVideo = document.createElement('video');
    tempVideo.preload = priority ? 'auto' : 'metadata';
    tempVideo.muted = true;
    tempVideo.playsInline = true;
    tempVideo.style.display = 'none';

    const handleLoad = () => {
      setIsLoaded(true);
      setIsLoading(false);
      document.body.removeChild(tempVideo);
    };

    const handleError = (e: Event) => {
      setError('Failed to load video');
      setIsLoading(false);
      document.body.removeChild(tempVideo);
    };

    tempVideo.addEventListener('loadeddata', handleLoad);
    tempVideo.addEventListener('error', handleError);
    tempVideo.addEventListener('canplaythrough', handleLoad);

    tempVideo.src = src;
    document.body.appendChild(tempVideo);

    return () => {
      tempVideo.removeEventListener('loadeddata', handleLoad);
      tempVideo.removeEventListener('error', handleError);
      tempVideo.removeEventListener('canplaythrough', handleLoad);
      if (document.body.contains(tempVideo)) {
        document.body.removeChild(tempVideo);
      }
    };
  }, [src, preload, priority]);

  return { isLoaded, isLoading, error };
};
