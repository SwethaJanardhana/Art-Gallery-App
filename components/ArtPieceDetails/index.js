import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import LeftArrow from "@/public/assets/left-arrow.svg";

const StyledLeftArrow = styled(LeftArrow)`
  width: 2rem;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 30vw;
  heigth: auto;
`;

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <Link href="/art-pieces">
        <StyledLeftArrow />
      </Link>
      <h2>{title}</h2>
      <p>{artist}</p>
      <StyledImage src={image} alt={title} width={100} height={100} />
      <p>
        {year}, {genre}
      </p>
    </>
  );
}
