import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap, FaBuilding } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div className="about-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "1rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.85)",
            textAlign: "justify",
          }}
        >
          Hi, I’m <strong>Hamjathali I</strong> — a passionate{" "}
          <strong>Java Full Stack Developer</strong> and{" "}
          <strong>AI/ML enthusiast</strong> focused on building efficient, scalable,
          and reliable software applications. I work across frontend, backend, and
          database layers with hands-on experience in Java, Spring Boot, REST APIs,
          PostgreSQL, React, and Python.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", textAlign: "justify", }}>
            I’m deeply interested in intelligent systems and network security, which led
            me to develop a{" "}
            <strong>Smart AI-Based Network Intrusion Detection System</strong> using
            Python, Scapy, and TensorFlow. This project strengthened my skills in data
            preprocessing, real-time packet analysis, and deep learning–based intrusion
            detection.
        </p>

        <p style={{fontSize: "1.1rem", color: "rgba(255,255,255,0.85)",textAlign: "justify"}}>
            I enjoy solving technical challenges, optimizing system performance, and
            integrating AI into real-world applications. I’m currently seeking
            opportunities to apply my skills, learn from industry projects, and
            contribute to impactful software or AI-driven solutions.
        </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div className="edu-card"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "0.2rem 0.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div style={{margingBottom: "0.2"}}>
                <h4
                  style={{
                    color: "var(--accent)",
                    // marginBottom: "rem",
                    fontSize: "1.25rem",
                  }}
                >
                  B.E in Computer Science and Engineering
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>IFET College of Engineering</strong> — Villupuram,
                  Tamil Nadu
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  4th Year (Pursuing) | GPA: 8.0
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2022 – 2026</p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div className="edu-card"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "0.2rem 0.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={60} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Higher Secondary Education (12th Grade)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Sri Lakshmi Chordia Matriculation Hr. Sec. School</strong> — Cuddalore, Tamil Nadu
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Tamil Nadu State Board | Percentage: 74%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2022</p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div className="edu-card"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "0.2rem 0.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={60} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary Education (10th Grade)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Sri Lakshmi Chordia Matriculation Hr. Sec. School</strong> — Cuddalore, Tamil Nadu
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Tamil Nadu State Board | Percentage: 77%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2020</p>
              </div>
            </motion.div>
          </div>
          
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Internship
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}>
            {/* --- Internship Card 1 --- */}
            <motion.div className="intern-card"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "0.2rem 0.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaBuilding size={60} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Simplzone
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Frontend Web Development Intern </strong> 
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Worked on building responsive web interfaces using HTML, CSS, and
                  JavaScript.
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in June 2024 – July 2024</p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Location: Chennai, Tamil Nadu</p>
              </div>
            </motion.div>

            {/* --- Internship Card 2 --- */}
            <motion.div className="intern-card"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "0.2rem 0.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaBuilding size={60} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Simplzone
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Test Engineer Intern </strong> 
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Automation using Selenium with Python for web
                    application validation.
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in Dec 2024 – Jan 2025</p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Location: Chennai, Tamil Nadu</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;


