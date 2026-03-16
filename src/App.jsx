import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  BarChart3,
  Briefcase,
  Download,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Moon,
  MonitorPlay,
  Sparkles,
  Sun,
  Target,
  Trophy,
  X
} from 'lucide-react';
import profileImage from './assets/parita.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 }
};

const tools = [
  'Google Ads',
  'Meta Ads',
  'MOLOCO',
  'Jio Ads',
  'Sizmek',
  'DCM',
  'Canva',
  'Excel',
  'Google Analytics',
  'A/B Testing',
  'SQL (Beginner)',
  'Power BI'
];

const strengths = [
  {
    title: 'Campaign Execution',
    text: 'End-to-end ad campaign execution with strong delivery discipline, stakeholder coordination, and platform management.'
  },
  {
    title: 'Performance Reporting',
    text: 'Campaign monitoring, A/B testing, engagement analysis, and reporting that supports smarter optimization.'
  },
  {
    title: 'Ad Operations',
    text: 'Hands-on exposure to trackers, ad tools, delivery workflows, and multi-platform campaign operations.'
  }
];

const experience = [
  {
    role: 'Digital Ad Operations Specialist',
    company: 'Viacom18 Sports',
    period: 'Feb 2023 – Jun 2023',
    points: [
      'Managed end-to-end execution of ad campaigns for major events including WPL 2023 and IPL 2023.',
      'Worked across Jio Ads, MOLOCO, Google Ads, and Google Ad Manager to optimize delivery and engagement.',
      'Used Sizmek and DCM trackers to analyze impressions, monitor performance, and support ROI-focused testing.',
      'Worked on campaigns for brands including ITC, Rapido, IKEA, and TVS.'
    ]
  },
  {
    role: 'Digital Marketing Intern',
    company: 'Edit It Media',
    period: 'Jan 2022 – Feb 2023',
    points: [
      'Managed and scheduled social media content across multiple channels.',
      'Helped increase audience engagement through content strategy and posting optimization.',
      'Supported campaigns across YouTube, Twitter, Facebook, and Instagram.',
      'Assisted with graphics, videos, ad copy, market research, and competitor analysis.'
    ]
  }
];

const certifications = [
  'Digital Marketing Certification – DMTI',
  'Google Ads – Search & Display Certified',
  'Data Analytics Job Simulation – Forage',
  'Business Intelligence using Power BI – Skill Nation'
];

function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
}

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div className="mb-10">
      <div className="eyebrow">
        <Sparkles size={14} />
        <span>{eyebrow}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-row">
        <a href="#home" className="brand">
          Parita<span>.</span>
        </a>

        <nav className="desktop-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#tools">Tools</a>
          <a href="#certifications">Credentials</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="desktop-actions">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        <button
          type="button"
          className="menu-button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#tools" onClick={() => setOpen(false)}>Tools</a>
          <a href="#certifications" onClick={() => setOpen(false)}>Credentials</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="container hero-grid">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7 }}
        >
          <div className="hero-badge">
            <MonitorPlay size={14} />
            <span>Digital Ad Operations • Performance Marketing • Analytics</span>
          </div>

          <h1 className="hero-title">
            Parita Satam
            <br />
            <span>campaign-focused</span>
            <br />
            digital marketer.
          </h1>

          <p className="hero-copy">
            I work at the intersection of campaign execution, ad-tech platforms,
            audience engagement, and performance reporting — turning media plans
            into measurable outcomes.
          </p>

          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              View Experience
            </a>

            <a href="/Parita-Resume.pdf" download className="btn btn-secondary">
              <Download size={16} />
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="social-row">
            <a
              href="https://www.linkedin.com/in/paritasatam/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>

            <a href="mailto:paritasatam@gmail.com" className="social-link">
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <p className="stat-value">2+</p>
              <p className="stat-label">Years in digital marketing and ad operations</p>
            </div>
            <div className="stat-card">
              <p className="stat-value">WPL / IPL</p>
              <p className="stat-label">Major event campaign execution exposure</p>
            </div>
            <div className="stat-card">
              <p className="stat-value">Multi-platform</p>
              <p className="stat-label">Ad-tech, trackers, reporting, and optimization</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-shell">
            <div className="profile-card">
              <img
                src={profileImage}
                alt="Parita Satam"
                className="profile-image"
              />

              <div className="profile-mini-grid">
                <div className="mini-card">
                  <p className="mini-label">Primary Focus</p>
                  <h3>Campaign Operations</h3>
                  <p>
                    Multi-platform execution, delivery tracking, optimization,
                    and reporting.
                  </p>
                </div>

                <div className="mini-card">
                  <p className="mini-label">Strength</p>
                  <h3>Performance Thinking</h3>
                  <p>
                    Reporting, A/B testing, insights, and actionable improvement
                    recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="page-section">
      <div className="container">
        <SectionHeader
          eyebrow="About"
          title="A portfolio designed for marketing, campaign execution, and ad ops"
          copy="This design is intentionally tailored to your domain. It feels polished and premium, but stays focused on campaign execution, reporting, ad-tech tools, and performance-led work instead of adding unrelated tech sections."
        />

        <div className="card-grid three">
          {strengths.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="panel"
            >
              <div className="icon-wrap">
                {index === 0 ? (
                  <Target size={22} />
                ) : index === 1 ? (
                  <BarChart3 size={22} />
                ) : (
                  <Briefcase size={22} />
                )}
              </div>
              <h3 className="panel-title">{item.title}</h3>
              <p className="panel-copy">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="page-section">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Work that blends execution, optimization, and reporting"
          copy="A recruiter-friendly timeline focused on campaign delivery, platform exposure, and measurable contribution."
        />

        <div className="stack-list">
          {experience.map((job, index) => (
            <motion.div
              key={job.role}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="panel large"
            >
              <div className="job-top">
                <div>
                  <h3 className="job-role">{job.role}</h3>
                  <p className="job-company">{job.company}</p>
                </div>
                <div className="job-period">{job.period}</div>
              </div>

              <div className="bullet-stack">
                {job.points.map((point) => (
                  <div key={point} className="bullet-card">
                    <BadgeCheck size={18} className="bullet-icon" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section id="tools" className="page-section">
      <div className="container">
        <SectionHeader
          eyebrow="Tools & Skills"
          title="Platforms and capabilities"
          copy="A simple, focused capability section for the tools that support your campaign and reporting work."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="panel"
        >
          <div className="tool-wrap">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                className="tool-pill"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="page-section">
      <div className="container">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications and education"
          copy="A clean section that reinforces marketing credibility without overloading the page."
        />

        <div className="card-grid two">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="panel"
          >
            <div className="icon-wrap">
              <Trophy size={22} />
            </div>
            <h3 className="panel-title">Certifications</h3>

            <div className="simple-stack">
              {certifications.map((item) => (
                <div key={item} className="simple-row">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="panel"
          >
            <div className="icon-wrap">
              <GraduationCap size={22} />
            </div>
            <h3 className="panel-title">Education</h3>

            <div className="simple-stack">
              <div className="simple-row">
                <strong>Bachelor of Commerce in Accounting and Finance</strong>
                <br />
                University of Mumbai — Bhavan’s College of Arts and Commerce
                <br />
                Graduation: May 2021
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="page-section">
      <div className="container narrow">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="panel"
        >
          <SectionHeader
            eyebrow="Contact"
            title="Let’s connect"
            copy="This section stays simple so your portfolio remains clean and reliable while running locally."
          />

          <div className="card-grid two">
            <a href="mailto:paritasatam@gmail.com" className="contact-card">
              <Mail size={22} />
              <h3>Email</h3>
              <p>paritasatam@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/paritasatam/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <Linkedin size={22} />
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/paritasatam</p>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      Designed for digital marketing, campaign operations, and performance reporting.
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Experience />
      <Tools />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}