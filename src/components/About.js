import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../images/Logo.png"
import Cobie from "../images/Cobie2.PNG"
import Trip from "../images/Trip.JPEG"
import Me from "../images/Profile_pic.JPG"
import Nav from './Nav'
import Footer from './Footer'


export default function About() {
        return (
          <div>
            <header>
              {/*This row keeps the collums in the same horizontal alignment and same group*/}
              <div className="row">
                {/*Collum containing text and the navbar with a blue background*/}
                <div className="col-12">
                  <div className="p-3 mb-2 text-center">
                    <img className="logo" src={Logo} alt="Logo" />
                    <h2>
                      Hi my name is James Gideon and I'm a Web Developer <i className="fas fa-laptop-code" />
                    </h2>
                    <Nav/>
                  </div>                        
                </div>
              </div>              
            </header>   
            <div className="container">    
              <div className="row">
                <div id="About" className="col">
                  {/*Blue text*/}
                  <h1>About Me</h1>
                </div>
              </div>      
              {/*Bio with black background color*/}
              <div className="p-3 mb-2 bg-dark text-white">    
                <div className="row">
                  <div className="col-4"><img src="https://i.imgur.com/oiBWsDJ.jpg" className="img-fluid" alt="Chicago at Night" /></div>
                  <div className="col-8"><p className="about-body">  My name is James Gideon. I grew up in a small tourist town called Saint Joseph, MI. 
                      I lived there my whole life until October, 2019, when I decided to move up to the Grand Rapids area to escape the small town lifestyle. 
                      So now that I've broken out of living in one place, I'm here to break out of only working in restaurants. 
                      I'm excited to get more closely integrated with the technology that I've grown up around 
                      and to turn that newfound familiarity into an awesome career would be a big upgrade for myself. 
                      I'm also pumped to create for other companies to upgrade them as well. 
                      I love to travel for the scenic views and I love going to concerts for the body-shaking musical experience. 
                      Succeeding in this bootcamp and turning it into a career would improve my financial status and my ability to do the things I love. 
                      Maybe I could even follow my dream of living in Chicago.</p></div>
                </div>
              </div>
              <div className="row">    
                <div className="col-md-4">
                  <div className="card bg-dark text-light border-primary mb-3" style={{maxWidth: '35rem', marginTop: '4rem'}}>
                    <div className="card-header">
                      <img style={{width: '250px', height: '440px', marginLeft: '30px'}} src={Me} alt="" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title text-center">
                        This is me!
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-dark text-light border-primary mb-3" style={{maxWidth: '35rem', marginTop: '4rem'}}>
                    <div className="card-header">
                      <img className="w-50" src={Cobie} alt="Cobie the dog!" />
                      <img className="float-right" src={Trip} style={{width: '150px', height: '275px'}} alt="Trip the dog!" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title text-center">
                        These are my dogs, <br /> <span className="yellow">Cobie</span>(left) and <span className="blue">Trip</span>(right). 
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-dark text-light border-primary mb-3" style={{maxWidth: '35rem', marginTop: '4rem'}}>
                    <div className="card-header">
                      <h5 className="text-center text-capitalize">
                        <ul>
                          <li>
                            <a href="https://blacklivesmatter.com/">Black Lives Matter</a>
                          </li>
                          <li>
                            <a href="https://welovetheearth.org/">We Love The Earth</a>
                          </li>
                          <li>
                            <a href="https://www.doctorswithoutborders.org/">Doctors Without Borders</a>
                          </li>
                          <li>
                            <a href="https://www.charitywater.org/">Charity Water</a>
                          </li>
                          <li>
                            <a href="https://www.savethechildren.org/">Save The Children</a>
                          </li>
                        </ul>
                      </h5>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title text-center">
                        A list of organizations I stand behind
                      </h4>
                    </div>
                  </div>
                </div>
              </div>    
            </div>
            {/*Footer with a welcome message*/}
              
              <Footer/>
            
          </div>
        );
      }
      

