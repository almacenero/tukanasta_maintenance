import "./App.css";
import { Col, Row } from "reactstrap";
import logo from "./images/logo.png";

function App() {
  return (
    <Row className="Contenedor justify-content-center">
      <Col xs={2} className="Contenedor">
        <img src={logo} alt="log" height="100" width="210"></img>
      </Col>
    </Row>
  );
}

export default App;
