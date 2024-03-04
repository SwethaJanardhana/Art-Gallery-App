import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ data, onToggleFavorite }) {
  function getRandomPiece(length) {
    return Math.floor(Math.random() * length);
  }
  const randomPiece = data[getRandomPiece(data.length)];

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
