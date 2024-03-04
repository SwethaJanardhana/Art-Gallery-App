import ArtPieces from "@/components/ArtPieces";

export default function Favorites({ data, onToggleFavorite }) {
  const favoritePieces = data.filter((piece) => piece.isFavorite);
  return (
    <ArtPieces pieces={favoritePieces} onToggleFavorite={onToggleFavorite} />
  );
}
