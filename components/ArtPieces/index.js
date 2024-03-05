import ArtPiecePreview from "../ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({
  pieces,
  onToggleFavorite,
  onSubmitComment,
}) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            isFavorite={piece.isFavorite}
            onToggleFavorite={onToggleFavorite}
            slug={piece.slug}
            onSubmitComment={onSubmitComment}
          />
        </li>
      ))}
    </ul>
  );
}
