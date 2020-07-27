import React from "react";
import styled from "styled-components";
import { link } from "react-router-dom";
import ListingGrid from "../ListingGrid";
import { items } from "../data";

//console.log(veggies);
let veggies = Object.values(items);

const P = styled.p`
  font-family: "Raleway", sans-serif;
`;
const Homepage = (props) => {
  return (
    <div>
      <P>Fruit emporium sells the finest fruits from this world and beyond.</P>
      <P>Browse items:</P>
      <ListingGrid items={veggies} />
    </div>
  );
};

export default Homepage;
