import React from "react";
import "./project.css";
import fertimg from "./data/fertilizer.png"; // Add your Fertilizer Recommender image
import studentimg from "./data/student.png";   // Add your Student Management System image
import tomatoimg from "./data/tomato.png";     // Add your Tomato app image
import houseimg from "./data/house.png";       // Add your House Price Prediction image

function Project() {
    return (
        <div className="project" id="project">
            <div className="heading atkinson-hyperlegible-bold" style={{ fontSize: "45px" }}>
                Projects <span className="pro">🏗️</span>
            </div>

            {/* Fertilizer Recommender */}
            <div className="container-pr">
                <div className="project-title atkinson-hyperlegible-bold">
                    Fertilizer Recommender <span><a href="https://fertilizer-recommender-kfs6.onrender.com/homepage.html">Live Link</a></span>
                </div>
                <div className="imag">
                    <a href="https://fertilizer-recommender-kfs6.onrender.com/homepage.html">
                        <img src={fertimg} style={{ width: "610px", height: "250px" }} alt="Fertilizer App" />
                    </a>
                    <div className="click">☝️Click</div>
                </div>
                <div className="para">
                    <p className="atkinson-hyperlegible-regular" style={{ fontSize: "20px" }}>
                        Built a web app using HTML, CSS, Bootstrap, and JavaScript that suggests optimal fertilizers based on soil type, crop, and weather data. The app is fully responsive and ensures usability across all devices.
                    </p>
                </div>
            </div>

            {/* Student Management System */}
            <div className="container-pr">
                <div className="project-title atkinson-hyperlegible-bold">
                    Student Management System <span><a href="https://studentmanagement-9-4kqa.onrender.com/">Live Link</a></span>
                </div>
                <div className="imag">
                    <a href="https://studentmanagement-9-4kqa.onrender.com/">
                        <img src={studentimg} style={{ width: "610px", height: "250px" }} alt="Student Management" />
                    </a>
                    <div className="click">☝️Click</div>
                </div>
                <div className="para">
                    <p className="atkinson-hyperlegible-regular" style={{ fontSize: "20px" }}>
                        A full-stack CRUD application built using the MERN stack to manage student records. Features include RESTful API integration with MongoDB and a clean, responsive React UI.
                    </p>
                </div>
            </div>

            {/* Tomato – Food Delivery Platform */}
            <div className="container-pr">
                <div className="project-title atkinson-hyperlegible-bold">
                    Tomato – Food Delivery Platform <span><a href="https://food-delivery-frontend-smyd.onrender.com/">Live Link</a></span>
                </div>
                <div className="imag">
                    <a href="https://food-delivery-frontend-smyd.onrender.com/">
                        <img src={tomatoimg} style={{ width: "610px", height: "250px" }} alt="Tomato Food App" />
                    </a>
                    <div className="click">☝️Click</div>
                </div>
                <div className="para">
                    <p className="atkinson-hyperlegible-regular" style={{ fontSize: "20px" }}>
                        A complete food delivery web application built with the MERN stack, Stripe for payments, and JWT for authentication. Includes features like email OTP verification, promo code support, order tracking, and responsive UI with smooth animations.
                    </p>
                </div>
            </div>

            {/* House Price Prediction */}
            <div className="container-pr">
                <div className="project-title atkinson-hyperlegible-bold">
                    House Price Prediction using Machine Learning <span><a href="https://github.com/Shekhar6264/House-Price-Prediction">GitHub</a></span>
                </div>
                <div className="imag">
                    <a href="https://github.com/Shekhar6264/House-Price-Prediction">
                        <img src={houseimg} style={{ width: "610px", height: "250px" }} alt="House Price ML" />
                    </a>
                    <div className="click">☝️Click</div>
                </div>
                <div className="para">
                    <p className="atkinson-hyperlegible-regular" style={{ fontSize: "20px" }}>
                        Trained a regression model on the Boston housing dataset using Python, scikit-learn, and Pandas. Applied preprocessing, performed EDA, and evaluated results using R² score and MSE. Visualized results with Seaborn and Matplotlib.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Project;
