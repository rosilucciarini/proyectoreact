import React, { useState, useEffect } from "react";

const ItemCount = ({ stock, initial = 1, prueba }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    count < stock && setCount(count + 1);
  };

  const restar = () => {
    count > 1 && setCount(count - 1);
  };

  const agregar = () => {
    prueba(count);
  };

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  return (
    <div className='container'>
      <div className='countDiv'>
        <button
          disabled={count === stock}
          className='btn btn-primary'
          onClick={sumar}
        >
          +
        </button>
        <button disabled='true' className='btn btn-primary'>
          {count}
        </button>
        <button
          disabled={count === initial}
          className='btn btn-primary'
          onClick={restar}
        >
          -
        </button>
        <button className='btn btn-success' onClick={agregar}>
          <small>Agregar al carrito</small>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;