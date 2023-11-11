
import NavBar from "./componentes/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./componentes/Cart";
import Provider from "./componentes/CartContext";
import Form from "./componentes/Form";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route
            exact
            path='/category/:categoryName'
            element={<ItemListContainer />}
          />
          <Route exact path='/product/:id' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/checkout' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </Provider>


  )
}
export default App

