import Image from "next/image";
import { styled } from "styled-components";
import Link from "next/link";

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 30vw;
  heigth: auto;
`;

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <Link href="">{piece.name}</Link>
        </li>
      ))}
    </ul>
  );
}
