import React from "react";
import "./experience.css";
import internshala from "./data/Internshala Web Dev.pdf";
import internimg from "./data/INT NSDC.png"; 

function Experience() {
    return (
        <div className="experience" id="experience">
            <div className="heading-ex atkinson-hyperlegible-bold" style={{ fontSize: "40px" }}>
                Experience <span className="bag">💼</span>
            </div>

            <div className="container-ex">
                <div className="title">
                    <div className="intern-heading atkinson-hyperlegible-bold">
                        Web Development Intern: <a href="https://internshala.com/" className="Links">Internshala</a>
                    </div>
                    <div className="time">
                        Oct 2024 – Nov 2024
                    </div>
                </div>

                <a href={internshala} className="image-wrapper">
                    <img className="im" src={internimg} alt="Internshala Internship Certificate" />
                    <span className="certificate-label">☝️ Click to view certificate</span>
                </a>

                <div className="about">
                    <p className="atkinson-hyperlegible-regular" style={{ fontSize: "20px" }}>
                        During my internship at Internshala, I developed a PG Hostel Finder and a personal portfolio website using HTML, CSS, and JavaScript. I focused on creating clean and responsive user interfaces to ensure an optimal user experience across devices.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Experience;
