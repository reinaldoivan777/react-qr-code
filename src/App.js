import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import QRCode from "react-qr-code";

import Text from "./components/Text";
import Geolocation from "./components/Geolocation";
import Calendar from "./components/Calendar";
import Mail from "./components/Mail";
import Call from "./components/Call";

function App() {
  const [qrText, setQrText] = useState("");
  return (
    <Container className="mx-auto">
      <h1 className="my-4">Qr Generator</h1>
      {qrText.length > 0 && <QRCode value={qrText} />}
      <h4 className="my-3">Choose the type of QRCode format</h4>
      <Tab.Container defaultActiveKey="text">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="text">Text and URLs</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="geolocation">Geolocation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="calendar">Calendar</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="mail">Mail</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="call">Call</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="text">
                <Text setQrText={setQrText} />
              </Tab.Pane>
              <Tab.Pane eventKey="geolocation">
                <Geolocation setQrText={setQrText} />
              </Tab.Pane>
              <Tab.Pane eventKey="calendar">
                <Calendar setQrText={setQrText} />
              </Tab.Pane>
              <Tab.Pane eventKey="mail">
                <Mail setQrText={setQrText} />
              </Tab.Pane>
              <Tab.Pane eventKey="call">
                <Call setQrText={setQrText} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default App;
