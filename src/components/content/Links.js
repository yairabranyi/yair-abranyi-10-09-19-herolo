import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";


const Links = () => (
  <Nav>
    <li>
      <StyledLink to="/">Home</StyledLink>
    </li>
    <li>
      <StyledLink to="/favorite">Favorite</StyledLink>
    </li>
  </Nav >
);
export default Links;

const StyledLink = styled(Link)`
  color: mintcream;
  transition: all 0.5s ease;
  &:hover {
  color: black;
} `

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: "Yanone Kaffeesatz";
  font-weight: 400;
  font-size: 2.8rem;
  width: 30rem;
  justify-content: space-between;
 `
