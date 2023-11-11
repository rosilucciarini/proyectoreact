import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { dataBase } from "../services/FirebaseConfig";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [correoDos, setCorreoDos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [loading, setLoading] = useState(false);
  const [ordenDeCompraID, setOrdenDeCompraID] = useState("");
  const { carrito, montoTotal, borrarCarrito, totalUnidades } =
    useContext(CartContext);
  const precioTotal = montoTotal();
  const unidadesTotal = totalUnidades();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const ordenDeCompra = {
      buyer: { nombre, apellido },
      correo: { correo },
      items: carrito,
      total: precioTotal,
      date: serverTimestamp(),
    };

    const crearOrdendeCompra = collection(dataBase, "orders");
    addDoc(crearOrdendeCompra, ordenDeCompra)
      .then((res) => {
        setOrdenDeCompraID(res.id);
        borrarCarrito();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleChangeApellido = (e) => {
    setApellido(e.target.value);
  };

  const handleCorreo = (e) => {
    setCorreo(e.target.value);
  };

  const handleCorreoDos = (e) => {
    setCorreoDos(e.target.value);
  };

  const handleTelefono = (e) => {
    setTelefono(e.target.value);
  };

  if (ordenDeCompraID) {
    return (
      <div className='center'>
        <h5>
          Gracias por tu compra, tu número de seguimiento es:{" "}
          <b>{ordenDeCompraID}</b>
        </h5>
        <Link to='/'>
          <button className='btn btn-success'>
            <small>Volver a Inicio</small>
          </button>
        </Link>
      </div>
    );
  }

  return (
    <Container>
      <h1>Detalle de su compra</h1>
      <h3>
        Monto Total a Pagar: <b>$ {precioTotal} </b>
      </h3>
      <h5>
        Cantidad de Productos: <b>{unidadesTotal}</b>
      </h5>
      <Row>
        <Form onSubmit={handleSubmit} action=''>
          <Col>
            <Form.Group>
              <Form.Label className='marginTop'>Correo Electrónico</Form.Label>
              <Form.Control
                type='email'
                name='correoUno'
                onChange={handleCorreo}
                value={correo}
                placeholder='Ingresar mail'
                required
              />
              <Form.Text className='text-muted'>
                No compartiremos tu correo.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label className='marginTop'>
                Repetir Correo Electrónico
              </Form.Label>
              <Form.Control
                type='email'
                name='correoDos'
                placeholder='Ingrese Nuevamente su Correo'
                onChange={handleCorreoDos}
                value={correoDos}
                required
              />
              <Form.Text
                className=''
                style={
                  correo !== correoDos || (correo === "" && correoDos === "")
                    ? { color: "red", fontWeight: "bold" }
                    : { color: "green", fontWeight: "bold" }
                }
              >
                {correo !== correoDos || (correo === "" && correoDos === "")
                  ? "Los Correos deben coincidir"
                  : "Los correos coinciden"}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label className='marginTop'>Nombre</Form.Label>
              <Form.Control
                type='text'
                name='nombre'
                onChange={handleChangeNombre}
                value={nombre}
                placeholder='Ingresar Nombre'
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className='marginTop'>Apellido</Form.Label>
              <Form.Control
                type='text'
                name='apellido'
                onChange={handleChangeApellido}
                value={apellido}
                placeholder='Ingresar Apelllido'
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className='marginTop'>Teléfono</Form.Label>
              <Form.Control
                type='number'
                name='telefono'
                onChange={handleTelefono}
                value={telefono}
                placeholder='Ingresar Teléfono'
                required
              />
              <Button
                variant='primary'
                type='submit'
                className='marginTop'
                disabled={
                  correo !== correoDos || (correo === "" && correoDos === "")
                }
              >
                {loading ? "Finalizando Compra..." : "Finalizar Compra"}
              </Button>
            </Form.Group>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default Formulario;

