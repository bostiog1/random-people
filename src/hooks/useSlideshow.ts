import { useState, useEffect } from "react";

export const useSlideshow = (users: any[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying && users.length > 0) {
      // Set interval to update slide index every 2 seconds when playing
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
      }, 2000);
    } else if (!isPlaying && interval) {
      clearInterval(interval); // Clear interval when not playing
    }
    return () => {
      if (interval) {
        clearInterval(interval); // Cleanup interval on unmount
      }
    };
  }, [isPlaying, users.length]);

  useEffect(() => {
    setCurrentIndex(0); // Reset slide index when users change
  }, [users]);

  return { currentIndex, isPlaying, setIsPlaying };
};
