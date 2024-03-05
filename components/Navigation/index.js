import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  width: 33%;
  text-align: center;
  padding: 1rem;

  &:hover {
    cursor: pointer;
    background-color: darkgrey;
  }
`;

const StyledNav = styled.nav`
  bottom: 0;
  left: 0;
  position: fixed;
  display: flex;
  gap: 1rem;
  background-color: grey;
  justify-content: space-evenly;
  width: 100%;
`;

export default function Navigation() {
  return (
    <StyledNav>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">Pieces</StyledLink>
      <StyledLink href="/favorites">Favorites</StyledLink>
    </StyledNav>
  );
}
