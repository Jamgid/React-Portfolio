import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../images/Logo.png"
import Nav from './Nav'
import Footer from './Footer'

export default function Contact() {
    return (
        <div>
            {/*This container allows us to keep the entirety, or part of, of our grid layout grouped together*/}
            <header>
                {/*This row keeps the collums in the same horizontal alignment and same group*/}
                <div className="row">
                    {/*Collum containing text and the navbar with a blue background*/}
                    <div className="col-12">
                        <div className="p-3 mb-2 text-center">
                            <img className="logo" src={Logo} alt="Logo" />
                            <h2>
                                Here's how you can get into contact with me <i className="fas fa-address-book" />
                            </h2>
                            <Nav/>
                        </div>                        
                    </div>
                </div>        
            </header>   
            <div className="container">    
                <div className="row">
                    <div className="col">
                        {/*Colored text*/}
                        <h1>Contact Info</h1>
                    </div>
                </div>
                {/*Everything in the closed div tag has a black background*/}
                <div className="p-3 mb-2 bg-dark text-white">
                    <div className="row">
                        <div className="col-4">
                            <ul>
                                <li>
                                    Email Address: jamgid@yahoo.com
                                </li>
                                <li>
                                    Phone Number: (269)277-4272
                                </li>
                                <li>
                                    Github: <a rel="noreferrer" target="_blank" href="https://github.com/Jamgid">Jamgid</a>
                                </li>
                                <li>
                                    LinkedIn Profile: <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/james-gideon-b231541b4/">James Gideon</a>
                                </li>
                                <li>
                                    Resume: <a rel="noreferrer" target="_blank" href="https://github.com/Jamgid/Portfolio/blob/main/Resume.docx.pdf">PDF</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>   
            {/*Footer with a welcome message*/}
            
                <Footer/>
            
        </div>
    );
}
