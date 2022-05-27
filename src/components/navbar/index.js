import "./style.css";
import React from "react";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import logo from "../../assets/images/Vector.png";
import dot from "../../assets/images/dot.png";

const navbar = () => {
  return (
    <>
      <Navbar expand="lg" className="main-div">
        <Container fluid className="main-nav">
          <div className="logo">
            <img src={logo} />
            <p>
              <b>DREAM</b> STUDIO
            </p>
            <p>SLOGAN GOES HERE</p>
          </div>
          <div className="navbar-center-buttons">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 nav-collapse"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <div className="nav-buttons d-flex mx-auto">
                  <button className="product">Product</button>
                  <div className="img1">
                    <img src={dot} />
                  </div>
                  <button className="performance">Performance</button>
                  <div className="img2">
                    <img src={dot} />
                  </div>
                  <button className="dashboard">Dashboard</button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="buttons d-flex">
            <Button className="login">Login</Button>
            <button className="signup">Signup</button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default navbar;
