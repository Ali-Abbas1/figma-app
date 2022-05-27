import './style.css';
import { Container, Card, Button, Col, Row } from 'react-bootstrap';
import ourteam1 from '../../assets/images/ourteam1.png'
import ourteam2 from '../../assets/images/ourteam2.png'
import ourteam3 from '../../assets/images/ourteam3.png'
import ourteam4 from '../../assets/images/ourteam4.png'
import ourteam5 from '../../assets/images/ourteam5.png'
import ourteam6 from '../../assets/images/ourteam6.png'
import React from 'react'

const ourteam = () => {
    return (
        <>
            <Container fluid className='main-ourteam'>
                <div className="ourteam-heading">
                    <h1>Our Team</h1>
                    <p>It consists of the best members gathered & collected to make the perfect team that can deliver the best results & in record time.</p>
                </div>
                <div className="ourteam-cards">
                    <Row className="main-card-row">
                        <Col lg={4}>
                            <Card className="card1" style={{ border: "0px solid white", }}>
                               <Card.Body className='card-body-txt1'>
                                <Card.Img src={ourteam1} />
                                <Card.Title
                                    className="card-title-1"
                                >
                                    <h3>Muhammad Ali</h3>
                                </Card.Title>
                                <Card.Text className='card1-text'><p>Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want. Let’s do it something earlier.</p></Card.Text>
                                <Button className="card1-bt" style={{border:"none",
                            backgroundColor:"#F3F4F6", color:"#10B981"}}>Learn More!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="card2" style={{ border: "0px solid white" }}>
                                <Card.Body className='card-body-txt2'>
                                <Card.Img src={ourteam2} />
                                <Card.Title
                                    className="card-2"
                                >
                                    <h3>Muhammad Ali</h3>
                                </Card.Title>
                                <Card.Text className='card2-text' ><p >Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want. Let’s do it something earlier.</p></Card.Text>
                                <Button className="card2-bt"
                                 style={{border:"none",
                                 backgroundColor:"#F3F4F6", color:"#10B981"}}>Learn More!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="card3" style={{ border: "0px solid white" }}>
                                <Card.Body className='card-body-txt3'>
                                <Card.Img src={ourteam3} />
                                <Card.Title
                                    className="card-3"
                                >
                                    <h3>Muhammad Ali</h3>
                                </Card.Title>
                                <Card.Text className='card3-text'><p>Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want. Let’s do it something earlier.</p></Card.Text>
                                <Button className="card3-bt"
                                 style={{border:"none",
                                 backgroundColor:"#F3F4F6", color:"#10B981"}}>Learn More!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="card4" style={{ border: "0px solid white" }}>
                                <Card.Body className='card-body-txt4'>
                                <Card.Img src={ourteam4} />
                                <Card.Title
                                    className="card-4"
                                >
                                    <h3>Muhammad Ali</h3>
                                </Card.Title>
                                <Card.Text className='card4-text'><p>Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want. Let’s do it something earlier.</p></Card.Text>
                                <Button className="card4-bt"
                                 style={{border:"none",
                                 backgroundColor:"#F3F4F6", color:"#10B981"}}>Learn More!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="card5" style={{ border: "0px solid white" }}>
                                <Card.Body className='card-body-txt5'>
                                <Card.Img src={ourteam5} />
                                <Card.Title
                                    className="card-5"
                                >
                                    <h3>Muhammad Ali</h3>
                                </Card.Title>
                                <Card.Text className='card5-text'><p>Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want. Let’s do it something earlier.</p></Card.Text>
                                <Button className="card5-bt"
                                 style={{border:"none",
                                 backgroundColor:"#F3F4F6", color:"#10B981"}}>Learn More!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="card6" style={{ border: "0px solid white" }}>
                               <Card.Body className='card-body-txt6'>
                                <Card.Img src={ourteam6} />
                                <Card.Title
                                    className="card-6"
                                >
                                    <h3>Muhammad Ali</h3>
                                </Card.Title>
                                <Card.Text className='card6-text'><p>Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want. Let’s do it something earlier.</p></Card.Text>
                                <Button className="card6-bt"  style={{border:"none",
                            backgroundColor:"#F3F4F6", color:"#10B981"}}>Learn More!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default ourteam
