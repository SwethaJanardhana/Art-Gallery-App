import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import LeftArrow from "@/public/assets/left-arrow.svg";
import FavoriteButton from "../FavoriteButton";
import CommentForm from "../CommentForm";
import Comments from "../Comments";

const StyledLeftArrow = styled(LeftArrow)`
  width: 2rem;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 30vw;
  heigth: auto;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 0.5rem;
  list-style: none;
`;

const StyledDiv = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  isFavorite,
  onToggleFavorite,
  onSubmitComment,
  comments,
  onDeleteComment,
  colors,
}) {
  return (
    <>
      <Link href="/art-pieces">
        <StyledLeftArrow />
      </Link>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
      <h2>{title}</h2>
      <p>{artist}</p>
      <StyledImage src={image} alt={title} width={100} height={100} />
      <StyledList>
        {colors.map((color) => (
          <li key={color}>
            <StyledDiv $color={color}></StyledDiv>
          </li>
        ))}
      </StyledList>
      <p>
        {year}, {genre}
      </p>
      <Comments
        comments={comments}
        slug={slug}
        onDeleteComment={onDeleteComment}
      />
      <CommentForm slug={slug} onSubmitComment={onSubmitComment} />
    </>
  );
}
