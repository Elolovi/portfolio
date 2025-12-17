import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css"; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div className="container-fluid">
            <div className="row"> 
              <div className="col-md-12 about-image">
                 <h2 className="offset-2" about-me>About me</h2>
                 <p className="text-danger offset-2" style={{ fontSize: "18px"}}>Know more about me</p>
              </div>
          </div>

          <div className="row">
		      <div className="col-sm-10 offset-1" style={{marginTop: "50px"}}>
					<div className="row">
						
					</div>
			  </div>
		  </div>

          <div className="row offset-md-1">
              <div className="col-sm-11" style={{marginBottom: "40px"}}>
                    <h1>About</h1>
                    <hr className="custom-hr"></hr>
                    <h2>LEARN MORE ABOUT ME</h2>

                    <div className="row col-sm-12">
                        <div className="col-sm-4 pimg"></div>
                        <div className="col-sm-8">
                            <h2 className="text-color">Full Stack Spring Boot Web Developper</h2>
                            <span className="text-justify"><b >Name&nbsp;:</b></span><span className="text-justify">&nbsp;Elolo KOBANA</span><br />
							<span className="text-justify"><b>Birth date&nbsp;:</b></span><span className="text-justify">&nbsp;23 Mars 1988</span><br />
							<span className="text-justify"><b>Phone number&nbsp;:</b></span><span className="text-justify">&nbsp;(+228) 93 67 64 00</span><br />
							<span className="text-justify"><b>Email&nbsp;:</b></span><span className="text-justify">&nbsp;melsoftinfo@gmail.com</span><br />
							<span className="text-justify"><b>Degree&nbsp;:</b></span><span className="text-justify">&nbsp;Bachelor</span><br />
							<span className="text-justify"><b>City&nbsp;:</b></span><span className="text-justify">&nbsp;Lome-Togo</span><br />
							<span className="text-justify"><b>Freelance&nbsp;:</b></span><span className="text-justify">&nbsp;Available</span>

                            <div className="row">
					          <div className="col-sm-12">
					        	 <p className="text-justify" style={{marginTop: "50px"}}>
					        	   Passionate and skilled Spring Boot Developer with extensive experience in implementing robust and scalable applications using Spring Boot framework. Adept at applying Scrum methodology for efficient project
                                   management and possessing strong expertise in database design and management.            
                                 </p>
					          </div>
					         </div>

                        </div>
                    </div>
              </div>
          </div>

            <div className="row col-md-10 offset-1">
                <div className="col-md-3 mb-4">
                    
                </div>
            </div>

            <div class="row offset-1">
				<div className="col-sm-11 text-justify" style={{marginTop: "20px", marginBottom: "40px"}}>
					<h2>Skills</h2>
					
	   				<hr className="custom-hr" />
					<p>
						Highly skilled and motivated Java Developer with 8 years of experience in designing, implementing, testing, and maintaining robust and scalable software applications. 
                        Skilled in Spring Boot, I am seeking a challenging freelance opportunity to leverage my expertise and contribute to the success of innovative projects
					</p>
				</div>
		   </div>

           <div class="row mb-5">
                {/* Progress bar */}
                <div class="col-sm-6">
                    <div className="row offset-md-2">
	                   <div className="col-sm-11">
	                   	   <span>HTML</span>
	                   </div>
	                   <div className="col-sm-1 float-sm-end">
	                   	   <span>99%</span>
	                   </div>
                    </div>	
                    <div className="row offset-md-2">
	                     <div className="progress col-sm-12 mt-" style={{height: "20px"}}>
	                       <div className="progress-bar bg-success" role="progressbar" style={{width: "99%"}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="98"></div>
	                     </div>
                    </div>

                    <div className="row offset-md-2">
	                   <div className="col-sm-11">
	                   	   <span>CSS</span>
	                   </div>
	                   <div className="col-sm-1 float-sm-end">
	                   	   <span>95%</span>
	                   </div>
                    </div>	
                    <div className="row offset-md-2">
	                     <div className="progress col-sm-12" style={{height: "20px"}}>
	                       <div className="progress-bar bg-success" role="progressbar" style={{width: "95%"}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="98"></div>
	                     </div>
                    </div>

                    <div className="row offset-md-2">
	                   <div className="col-sm-11">
	                   	   <span>Tailwind CSS</span>
	                   </div>
	                   <div className="col-sm-1 float-sm-end">
	                   	   <span>50%</span>
	                   </div>
                    </div>	
                    <div className="row offset-md-2">
	                     <div className="progress col-sm-12" style={{height: "20px"}}>
	                       <div className="progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="50"></div>
	                     </div>
                    </div>

                    <div className="row offset-md-2">
	                   <div className="col-sm-11">
	                   	   <span>JAVA</span>
	                   </div>
	                   <div className="col-sm-1 float-sm-end">
	                   	   <span>80%</span>
	                   </div>
                    </div>	
                    <div className="row offset-md-2">
	                     <div className="progress col-sm-12" style={{height: "20px"}}>
	                       <div className="progress-bar bg-success" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="80"></div>
	                     </div>
                    </div>

                    <div className="row offset-md-2">
	                   <div className="col-sm-11">
	                   	   <span>SPRING BOOT</span>
	                   </div>
	                   <div className="col-sm-1 float-sm-end">
	                   	   <span>75%</span>
	                   </div>
                    </div>	
                    <div className="row offset-md-2">
	                     <div className="progress col-sm-12" style={{height: "20px"}}>
	                       <div className="progress-bar bg-success" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="75"></div>
	                     </div>
                    </div>


                </div>

                 {/* Second progress bar section */}
                <div className="col-sm-6">
                    <div className="row">
	                   <div className="col-sm-9">
	                   	   <span>HIBERNATE ORM</span>
	                   </div>
	                   <div className="col-sm-1 float-sm-end">
	                   	   <span>75%</span>
	                   </div>
                    </div>
                    <div class="row">
	                     <div class="progress col-sm-10"  style={{height: "20px"}}>
	                       <div class="progress-bar bg-success" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="75"></div>
	                     </div>
                    </div>

                    <div className="row">
	                   <div className="col-sm-9">
	                   	   <span>DATABASE</span>
	                   </div>
	                   <div className="col-sm-1 float-sm-end">
	                   	   <span>85%</span>
	                   </div>
                    </div>
                    <div class="row">
	                     <div class="progress col-sm-10"  style={{height: "20px"}}>
	                       <div class="progress-bar bg-success" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="85"></div>
	                     </div>
                    </div>

                   
                    <div className="row">
	                   <div className="col-sm-9">
	                   	   <span>REACT</span>
	                   </div>
	                   <div className="col-sm-1 float-sm-end">
	                   	   <span>80%</span>
	                   </div>
                    </div>
                    <div class="row">
	                     <div class="progress col-sm-10"  style={{height: "20px"}}>
	                       <div class="progress-bar bg-success" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="80"></div>
	                     </div>
                    </div>

                    <div className="row">
	                   <div className="col-sm-9">
	                   	   <span>GIT/GITHUB</span>
	                   </div>
	                   <div className="col-sm-1 float-sm-end">
	                   	   <span>80%</span>
	                   </div>
                    </div>
                    <div class="row">
	                     <div class="progress col-sm-10"  style={{height: "20px"}}>
	                       <div class="progress-bar bg-success" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="80"></div>
	                     </div>
                    </div>

                    <div className="row">
	                   <div className="col-sm-9">
	                   	   <span>LINUX</span>
	                   </div>
	                   <div className="col-sm-1 float-sm-end">
	                   	   <span>70%</span>
	                   </div>
                    </div>
                    <div class="row">
	                     <div class="progress col-sm-10"  style={{height: "20px"}}>
	                       <div class="progress-bar bg-success" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="70"></div>
	                     </div>
                    </div>
                
                
                </div>

                 

            </div>
           

           <Footer />
        </div>
    );

}

export default About;