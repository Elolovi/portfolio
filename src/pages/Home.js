import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css"; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import Footer from "../components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Home = () => {    
    return (
        <div className="container-fluid">
            {/* Presentation */}
            <div className="row">
                {/* Bootstrap Column with Background Image */}
                <div className="col-sm-12 image-container mt-">
                    <div className="col-sm-5 offset-1 mt-10">
                        <span>Better Solutions For Your Business.</span>
                        
                        <h1><b>Elolo KOBANA</b></h1>
                        <span className="" style={{ fontSize: "20px", fontFamily: "sans-serif", fontWeight: "bold" }}>
                            I'm a passionate Full Staack Software Developer
                        </span>
                        <div className="mt-3">
                            <Link to="#" className="btn btn-danger">Learn More</Link>
                            <Link to="#" className="btn border-black hire-me left-margin">Hire Me</Link>
                        </div>

                        {/* Social Media Links */}
                        <div className="col-sm-4 mt-3">
                            <ul className="nav">
                                <li className="nav-item mr-10">
                                    <a className="nav-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link linkedin-button" 
                                       href="https://www.linkedin.com/in/elolo-kobana-b125b0191/" 
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

           
        </div>
    );
}

export default Home;
