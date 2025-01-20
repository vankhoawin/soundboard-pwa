import { useEffect, useRef, useState } from 'react';
import './style.css';
import { Sound } from '../SoundSet/types';
import { BouncingLogoConfig } from '../SoundSet/types';
import { AudioCache } from '../AudioCache/AudioCache';
import { SoundboardPlayer } from '../Soundboard/useSoundboardPlayer';

const BOUNCE_VELOCITY = 1;

interface BounceMetadata {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  imageIndex: number;
}

function useBouncingPosition(
  containerRef: React.RefObject<HTMLDivElement | null>,
  images: string[]
) {
  const [position, setPosition] = useState<BounceMetadata>(() => {
    const width = window.innerWidth - 100;
    const height = window.innerHeight - 100;
    return {
      x: width / 4,
      y: height / 4,
      velocityX: BOUNCE_VELOCITY,
      velocityY: BOUNCE_VELOCITY,
      imageIndex: 0
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setPosition(prev => {
        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 100;
        return {
          ...prev,
          x: Math.min(Math.max(0, prev.x), maxX),
          y: Math.min(Math.max(0, prev.y), maxY)
        };
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (images.length === 0) return;

    let animationFrameId: number;
    
    const animate = () => {
      setPosition(prev => {
        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 100;
        
        let newX = Math.max(0, Math.min(maxX, prev.x + prev.velocityX));
        let newY = Math.max(0, Math.min(maxY, prev.y + prev.velocityY));
        let newVelocityX = prev.velocityX;
        let newVelocityY = prev.velocityY;
        let newImageIndex = prev.imageIndex;

        // Check for collisions with viewport boundaries
        const hitRight = newX >= maxX;
        const hitLeft = newX <= 0;
        const hitBottom = newY >= maxY;
        const hitTop = newY <= 0;

        // Handle horizontal collisions
        if (hitRight || hitLeft) {
          newVelocityX = -prev.velocityX;
          newX = hitRight ? maxX : 0;
          newImageIndex = (prev.imageIndex + 1) % images.length;
        }

        // Handle vertical collisions
        if (hitBottom || hitTop) {
          newVelocityY = -prev.velocityY;
          newY = hitBottom ? maxY : 0;
          newImageIndex = (prev.imageIndex + 1) % images.length;
        }

        return {
          x: newX,
          y: newY,
          velocityX: newVelocityX,
          velocityY: newVelocityY,
          imageIndex: newImageIndex
        };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [images, containerRef]);

  return position;
}

function useImagePreloader(images: string[]) {
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);
}

export function BouncingLogo({ 
  config,
  audioCacheRef,
  soundboardPlayer
}: { 
  config: BouncingLogoConfig;
  audioCacheRef: React.RefObject<AudioCache>;
  soundboardPlayer: SoundboardPlayer;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const position = useBouncingPosition(containerRef, config.images);

  useImagePreloader(config.images);
  useEffect(() => {
    const sounds: Sound[] = [{
      url: config.sound,
      label: 'bouncingLogo',
    }];
    audioCacheRef.current?.loadSoundSet('bouncingLogo', sounds);
  }, [config, audioCacheRef]);

  const handleClick = () => {
    soundboardPlayer.onPlay({key: 'bouncingLogo', url: config.sound});
  };

  if (config.images.length === 0) return null;
  return (
    <div className="bouncing-logo-container" ref={containerRef}>
      <img
        src={config.images[position.imageIndex]}
        className="bouncing-logo"
        alt="Bouncing Logo"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`
        }}
        onClick={handleClick}
      />
    </div>
  );
} 