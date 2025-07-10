import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./skills.css";

function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = containerRef.current.querySelectorAll(".lang");

    gsap.fromTo(
      items,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const sections = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: "python/python-original.svg" },
        { name: "JavaScript", icon: "javascript/javascript-original.svg" },
        { name: "Java", icon: "java/java-original.svg" },
        { name: "C", icon: "c/c-original.svg" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: "react/react-original.svg" },
        { name: "Node.js", icon: "nodejs/nodejs-original-wordmark.svg" },
        { name: "Express", icon: "express/express-original.svg" },
        { name: "Bootstrap", icon: "bootstrap/bootstrap-original.svg" },
        { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
        { name: "TensorFlow", icon: "tensorflow/tensorflow-original.svg" },
        { name: "Scikit-learn", icon: "scikitlearn/scikitlearn-original.svg" },
        { name: "NumPy", icon: "numpy/numpy-original.svg" },
        { name: "Pandas", icon: "pandas/pandas-original.svg" },
        { name: "Matplotlib", icon: "matplotlib/matplotlib-original.svg" },
        // Seaborn is not on Devicon; you can use a placeholder or skip
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
        { name: "SQL", icon: "mysql/mysql-original.svg" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: "git/git-original.svg" },
        { name: "Postman", icon: "postman/postman-original.svg" },
        { name: "LaTeX", icon: "latex/latex-original.svg" },
        { name: "VS Code", icon: "vscode/vscode-original.svg" }, // optional: requires Devicon support
      ],
    },
  ];

  return (
    <div className="skills">
      <div className="heading atkinson-hyperlegible-bold" style={{ fontSize: "40px" }}>
        Skills <span className="brain">🧠</span>
      </div>
      <div className="container-skills" ref={containerRef}>
        {sections.map((section, idx) => (
          <div key={idx} className="skill-section">
            <h3 className="section-title atkinson-hyperlegible-bold">{section.title}</h3>
            <div className="skills-grid">
              {section.skills.map((skill, index) => (
                <div className="lang" key={index}>
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`}
                    alt={skill.name}
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
