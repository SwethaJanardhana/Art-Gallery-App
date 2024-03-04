import ArtPieces from "@/components/ArtPieces";

export default function Favorites({ data }) {
  const favoritePieces = data.filter((piece) => piece.isFavorite);
  return <ArtPieces pieces={favoritePieces} />;
}
