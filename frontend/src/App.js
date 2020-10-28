import "./App.css";
import { Col, Row, Container } from "reactstrap";
import logo from "./images/logo.png";
import { Icon } from "react-icons-kit";
import { warning } from "react-icons-kit/icomoon/warning";

function App() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Row className="justify-content-center">
            <img src={logo} alt="log" height="100" width="210"></img>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center Icon_color Contenedor_Icono">
        <Icon icon={warning} size={150} />
      </Row>
      <Container>
        <Row className="justify-content-center Contenedor_Texto Contenedor_Icono">
          <p>
            Estimados clientes, estamos haciendo mejoras en nuestra
            infraestructura, para poder seguir brindando un servicio de
            excelencia.
          </p>
          <p>Les pedimos disculpas por las molestias ocasionadas.</p>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
