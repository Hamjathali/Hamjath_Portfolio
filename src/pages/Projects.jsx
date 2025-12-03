import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🌐 Smart AI-Based Network Intrusion Detection System',
    desc: 'AI-Powered Smart Network Intrusion Detection System with Deep-Learning Packet Analysis and Automated Threat Blocking that captures live network traffic, analyzes packets using deep-learning models, and instantly blocks malicious activities in real time.',
    ss: '/Project_Logo/SNIDS_LOGO.png',
    tech: ['Python', 'Scapy', 'TensorFlow', 'Keras', 'Streamlit','iptables'],
    live: 'https://smart-nids-hrekv59nidzorjqsshgtqt.streamlit.app/',
    code: 'https://github.com/Hamjathali/Smart-NIDS.git'
  },
  {
    title: '🌾 RiceGuard Disease Detection System',
    desc: 'A YOLOv12-based detection system that identifies rice leaf diseases with high accuracy in real time, helping farmers take timely action to prevent large-scale crop loss, while providing quick visual insights that support smarter and more efficient agricultural decision-making.',
    ss: '/Project_Logo/RiceGuard_Logo.png',
    tech: ['YOLOv12', 'Python', 'Streamlit', 'PyTorch', 'OpenCV', 'NumPy', 'Pandas'],
    live: 'https://riceguarddiseaseproject-b3fvupt3ham7rhekhgwqpe.streamlit.app',
    code: 'https://github.com/Hamjathali/RiceGuard_Disease_Project.git'
  },
  {
    title: '🎓 Student Management System',
    desc: 'A Java full-stack system built with Spring Boot, REST APIs and React for easy student data entry and management. Backend is powered by PostgreSQL for reliable and scalable data storage. The application ensures smooth performance with secure CRUD operations and a modern, user-friendly interface.',
    ss: '/Project_Logo/Student_Logo.png',
    tech: ['React', 'Spring Boot', 'Java', 'REST API', 'PostgreSQL', 'Maven'],
    live: '#',
    code: 'https://github.com/Hamjathali/C2TC_Sprint-2_Project.git'
  },
  {
    title: 'Q96 - Investment Tracker',
    desc: 'Q96 – Investment Tracker helps to predict future returns, and plan financial goals easily. it gives smart SIP suggestions and clear visual insights for better decisions.',
    ss: '/Project_Logo/Investment_Logo.png',
    tech: ['Python', 'NumPy', 'Scikit-learn','Streamlit'],
    live: 'https://q96investmenttracker-gyejqgn9x4zreuqzxhkmp3.streamlit.app',
    code: 'https://github.com/Hamjathali/Q96_Investment_Tracker.git'
  },
  {
    title: '📊 Portfolio Website',
    desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
    ss: '/Project_Logo/Portfolio_Logo.png',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    live: '#',
    code: 'https://github.com/kunj2803/Kunj-Portfolio'
  },
  {
    title: '🗣️ Language Translation Tool',
    desc: 'A real-time Streamlit translation tool using Googletrans for fast multilingual text conversion, featuring online/offline speech playback and a polished user interface.',
    ss: '/Project_Logo/Language_Logo.png',
    tech: ['Streamlit', 'Python','Googletrans API', 'gTTS', ],
    live: 'https://language-translation-tool-tyht3gjczbxxd2dbdbwm4.streamlit.app',
    code: 'https://github.com/Hamjathali/codealpha_tasks-Language-Translation-Tool.git'
  },
  {
    title: '🎓 IFET College InfoBot',
    desc: "An AI-powered InfoBot that gives instant answers to college-related queries using smart NLP and text similarity. Designed with Streamlit UI for a smooth, conversational experience.",
    ss: '/Project_Logo/InfoBot_Logo.png',
    tech: ['Python', 'Streamlit', 'NLTK', 'Scikit-learn',],
    live: 'https://codealphatasksifet-infobot-g4rqbg3hl7aamvlt9rlvbk.streamlit.app',
    code: 'https://github.com/Hamjathali/codealpha_tasks_IFET-InfoBot.git'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 10 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6, textAlign: 'justify' }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  {/* Code Button */}
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  {/* Live Button */}
                  {p.live === '#' ? (
                    <motion.a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault(); // prevent page reload/404
                        window.scrollTo({ top: 0, behavior: 'smooth' }); // optional: scroll to top
                      }}
                      whileHover={{ scale: 1.08 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                        color: '#fff',
                        padding: '6px 12px',
                        borderRadius: 8,
                        fontSize: 13,
                        textDecoration: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <ExternalLink size={14} /> Live
                    </motion.a>
                  ) : (
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.08 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                        color: '#fff',
                        padding: '6px 12px',
                        borderRadius: 8,
                        fontSize: 13,
                        textDecoration: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <ExternalLink size={14} /> Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
