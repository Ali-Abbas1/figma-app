import "./style.css";
import React from "react";
import { Container, Card, Form } from "react-bootstrap";
import image from "../../assets/images/banner-image.png";

const banner = () => {
  return (
    <div>
      <Container fluid className="main d-flex">
        <div className="left-banner ">
          <h1>Your Dream Job is waiting for you!</h1>
          <p>
            Finding a Job that matches your skills & interest is a lot easier
            now, You can browse the Jobs & apply whenever & wherever you want.
          </p>

          <div className="radio-switches d-flex">
            <div className="remote-switch">
              <Form>
                <Form.Check type="switch" id="custom-switch" label="Remote" />
              </Form>
            </div>
            <div className="onsite-switch">
              <Form>
                <Form.Check type="switch" id="custom-switch" label="Onsite" />
              </Form>
            </div>
          </div>
        </div>
        <div className="banner-image d-flex">
          <>
            <Card>
              <Card.Img variant="top" src={image} />
            </Card>
          </>
        </div>
      </Container>
    </div>
  );
};

export default banner;
