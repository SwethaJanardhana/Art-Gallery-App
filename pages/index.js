import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({ data }) {
  function getRandomPiece(length) {
    return Math.floor(Math.random() * length);
  }
  const randomPiece = data[getRandomPiece(data.length)];

  return (
    <div>
      <Spotlight image={randomPiece.imageSource} artist={randomPiece.artist} />
    </div>
  );
}
