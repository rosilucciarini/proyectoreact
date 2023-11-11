import { Container } from "react-bootstrap";
import ItemCount from "./ItemCount";
import Image from "react-bootstrap/Image";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [unidades, setUnidades] = useState(0);
  const { agregarAlCarrito, getCantidadProducto } = useContext(CartContext);

  const prueba = (numero) => {
    setUnidades(numero);
    agregarAlCarrito(item, numero);
    toast.info(`Agregaste ${numero} productos al carrito`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const quantity = getCantidadProducto(item.id);

  return (
    <Container>
      <div className='container detailCont'>
        <ToastContainer />
        <div className='col-6'>
          <Image fluid src={item.imagen} alt={item.nombre} />
        </div>
        <div>
          <h2>{item.nombre}</h2>
          <p>{item.detalle}</p>
          <p>Precio unitario: $ {item.precio}</p>
          {unidades === 0 ? (
            <ItemCount prueba={prueba} stock={item.stock} initial={quantity} />
          ) : (
            <Link to='/cart'>
              {" "}
              <button className='btn btn-success'>
                <small>Ir al carrito</small>
              </button>
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ItemDetail;


