import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row"> 
            <div className="col-sm-3">
	  	  	      <div className="row col-sm-12" style={{fontFamily: "sans-serif", fontSize: "16px"}}>
	  	  	          <p>
			              Avenue 30 Aout <br />
			              Lome-Togo<br /><br /> 
			              
			              <strong>Phone:</strong> +228 90 11 83 00<br />
			              <strong>Email:</strong> melsoft-info@gmail.com<br />
			            </p>
	  	  	      </div>
	  	  	  </div>

            <div class="col-sm-2">
		          <span class="p-1 ">Useful Link</span>
		    	     <ul class="nav flex-column flex-nowrap overflow-hidden">
                   <li class="nav-item">
	                       <a class="nav-link p-1 text-muted" to="/home">Portfolio</a>
	                  </li>
                   <li class="nav-item">
	                       <a class="nav-link p-1 text-muted" to="/about">About</a>
	                  </li>
	                  <li class="nav-item">
	                       <a class="nav-link p-1 text-muted" to="/resume">Resume</a>
	                  </li>
	                  <li class="nav-item">
	                       <a class="nav-link p-1 text-muted" to="/contact">Contact</a>
	                  </li>
		              </ul>
              </div>

              <div class="col-sm-2">
		            <span class="p-1 ">Projects</span>
                <ul class="nav flex-column flex-nowrap overflow-hidden">
                    <li class="nav-item">
                            <a class="nav-link p-1 text-muted" to="/">Web Design</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-1 text-muted" to="/">App development</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-1 text-muted" to="/">Project Management</a>
                        </li>
                </ul>
              </div>

              <div class="col-sm-3">
		          <span class="">My Social Networks</span>
                <p class="text-muted">Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                <ul class="nav">
                  <li class="nav-item mr-10">
                        <a class="nav-link p-1" to="/"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-1" to="/"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-1" to="/"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-1" to="/"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                </ul>
              </div>

            <div class="row justify-content-center">
                <div class="col-sm-5 text-muted">
                    <span>&copy; Copyright. All Rights Reserved Designed by melsoft</span>  
                </div>
            </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
