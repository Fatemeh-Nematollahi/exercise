import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <h2>رسالت مجموعه ما</h2>
            <p>
              مجموعه ما با هدف تولید آموزش هایی ایجاد شده ، که حس شیرینِ یادگیری
              لذت بخش برنامه نویسی و طراحی وب رو تجربه کنید.
            </p>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
