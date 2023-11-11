import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <>
      <Card style={{ width: "320px", margin: "5px" }}>
        <Card.Img variant='top' src={prod.imagen} alt={prod.nombre} />
        <Card.Body>
          <Card.Title>{prod.nombre}</Card.Title>
          <Card.Text>
           
            Precio: $ {prod.precio}
          </Card.Text>
          <Link to={`/product/${prod.id}`}>
            <Button variant='primary'>Más Detalles</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;


