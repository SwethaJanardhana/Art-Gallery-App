import styled from "styled-components";
import Navigation from "../Navigation";

const StyledMain = styled.main`
  margin: 2rem;
`;

export default function Layout({ children }) {
  return (
    <StyledMain>
      {children}
      <Navigation />
    </StyledMain>
  );
}
