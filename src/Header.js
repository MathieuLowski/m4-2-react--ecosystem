import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const H1 = styled.h1`
  color: black;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  padding-left: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Dispatch = styled.a`
  font-family: "Raleway", sans-serif;
  margin: 15px;
`;

const Div = styled.div`
  margin: 35px;
`;

const Header = (props) => {
  return (
    <Nav>
      <H1>Fruit emporium</H1>
      <Div>
        <Dispatch>
          <Link to="/">Home</Link>
        </Dispatch>
        <Dispatch>
          <Link to="/about">About</Link>
        </Dispatch>
      </Div>
    </Nav>
  );
};
export default Header;
