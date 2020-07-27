import React from "react";
import styled from "styled-components";
import { link } from "react-router-dom";

const P = styled.p`
  font-family: "Raleway", sans-serif;
`;

const About = (props) => {
  return (
    <div>
      <P>
        Fruit emporium is founded on a very simple principle: Fruit is good.
      </P>
      <P>
        We carry the finest selection of produce from around the world, from
        tart citrus to sweet cherries. Our sellers are world-class, and your
        fruit is guaranteed to be worthy of auction in Asian markets.
      </P>
    </div>
  );
};

export default About;
