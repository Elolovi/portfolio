import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css"; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "../components/Footer";

const Resume = () => {
    return (
        <div className="container-fluid">
            <h1 className="text-center mt-5">My Resume</h1>
        </div>
    );

}

export default Resume;