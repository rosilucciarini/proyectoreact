
import CartWidget from "./CartWidgest";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import totaldeportes from "../logo/totaldeportes.png";



const NavBar = () => {
    return (
        <header>
            <Navbar
        sticky='top'
        collapseOnSelect
        style={{ padding: "0" }}
        expand='lg'
        bg='light'
      >

            <Navbar.Brand className='col-lg-2'>
              <img
                alt='Total Deportes'
                src={totaldeportes}
                width='200'
                height='150'
                className='d-inline-block align-top'
              />
            </Navbar.Brand>
            
           
            <Nav className='col-lg-1 offset-lg-1 flex-grow-1 '
              style={{ justifyContent: "space-between" }}>
            <Link to="/">Home</Link>
            <Link to="/category/indumentaria">Indumentaria</Link>
            <Link to="/category/calzado">Calzado</Link>
            <Link to="/category/accesorios">Accesorios</Link>

                <CartWidget/>

            </Nav>
            
            </Navbar>
             </header>
    )
}
export default NavBar

