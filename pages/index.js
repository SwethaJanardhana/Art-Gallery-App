import Spotlight from "@/components/Spotlight";
import { useEffect, useState } from "react";
export default function SpotlightPage({ data, onToggleFavorite }) {
  const [randomIndex, setRandomIndex] = useState(null);

  function getRandomPiece(length) {
    return Math.floor(Math.random() * length);
  }
  useEffect(() => {
    setRandomIndex(getRandomPiece(data.length));
  }, []);

  const randomPiece = data[randomIndex];

  if (randomIndex === null) return;

  return (
    <div>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        slug={randomPiece.slug}
        onToggleFavorite={onToggleFavorite}
        isFavorite={randomPiece.isFavorite}
      />
    </div>
  );
}
