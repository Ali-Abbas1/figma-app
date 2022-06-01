import './style.css';
import React from 'react';
import locationmark from "../../assets/images/search-location.png";
import { NavDropdown } from "react-bootstrap"
import {Container} from 'react-bootstrap'

const searchbar = () => {
  return (
    <Container className="searchbar-main ">
      <div className="location">
          <img src={locationmark}/>
         <h1>  Location </h1> <p> | Enter Your Location Here </p> 
      </div>
      <div className="navigators">
      <div className="category" >
      <NavDropdown
          title="Category"
        >
        </NavDropdown>
      </div>
      <div className="skills">
      <NavDropdown
          title="Skills"
        >
        </NavDropdown>
      </div>
      </div>
      <div className="search-button">
      <button className="search">Search</button>
      </div>
    </Container>
  )
}

export default searchbar
