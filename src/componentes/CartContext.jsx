import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const producto = { ...item, cantidad };
    if (existeEnCarrito(producto.id)) {
      sumarCantidad(producto);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const sumarCantidad = (productoAgregado) => {
    const carritoActualizado = carrito.map((productoDelCarrito) => {
      if (productoDelCarrito.id === productoAgregado.id) {
        const productoActualizado = {
          ...productoDelCarrito,
          cantidad: productoAgregado.cantidad,
        };
        return productoActualizado;
      } else {
        return productoDelCarrito;
      }
    });

    setCarrito(carritoActualizado);
  };

  const existeEnCarrito = (id) => carrito.some((prod) => prod.id === id);

  const borrarCarrito = () => setCarrito([]);

  const borrarUno = (id) => {
    const prodFiltrados = carrito.filter((prod) => prod.id !== id);
    setCarrito(prodFiltrados);
  };

  const totalUnidades = () => {
    let acc = 0;
    const copia = [...carrito];
    copia.forEach((prod) => {
      acc += prod.cantidad;
    });
    return acc;
  };

  const montoTotal = () => {
    let acumulador = 0;
    const copia = [...carrito];
    copia.forEach((prod) => {
      acumulador += prod.cantidad * prod.precio;
    });
    return acumulador;
  };

  const getCantidadProducto = (id) => {
    const product = carrito.find((prod) => prod.id === id);
    return product?.cantidad;
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        montoTotal,
        totalUnidades,
        agregarAlCarrito,
        borrarCarrito,
        borrarUno,
        getCantidadProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Provider;