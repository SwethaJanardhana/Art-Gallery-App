import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview";

const StyledList = styled.ul`
  list-style: none;
`;

const StyledListItem = styled.li`
  border: 1px solid black;
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
`;

export default function ArtPieces({
  pieces,
  onToggleFavorite,
  onSubmitComment,
}) {
  return (
    <StyledList>
      {pieces.map((piece) => (
        <StyledListItem key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            isFavorite={piece.isFavorite}
            onToggleFavorite={onToggleFavorite}
            slug={piece.slug}
            onSubmitComment={onSubmitComment}
          />
        </StyledListItem>
      ))}
    </StyledList>
  );
}
