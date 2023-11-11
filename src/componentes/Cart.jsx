import React from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from "react";
import { Container, Table, Image } from "react-bootstrap";

const Cart = () => {
  const { carrito, borrarCarrito, borrarUno, montoTotal } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className='center'>
        <h1>No hay productos en el Carrito</h1>
        <Link to='/'>
          <button className='btn btn-success'>
            <small>Ver productos</small>
          </button>
        </Link>
      </div>
    );
  }

  return (
    <Container>
      <Table striped bordered hover size='sm' responsive>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
            <th>Borrar</th>
          </tr>
        </thead>
        {carrito.map((prod) => (
          <tbody key={prod.id}>
            <tr>
              <td className='align-middle'>
                <Image thumbnail src={prod.imagen} alt={prod.nombre} width='50px' />
              </td>
              <td className='align-middle'>{prod.nombre}</td>
              <td className='align-middle'>{prod.cantidad}</td>
              <td className='align-middle'>$ {prod.precio}</td>
              <td className='align-middle'>$ {prod.precio * prod.cantidad}</td>
              <td className='align-middle'>
                <AiOutlineDelete
                  size={25}
                  color='red'
                  onClick={() => borrarUno(prod.id)}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <td className='align-middle'>
            <small>Total de la Compra</small>
          </td>
          <td className='align-middle'></td>
          <td className='align-middle'></td>
          <td className='align-middle'></td>
          <td className='align-middle'>$ {montoTotal()}</td>
          <td className='align-middle'></td>
        </tfoot>
      </Table>
      <button className='btn btn-danger marginRight' onClick={borrarCarrito}>
        <small>Eliminar Carrito</small>
      </button>
      <Link to='/checkout'>
        <button className='btn btn-success'>
          <small>Checkout</small>
        </button>
      </Link>
    </Container>
  );
};

export default Cart;