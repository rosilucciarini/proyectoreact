import React from "react";
import Item from "./Item";
import { Container } from "react-bootstrap";

const ItemList = ({ items }) => {
  return (
    <Container fluid='true'>
      <div className='row item-list'>
        {items.map((prod) => {
          return <Item prod={prod} key={prod.id} />;
        })}
      </div>
    </Container>
  );
};

export default ItemList;


