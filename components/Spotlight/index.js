import Image from "next/image";
import { styled } from "styled-components";

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 30vw;
  heigth: auto;
`;

export default function Spotlight({ image, artist }) {
  return (
    <>
      <h2>Random picture</h2>
      <p>{artist}</p>
      <StyledImage src={image} alt="Random picture" width={100} height={100} />
    </>
  );
}
