import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../images/Logo.png"
import Cocktail from "../images/cocktail_curator.png"
import Weather from "../images/Weather_Dashboard.png"
import Tracker from "../images/Employees.png"
import Doctor from "../images/Doctor-Proctor.png"
import Nav from './Nav'
import Footer from './Footer'

export default function Portfolio() {
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
                        These are projects I have worked on <i className="fas fa-network-wired" />
                        </h2>
                    <Nav/>
                    </div>                        
                </div>
                </div>    
            </header>         
            <div className="container">      
                {/*Projects with a black background*/}
                <div className="row">
                    <div className="col">
                    <h1>Portfolio</h1>
                    </div>
                </div>
                <div className="p-3 mb-2 bg-dark text-white">
                    <div className="row">
                        <div className="col-4">
                        <img src={Cocktail} className="img-fluid" alt="Home page" />
                        </div>
                        <div className="col-8">
                        <p>The Cocktail Curator was designed by 
                            Joe Wojtowicz (Github:<a rel="noreferrer" target="_blank" href="https://github.com/josephwojtowicz">josephwojtowicz</a>),
                            Shane Daykin (Github:<a rel="noreferrer" target="_blank" href="https://github.com/ShaneD42">ShaneD42</a>),
                            Shay Mathis (Github:<a rel="noreferrer" target="_blank" href="https://github.com/mathisshayy">mathisshayy</a>) 
                            and myself (Github:<a rel="noreferrer" target="_blank" href="https://github.com/Jamgid">Jamgid</a>). We created an app that calls on an API to retrieve cocktail recipes by name or completely by random! 
                            As an added bonus we implemented a bar locator to show you all of the nice places to drink in your area if you'd like to try some of the random drinks you may find using this app. 
                            Enjoy <i className="yellow fas fa-smile-beam" /> and drink responsibly!<i className="blue fas fa-glass-cheers" /></p>
                        <p>If you'd like to check out the deployed page you can <a rel="noreferrer" target="_blank" href="https://shaned42.github.io/Project-1/">here</a><br />
                            Or the Github repository <a rel="noreferrer" target="_blank" href="https://github.com/ShaneD42/Project-1">here</a></p> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                        <img src={Weather} className="img-fluid" alt="Home page" />
                        </div>
                        <div className="col-8">
                        <p>Do you live in Michigan? If yes, then I know you miss the sunshine in the long winter months just as much as I do. 
                            With this app you can look up the forecast for your city and see detailed descriptions of what the weather will be like. 
                            Details like whether or not the sun will be out that day or the upcoming 5 days. 
                            Keep an eye on those predictions and go outside on a sunny day! <i className="yellow fas fa-sun" /></p>
                        <p>If you'd like to check out the deployed page you can <a rel="noreferrer" target="_blank" href="https://jamgid.github.io/Weather-Dashboard/">here</a><br />
                            Or the Github repository <a rel="noreferrer" target="_blank" href="https://github.com/Jamgid/Weather-Dashboard">here</a></p>  
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                        <img src={Tracker} className="img-fluid" alt="Home page" />
                        </div>
                        <div className="col-8">
                        <p>This HTML page's contents were dynamically generated with node.js to keep track of as many varying employees the user may have working with them. 
                            The node.js app prompts the user with questions to determine their position and important details that relate to them such as 
                            a Github username for the engineers or the school the interns are attending. It's important to know your colleagues! <i className="blue fas fa-users" /></p>
                        <p>If you'd like to check out the Github repository you can <a rel="noreferrer" target="_blank" href="https://github.com/Jamgid/Template-Engine---Employee-Summary">here</a></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                        <img src={Doctor} className="img-fluid" alt="Home page" />
                        </div>
                        <div className="col-8">
                        <p>Have you ever moved to a new area and needed a new primary care physician, or a doctor of any kind, Doctor Proctor is here to help. 
                            This project was developed by Joe Wojtowicz (Github:<a rel="noreferrer" target="_blank" href="https://github.com/josephwojtowicz">josephwojtowicz</a>),
                            Shane Daykin (Github:<a rel="noreferrer" target="_blank" href="https://github.com/ShaneD42">ShaneD42</a>),
                            Shay Mathis (Github:<a rel="noreferrer" target="_blank" href="https://github.com/mathisshayy">mathisshayy</a>),
                            Bethlehem Balcha (Github: <a rel="noreferrer" target="_blank" href="https://github.com/bettycode">bettycode</a>),
                            Jahnye Segnegon (Github: <a rel="noreferrer" target="_blank" href="https://github.com/jsegnegon">jsegnegon</a>)
                            and myself (Github:<a rel="noreferrer" target="_blank" href="https://github.com/Jamgid">Jamgid</a>). Our vision for this app is to give users
                            a community-driven experience, that will aid the process of finding a new doctor. When a user likes a 
                            doctor they can add them to the database. Now any user can see that doctor's information and easily get into contact with them.
                            Sign up to see the doctors your community members trust <i className="blue fas fa-thumbs-up" />
                        </p>
                        <p>If you'd like to check out the deployed page you can <a rel="noreferrer" target="_blank" href="https://doctor-proctor.herokuapp.com/doctors/welcome">here</a><br />
                            Or the Github repository <a rel="noreferrer" target="_blank" href="https://github.com/Jamgid/Project2">here</a></p> 
                        </div>
                    </div>
                </div>
            </div>
            {/*Footer with a welcome message*/}
            
                <Footer/>
            
        </div>
    );
}

