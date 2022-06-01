import './style.css';
import React from 'react'
import {Container} from 'react-bootstrap'
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import instagram from '../../assets/images/instagram.png';
import google from '../../assets/images/google.png';
import phone from '../../assets/images/phone.png';
import location from '../../assets/images/location.png';
import email from '../../assets/images/email.png';

const footer = () => {
  return (
    <>
      <Container fluid className='footer-main'>
        <div className="footer-heading">
            <h2>Contact Us</h2>
            <p>Finding a job that matches your skills & interest is a lot easier now, You can browse the jobs & apply whenever & wherever you want. Finding a Job that matches your skills & interest is a lot easier now, You can browse the jobs & apply whenever & wherever you want.</p>
        </div>
        <div className="social-buttons d-flex">
          <img src={facebook} />
          <img src={twitter} />
          <img src={instagram} />
          <img src = {google} />
        </div>
        <div className="contact">
          <img src={phone} />
          <p>+92-340-7909920</p>

          <img src= {location}/>
          <p>Somewhere in Islamabad, Pakistan</p>

          <img src={email} />
          <p>Someone@here.com</p>
        </div>
      </Container>
    </>
  )
}

export default footer
