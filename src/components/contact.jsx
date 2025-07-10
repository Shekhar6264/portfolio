import React from "react";
import "./contact.css"
function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="heading atkinson-hyperlegible-bold" style={{ fontSize: "45px" }}>Contact <span className="con">☎️</span></div>
            <section
                style={{
                    width: "min-content",
                    maxWidth: "100%",
                    overflowX: "auto",
                }}
            >
                <pre
                    style={{
                        margin: "0",
                        lineHeight: "125%",
                        fontSize: "1.125rem",
                    }}
                >
                    <span style={{ color: "#66d9ef" }}>const</span>{" "}
                    <span style={{ color: "#a6e22e" }}>Shekar</span>{" "}
                    <span style={{ color: "#f92672" }}>=</span>{" "}
                    <span style={{ color: "#66d9ef" }}>new</span>{" "}
                    <span style={{ color: "#a6e22e" }}>Person</span>
                    <span style={{ color: "#f8f8f2" }}>({"{"}</span>
                    <br />
                    {"    "}
                    <span style={{ color: "#a6e22e" }}>email</span>
                    <span style={{ color: "#f92672" }}>:</span>{" "}
                    <a
                        href="mailto:shekharjamalpuri18@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#e6db74" }}
                    >
                        "shekharjamalpuri18@gmail.com"
                    </a>
                    <span style={{ color: "#f8f8f2" }}>,</span>
                    <br />
                    {"    "}
                    <span style={{ color: "#a6e22e" }}>github</span>
                    <span style={{ color: "#f92672" }}>:</span>{" "}
                    <a
                        href="https://github.com/Shekhar6264"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#e6db74" }}
                    >
                        "Shekhar6264"
                    </a>
                    <span style={{ color: "#f8f8f2" }}>,</span>
                    <br />
                    {"    "}
                    <span style={{ color: "#a6e22e" }}>linkedin</span>
                    <span style={{ color: "#f92672" }}>:</span>{" "}
                    <a
                        href="https://www.linkedin.com/in/shekar-jamalpuri-905b20289"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#e6db74" }}
                    >
                        "shekharjamalpuri"
                    </a>
                    <span style={{ color: "#f8f8f2" }}>,</span>
                    <br />
                    {"    "}
                    <span style={{ color: "#a6e22e" }}>Twitter</span>
                    <span style={{ color: "#f92672" }}>:</span>{" "}
                    <a
                        href="https://x.com/JShekar6264"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#e6db74" }}
                    >
                        "JShekar6264"
                    </a>
                    <span style={{ color: "#f8f8f2" }}>{"}"})</span>
                    ;
                </pre>
            </section>
        </div>
    );
}

export default Contact;