import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container
      className="mt-5 pt-4"
      style={{ color: "rgba(0, 0, 0, 0.6)", background: "rgba(0,0,0,0.2)", borderRadius: 30 }}
    >
      <Row>
        <Col></Col>
        <Col>
          <Link to="/">
            <Button className="btn-gen mb-5" id="btn2">
              Go Back
            </Button>
          </Link>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <p id="footer-text">
            &copy;{" "}
            <i>
              PalaWeather Srl - P.IVA 05321350287 - Iscrizione registro delle imprese di Nuoro, 10/01/2019 - Privacy e
              Cookie Policy
            </i>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
