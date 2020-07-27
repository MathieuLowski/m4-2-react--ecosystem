import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 320px;
`;
const Li = styled.li`
  text-decoration: none;
  background-color: tomato;
  height: 500px;
  font-family: "Raleway", sans-serif;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  box-shadow: 2px;

  &:hover {
    box-shadow: 3px 3px;
    color: black;
  }
`;
const ListingGrid = (props) => {
  console.log(props);
  return (
    <Section className="fruits">
      {props.items.map((vegie) => {
        return (
          <ul>
            <Link to={`/items/${vegie.id}`}>
              <Li key={vegie.id}>
                <Img src={vegie.imageSrc} />
                <p> {vegie.name}</p>
                <p>{vegie.latinName}</p>
              </Li>
            </Link>
          </ul>
        );
      })}
    </Section>
  );
};

export default ListingGrid;
