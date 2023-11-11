/*
import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../services/FirebaseConfig";

const ItemDetailContainer = () =>{
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(()=>{
    const docRef = doc(dataBase, "productos", id);
    getDoc(docRef)
    .then((resp)=>{
      setItem(
        { ...resp.data(), id:resp.id}
      );
    })
  },[id])
  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  )

}
export default ItemDetailContainer;
*/


import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../services/FirebaseConfig";
import { MoonLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const coleciionProductos = collection(dataBase, "productos");
    const ref = doc(coleciionProductos, id);

    getDoc(ref)
      .then((res) => {
        setItem({
          id: res.id,
          ...res.data(),
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => setLoading(true);
  }, [id]);

  if (loading) {
    return (
      <div className='loading'>
        <MoonLoader color='#36d7b7' />;
      </div>
    );
  }

  return (
    <main>
      <div className='item-list-container'>
        <ItemDetail item={item} />
      </div>
    </main>
  );
};

export default ItemDetailContainer;


