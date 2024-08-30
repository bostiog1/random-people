import { useCallback } from "react";
import { UserCard } from "../UserCard/UserCard";
import { SlideshowWrapper, SlideshowControls } from "./styles";
import { Button } from "../Button/Button";
import { useSlideshow } from "../../hooks/useSlideshow";

interface SlideshowProps {
  users: {
    name: {
      first: string;
      last: string;
    };
    picture: {
      large: string;
    };
  }[];
}

export const Slideshow: React.FC<SlideshowProps> = ({ users }) => {
  const { currentIndex, isPlaying, setIsPlaying } = useSlideshow(users);
  const validIndex = currentIndex % users.length;

  // Memoize start and stop slideshow handlers using useCallback
  const startSlideshow = useCallback(() => setIsPlaying(true), [setIsPlaying]);
  const stopSlideshow = useCallback(() => setIsPlaying(false), [setIsPlaying]);

  return (
    <SlideshowWrapper>
      <UserCard
        image={users[validIndex].picture.large}
        firstName={users[validIndex].name.first}
        lastName={users[validIndex].name.last}
      />
      <SlideshowControls>
        <Button
          ariaLabel="Start slideshow"
          variant="primary"
          onClick={startSlideshow}
        >
          Start
        </Button>
        <Button
          ariaLabel="Stop slideshow"
          variant="primary"
          onClick={stopSlideshow}
        >
          Stop
        </Button>
      </SlideshowControls>
    </SlideshowWrapper>
  );
};
