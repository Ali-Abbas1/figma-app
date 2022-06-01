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
            <img src={logo} alt="logo" style={{ marginBottom: "7px" }} />
            <p>
              <b>DREAM</b> STUDIO
            </p>
            <p>SLOGAN GOES HERE</p>
          </div>
          <div className="navbar-center-buttons">
            <Navbar.Toggle className="toggler" aria-controls="navbarScroll" style={{ backgroundColor: "#10B981" }} />
            <Navbar.Collapse id="navbarScroll" className="navbar-toggler">
              <Nav
                className="me-auto my-2 my-lg-0 nav-collapse"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <div className="nav-buttons d-flex mx-auto">
                  <button className="product" style={{ paddingRight: "19px" }}>Product</button>
                  <div className="img1">
                    <img src={dot} alt="dot" />
                  </div>
                  <button className="performance" style={{ paddingRight: "19px", paddingLeft: "19px" }}>Performance</button>
                  <div className="img2">
                    <img src={dot} alt="dot2" />
                  </div>
                  <button className="dashboard" style={{ paddingLeft: "19px" }}>Dashboard</button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="buttons d-flex">
            <Button className="login" style={{
              color: "#34D399", fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
            }}>Login</Button>
            <button className="signup" style={{
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
            }}>Sign up</button>
          </div>

        </Container>
      </Navbar>

    </>
  );
};

export default navbar;
