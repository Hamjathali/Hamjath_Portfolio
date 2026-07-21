import React, { useState } from "react";
import { motion } from "framer-motion";

const RESUME_DATA = {
  java: {
    label: "☕ Java Developer",
    role: "Computer Science and Engineering Graduate | Java Developer",
    summary: (
      <>
        <b>Computer Science Engineering graduate</b> with hands-on experience in{" "}
        <b>Java Full Stack Development</b>, specializing in building scalable
        enterprise applications. Proficient in Java, Spring Boot, React,
        Microservices, REST APIs, GraphQL, Apache Kafka, Redis, gRPC, Docker,
        and PostgreSQL. Experienced in designing end-to-end software systems,
        developing distributed microservices, implementing secure APIs, and
        delivering enterprise-grade applications through internships and
        real-world projects. Passionate about leveraging modern software
        engineering practices to build secure, high-performance, and impactful
        solutions that solve real-world challenges.
      </>
    ),
    projects: [
      "1️⃣ 🏥 Hospital Management System",
      "2️⃣ 🎓 Student Management System",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "REST APIs",
      "Microservices",
      "GraphQL",
      "gRPC",
      "React",
      "Apache Kafka",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "MinIO",
      "Maven",
      "Git",
      "GitHub",
      "Postman",
      "Linux",
      "JWT Authentication",
      "Oauth 2.0",
      "Problem Solving",
    ],
    pdf: "/Hamjath_JAVA_DEV.pdf",
    pdfLabel: "Hamjathali Java Developer Resume",
  },
  ml: {
    label: "🤖 ML Engineer",
    role: "Computer Science and Engineering Graduate | AI/ML Engineer",
    summary: (
      <>
        <b>Computer Science Engineering graduate</b> with hands-on experience
        in <b>Artificial Intelligence and Machine Learning</b>, specializing
        in building AI-driven solutions. Proficient in Python, TensorFlow,
        Keras, PyTorch, Scikit-learn, YOLO, OpenCV, and Computer Vision.
        Experienced in designing end-to-end ML pipelines, training deep
        learning models, performing data preprocessing and feature
        engineering, and deploying intelligent applications through
        internships and real-world projects. Passionate about leveraging
        modern AI technologies to build secure, high-performance, and
        impactful solutions that solve real-world challenges.
      </>
    ),
    projects: [
      "1️⃣ 🌐 Smart AI-Based Network Intrusion Detection System",
      "2️⃣ 🌾 RiceGuard Disease Detection System",
    ],
    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-learn",
      "YOLO",
      "OpenCV",
      "Computer Vision",
      "Deep Learning",
      "Machine Learning",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation",
      "Streamlit",
      "Scapy",
      "Packet Analysis",
      "Git",
      "GitHub",
      "Postman",
      "Linux",
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Adaptability",
    ],
    pdf: "/Hamjathali_I_AI&ML.pdf",
    pdfLabel: "Hamjathali ML Engineer Resume",
  },
};

export default function Resume() {
  const [activeResume, setActiveResume] = useState("java");
  const data = RESUME_DATA[activeResume];

  return (
    <section className="container" style={{ padding: "0px 0px" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "10px 20px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 20 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Resume Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          style={{ display: "flex", gap: 10, marginBottom: 25, flexWrap: "wrap" }}
        >
          {Object.keys(RESUME_DATA).map((key) => {
            const isActive = activeResume === key;
            return (
              <motion.button
                key={key}
                onClick={() => setActiveResume(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  border: isActive
                    ? "1px solid rgba(0,180,255,0.5)"
                    : "1px solid rgba(255,255,255,0.1)",
                  background: isActive
                    ? "linear-gradient(135deg, #00b4ff, #0080c0)"
                    : "rgba(255,255,255,0.05)",
                  color: isActive ? "#fff" : "#ccc",
                  boxShadow: isActive ? "0 0 15px rgba(0,180,255,0.3)" : "none",
                  transition: "all 0.25s ease",
                }}
              >
                {RESUME_DATA[key].label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Profile Header */}
        <motion.div
          key={activeResume}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 26, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 Hamjathali I
            </h3>
            <p style={{ margin: "6px 0", fontSize: 16, color: "#ccc" }}>
              {data.role}
            </p>
            <p style={{ margin: "4px 0", fontSize: 16, color: "#aaa" }}>
              📍Cuddalore, Tamil Nadu
            </p>
            <p style={{ margin: "4px 0", fontSize: 16, color: "#aaa" }}>
              ✉️ hamjathali39@gmail.com | 📞 +91 9486459616
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 1200,
              fontSize: 16,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc", textAlign: "justify" }}>
              {data.summary}
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.E in Computer Science and Engineering</strong> — IFET College of
              Engineering, 2022–2026 <br />
              <span style={{ color: "#aaa" }}>GPA: 8.0</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>12th Board — Sri Lakshmi Chordia Matriculation Hr. Sec. School</strong>, 2022
              <br />
              <span style={{ color: "#aaa" }}>Percentage: 74%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Board — Sri Lakshmi Chordia Matriculation Hr. Sec. School</strong>, 2020
              <br />
              <span style={{ color: "#aaa" }}>Percentage: 77%</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          key={`projects-${activeResume}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            {data.projects.map((proj) => (
              <li key={proj}>{proj}</li>
            ))}
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          key={`skills-${activeResume}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {data.skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "🏆 GeeksforGeeks", link: "https://www.geeksforgeeks.org/user/hamjath7fkv/" },
            { name: "💻 GitHub", link: "https://github.com/Hamjathali" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/hamjathali/" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          key={`pdf-${activeResume}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src={data.pdf}
            title={data.pdfLabel}
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          key={`download-${activeResume}`}
          href={data.pdf}
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download {data.label.replace(/^\S+\s/, "")} Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
