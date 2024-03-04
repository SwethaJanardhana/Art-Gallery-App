import Image from "next/image";
import { styled } from "styled-components";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 30vw;
  heigth: auto;
`;

export default function ArtPiecePreview({
  image,
  title,
  artist,
  isFavorite,
  onToggleFavorite,
  slug,
}) {
  return (
    <>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
      <h2>{title}</h2>
      <p>{artist}</p>
      <Link href={`/art-pieces/${slug}`}>
        <StyledImage src={image} alt={title} width={100} height={100} />
      </Link>
    </>
  );
}
