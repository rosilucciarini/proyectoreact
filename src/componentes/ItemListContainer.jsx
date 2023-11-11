
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../services/FirebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const coleccionProductos = collection(dataBase, "productos");

    const referencia = categoryName
      ? query(coleccionProductos, where("category", "==", categoryName))
      : coleccionProductos;

    getDocs(referencia)
      .then((res) => {
        const productos = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setItems(productos);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => setLoading(true);
  }, [categoryName]);

  if (loading) {
    return (
      <div className='loading'>
        <MoonLoader color='#36d7b7' />;
      </div>
    );
  }

  return (
    <div className='container-fluid'>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;


