import ArtPiecePreview from "../ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              isFavorite={piece.isFavorite}
              onToggleFavorite={onToggleFavorite}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
