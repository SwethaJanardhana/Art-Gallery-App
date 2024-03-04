import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import LeftArrow from "@/public/assets/left-arrow.svg";
import FavoriteButton from "../FavoriteButton";
import CommentForm from "../CommentForm";

const StyledLeftArrow = styled(LeftArrow)`
  width: 2rem;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 30vw;
  heigth: auto;
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
      <p>
        {year}, {genre}
      </p>
      <CommentForm slug={slug} onSubmitComment={onSubmitComment} />
    </>
  );
}
