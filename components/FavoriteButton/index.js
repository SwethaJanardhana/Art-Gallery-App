import Heart from "@/public/assets/heart.svg";
import styled from "styled-components";

const StyledHeart = styled(Heart)`
  fill: ${({ $isFavorite }) => ($isFavorite ? "red" : "black")};
  width: 1.5rem;
`;
export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <button onClick={() => onToggleFavorite(slug)}>
      <StyledHeart $isFavorite={isFavorite} />
    </button>
  );
}
