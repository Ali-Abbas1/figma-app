import "./style.css";
import React from "react";
import { Container, Card, Button, Image, Row, Col } from "react-bootstrap";
import software from "../../assets/images/software.png";
import design from "../../assets/images/design.png";
import finance from "../../assets/images/finance.png";
import photography from "../../assets/images/photography.png";
import management from "../../assets/images/management.png";

const dreamstudio = () => {
  return (
    <>
      <div className="main-heading">
        <h1>Explore Dream Studio</h1>
      </div>
      <Container fluid className="main-container">
        <Row className="main-row">
          <Col lg={2}>
            <Card className="mb-3" style={{ border: "0px solid white" }}>
              <Card.Title
                className="Software"
                style={{
                  fontfamily: "Inter",
                  fontstyle: "normal",
                  fontweight: "700",
                  fontsize: "15px",
                  lineheight: "24px",
                  textalign: "center",
                }}
              >
                <h3>Software</h3>
              </Card.Title>
              <Image src={software} alt="Software" fluid />

              <Button className="software-bt">Learn More!</Button>
            </Card>
          </Col>
          <Col lg={2}>
            <Card className="mb-3" style={{ border: "0px solid white" }}>
              <Card.Title
                className="Design"
                style={{
                  fontfamily: "Inter",
                  fontstyle: "normal",
                  fontweight: "700",
                  fontsize: "15px",
                  lineheight: "24px",
                }}
              >
                <h3>Design</h3>
              </Card.Title>
              <Image src={design} alt="Design" fluid />

              <Button className="design-bt">Learn More!</Button>
            </Card>
          </Col>
          <Col lg={2}>
            <Card className="mb-3" style={{ border: "0px solid white" }}>
              <Card.Title
                className="Finance"
                style={{
                  fontfamily: "Inter",
                  fontstyle: "normal",
                  fontweight: "700",
                  fontsize: "15px",
                  lineheight: "24px",
                }}
              >
                <h3>Finance</h3>
              </Card.Title>
              <Image src={finance} alt="Finance" fluid />

              <Button className="finance-bt">Learn More!</Button>
            </Card>
          </Col>
          <Col lg={2}>
            <Card className="mb-3" style={{ border: "0px solid white" }}>
              <Card.Title
                className="Photography"
                style={{
                  fontfamily: "Inter",
                  fontstyle: "normal",
                  fontweight: "700",
                  fontsize: "15px",
                  lineheight: "24px",
                }}
              >
                <h3>Photography</h3>
              </Card.Title>
              <Image src={photography} alt="Photography" fluid />

              <Button className="photography-bt">Learn More!</Button>
            </Card>
          </Col>
          <Col lg={2}>
            <Card className="mb-3" style={{ border: "0px solid white" }}>
              <Card.Title
                className="Management"
                style={{
                  fontfamily: "Inter",
                  fontstyle: "normal",
                  fontweight: "700",
                  fontsize: "15px",
                  lineheight: "24px",
                }}
              >
                <h3>Management</h3>
              </Card.Title>
              <Image src={management} alt="Management" fluid />

              <Button className="management-bt">Learn More!</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default dreamstudio;
