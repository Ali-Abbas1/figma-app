import './style.css';
import { Container, Card, Row, Col } from "react-bootstrap";
import social1 from '../../assets/images/social1.png';
import social2 from '../../assets/images/social2.png';
import social3 from '../../assets/images/social3.png';
import social4 from '../../assets/images/social4.png';
import social5 from '../../assets/images/social5.png';
import social6 from '../../assets/images/social6.png';
import social7 from '../../assets/images/social7.png';
import React from 'react';

const blog = () => {
  return (
    <>
      <Container fluid className='main-blog'>
      <div className="blog-header-content">
          <h1>We’re available on more than 10+ Social Media Companies World Wide!</h1>
          <p> We’ve all the required Catagories that you can explore from</p>
      </div>
      <div className="social-buttons">
      <Row className="upper-row">
          <Col md={1}>
            <Card className="social-bt1" style={{ border: "0px solid white" }}>
              <Card.Img src={social1} />
            </Card>
          </Col>
          <Col md={1}>
            <Card className="social-bt1" style={{ border: "0px solid white" }}>
              <Card.Img src={social2}  />
            </Card>
          </Col>
          <Col md={1}>
            <Card className="social-bt3" style={{ border: "0px solid white" }}>
              <Card.Img src={social3}  />
            </Card>
          </Col>
          <Col md={1}>
            <Card className="Social-bt4" style={{ border: "0px solid white" }}>
              <Card.Img src={social4} />
            </Card>
          </Col>
          <Col md={1}>
            <Card className="social-bt5" style={{ border: "0px solid white" }}>
              <Card.Img src={social5} />
            </Card>
          </Col>
          <Col md={1}>
            <Card className="social-bt6" style={{ border: "0px solid white" }}>
              <Card.Img src={social6} />
            </Card>
          </Col>
          <Col md={1}>
            <Card className="social-bt7" style={{ border: "0px solid white" }}>
              <Card.Img src={social7} />
            </Card>
          </Col>
          </Row>
          {/* </div>
          <div className="lower-social-buttons"> */}
          <Row className='lower-row'>
          <Col md={1}>
            <Card className="social-bt8" style={{ border: "0px solid white" }}>
              <Card.Img src={social1} />
            </Card>
            </Col>
            <Col md={1}>
            <Card className="social-bt9" style={{ border: "0px solid white" }}>
              <Card.Img src={social2} />
            </Card>
          </Col>
          <Col md={1}>
            <Card className="social-bt10" style={{ border: "0px solid white" }}>
              <Card.Img src={social3} />
            </Card>
          </Col>
          <Col md={1}>
            <Card className="social-bt11" style={{ border: "0px solid white" }}>
              <Card.Img src={social4} />
            </Card>
          </Col>         
          <Col md={1}>
            <Card className="social-bt11" style={{ border: "0px solid white" }}>
              <Card.Img src={social5} />
            </Card>
          </Col>
          
        </Row>
        </div>
      </Container>
    </>
  )
};

export default blog
