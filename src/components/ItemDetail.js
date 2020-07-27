import React from "react";
import styled from "styled-components";
import { items, sellers } from "../data";
import { useParams } from "react-router-dom";

const Img = styled.img`
  width: 450px;
  border-radius: 3rem;
`;
const Div = styled.div`
  font-family: "Raleway", sans-serif;
  display: flex;
`;
const H2 = styled.h2``;

const Button = styled.button`
  font-family: "Raleway", sans-serif;
  width: 15rem;
  height: 3rem;
  font-size: 2rem;
  border-radius: 2rem;
  background-color: #42baff;
  &:hover {
    border: 2px solid tomato;
  }
`;

const Span = styled.span`
  border-radius: 3rem;
`;

const ItemDeatails = () => {
  const { itemId } = useParams();
  const item = items[itemId];
  const seller = sellers[item.sellerId];

  console.log(itemId);
  console.log(items); //from database
  console.log(items[itemId].name); //squre brackets because not sure wich Id gets selected.
  console.log(items.a);
  console.log(sellers);
  console.log(items[itemId].quantity);

  let productOrder;
  if (items[itemId].quantity === 0) {
    productOrder = "unavailable at the moment";
  } else productOrder = items[itemId].price;

  return (
    <Div>
      <Img src={items[itemId].imageSrc}></Img>
      <div>
        <H2>{items[itemId].name}</H2>
        <p>{items[itemId].latinName}</p>
        <p>{items[itemId].description}</p>
        <p>Product of {items[itemId].countryOfOrigin}</p>
        <Button>$ {productOrder} </Button>

        {/* <img src={seller.avatarSrc}></img> */}

        <p>Sold by: {items[itemId].sellerId}</p>
      </div>
    </Div>
  );
};

export default ItemDeatails;
