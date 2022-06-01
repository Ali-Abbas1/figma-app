import './style.css';
import { Container, Card, Row, Col } from "react-bootstrap";
import behance from '../../assets/images/behance222.svg';
import discord from '../../assets/images/discord22.svg';
import google from '../../assets/images/google22.svg';
import facebook from '../../assets/images/facebook22.svg';
import twitter from '../../assets/images/twitter22.svg';
import linkedin from '../../assets/images/linkedin22.svg';
import instagram from '../../assets/images/instagram22.svg';
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
          <Col md={1} className="first-btn">
            <Card className="social-bt1" >
              <Card.Img src={behance} className="image-1"  />
            </Card>
          </Col>
          <Col md={1} className="second-btn">
            <Card className="social-bt2" >
              <Card.Img src={discord} className="image-2" />
            </Card>
          </Col>
          <Col md={1} className="third-btn">
            <Card className="social-bt3" >
              <Card.Img src={google} className="image-3" />
            </Card>
          </Col>
          <Col md={1} className="fourth-btn">
            <Card className="social-bt4" >
              <Card.Img src={facebook}  className="image-4"/>
            </Card>
          </Col>
          <Col md={1} className="fifth-btn">
            <Card className="social-bt5" >
              <Card.Img src={twitter}  className="image-5"/>
            </Card>
          </Col>
          <Col md={1} className="sixth-btn">
            <Card className="social-bt6" >
              <Card.Img src={linkedin}  className="image-6"/>
            </Card>
          </Col>
          <Col md={1} className="seventh-btn">
            <Card className="social-bt7" >
              <Card.Img src={instagram} className="image-7" />
            </Card>
          </Col>
          </Row>
          {/* </div>
          <div className="lower-social-buttons"> */}
          <Row className='lower-row'>
          <Col md={1} className="eigth-btn">
            <Card className="social-bt8" >
              <Card.Img src={behance} className="image-8" />
            </Card>
            </Col>
            <Col md={1} className="ninth-btn">
            <Card className="social-bt9" >
              <Card.Img src={discord} className="image-9" />
            </Card>
          </Col>
          <Col md={1} className="tenth-btn">
            <Card className="social-bt10" >
              <Card.Img src={google}  className="image-10"/>
            </Card>
          </Col>
          <Col md={1} className="eleventh-btn">
            <Card className="social-bt11" >
              <Card.Img src={facebook} className="image-11" />
            </Card>
          </Col>         
          <Col md={1} className="twelveth-btn">
            <Card className="social-bt12" >
              <Card.Img src={twitter} className="image-12" />
            </Card>
          </Col>
          
        </Row>
        </div>
      </Container>
    </>
  )
};

export default blog
