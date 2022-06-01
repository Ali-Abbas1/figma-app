import "./style.css";
import React from "react";
import { Container, Card } from "react-bootstrap";
import image2 from "../../assets/images/banner2-image.png";
import totaljobs from '../../assets/images/totaljobs.png';
import totalemployees from '../../assets/images/totalemployees.png';
import totalseekers from '../../assets/images/totalseekers.png';
import totalexperience from '../../assets/images/totalexperience.png';

const banner2 = () => {
  return (
    <>
    <div>
      <Container fluid className="main-banner2 d-flex ">
      <div className="left-banner d-flex" style={{width:"40%"}}>
      <Card className="banner-image2" >
              <Card.Img variant="top" src={image2} />
            </Card>
        </div>
        <div className="right-banner">
          <h2>How to Explore the Best Opportunites for Yourself?</h2>
          <p>
          Finding a Job that matches your skills & interest is a lot easier now, You can browse the Jobs & apply whenever & wherever you want.
          </p>
          <div className="upper d-flex">
          <div className="total-jobs">
              <img src={totaljobs} alt="jobs" />
              <h1> 5000+ </h1>
              <p>Total Jobs</p>
          </div>
         
          <div className="total-employees">
              <img src={totalemployees} alt="employees"/>
              <h1>80+</h1>
              <p>Total Employees</p>
          </div>
          
          </div>
          <div className="lower d-flex">
              <div className="seekers">
                  <img src={totalseekers}  alt="seekers"/>
                  <h1>2000+</h1>
                  <p>Total Seekers</p>
              </div>
              <div className="experience">
                  <img src={totalexperience} alt="experience"/>
                  <h1>5 years</h1>
                  <p>Total Experience</p>    
              </div>
          </div>
        </div>
        
      </Container>
    </div>
</> 
 );
};

export default banner2;