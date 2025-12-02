import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Certificates data (added URLs for View button)
const CERTS = {
  tech: [
    {
      title: " Python Essentials 1",
      org: "Cisco ",
      date: " Dec 2023",
      img: "/certs/PYTHON_ESSENTIAL_1_COMPLETION_CERTIFICATE.png",
      link: "/certs/PYTHON_ESSENTIAL_1_COMPLETION_CERTIFICATE.png",
    },
    {
      title: "Python Essentials 2",
      org: "Cisco",
      date: "Jan 2024",
      img: "/certs/Python_Essentials_2_certificate-1.png",
      link: "/certs/Python_Essentials_2_certificate-1.png",
    },
    {
      title: "Java Course Completion",
      org: "Udemy",
      date: "Aug 2025",
      img: "/certs/Java_Completion_Cer.jpeg",
      link: "/certs/Java_Completion_Cer.jpeg",
    },
    {
      title: " CCNA: Introduction to Networks",
      org: "Cisco",
      date: "Jul 2024",
      img: "/certs/CCNA_PART_1_COMPLETION_CERTIFICATE.png",
      link: "/certs/CCNA_PART_1_COMPLETION_CERTIFICATE.png",
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      org: "Cisco",
      date: "June 2025",
      img: "/certs/CCNA_PART_2_COMPLETION_CERTIFICATE.png",
      link: "/certs/CCNA_PART_2_COMPLETION_CERTIFICATE.png",
    },
    {
      title: "CCNA: Enterprise Networking, Security, and Automation",
      org: "Cisco",
      date: "July 2025",
      img: "/certs/CCNA_PART_3_COMPLETION_CERTIFICATE.png",
      link: "/certs/CCNA_PART_3_COMPLETION_CERTIFICATE.png",
    },
    {
      title: "Code Relay",
      org: "IFET College of Engineering",
      date: "Mar 2025",
      img: "/certs/Code_Relay_Cert.jpeg",
      link: "/certs/Code_Relay_Cert.jpeg",
    },
  ],
  other: [
    {
      title: "Project EXPO 2025",
      org: "IFET College of Engineering",
      date: "Feb 2025",
      img: "/certs/Project_EXPO_2025.jpeg",
      link: "/certs/Project_EXPO_2025.jpeg",
    },
    {
      title: "Silver Jubilee Competition",
      org: "IFET College of Engineering",
      date: "Apr 2024",
      img: "/certs/Silver_Jubilee_Competition.jpeg",
      link: "/certs/Silver_Jubilee_Competition.jpeg",
    },
    {
      title: "TechShowCase-2k24",
      org: "IFET College of Engineering",
      date: "Apr 2024",
      img: "/certs/TechShowCase.jpeg",
      link: "/certs/TechShowCase.jpeg",
    },
    {
      title: "Paper Presentation",
      org: "Velammal Engineering College",
      date: "Feb 2024",
      img: "/certs/Paper_Presentation.jpeg",
      link: "/certs/Paper_Presentation.jpeg",
    },
    {
      title: "Cognebula 24",
      org: "Velammal Engineering College",
      date: "Feb 2025",
      img: "/certs/Cognebula_24.jpeg",
      link: "/certs/Cognebula_24.jpeg",
    },
    {
      title: "Project EXPO 2023",
      org: "IFET College of Engineering",
      date: "June 2023",
      img: "/certs/Project_EXPO_2023.jpeg",
      link: "/certs/Project_EXPO_2023.jpeg",
    },
  ],
  Internship: [
    {
      title: " Frontend Web Development ",
      org: "Simplzone",
      date: "June 2024 - July 2024",
      img: "/certs/Web_Intern_Cer.jpeg",
      link: "/certs/Web_Intern_Cer.jpeg",
    },
    {
      title: "  Test Engineer Intern ",
      org: "Simplzone",
      date: "Dec 2024 - Jan 2025",
      img: "/certs/Hamjathali_TEST_ENGINEER.png",
      link: "/certs/Hamjathali_TEST_ENGINEER.png",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "Internship", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech": t === "other"
                ? "Others": "Internship"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
