import React, { useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight, Github, Linkedin, Mail, Phone, Menu, X,
  Database, Server, Code2, Activity, Layers, ExternalLink, Send, Upload
} from "lucide-react";
import "./styles.css";

const EMAIL = "adityasuruse99@gmail.com";
const PHONE = "+919579104754";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const skills = {
  Development: ["Java","Spring Boot","Spring","Hibernate","JDBC","REST APIs","React","JavaScript","HTML5","CSS3"],
  Database: ["Oracle 10g/11g/12c/21c","MySQL","SQL","PL/SQL","Supabase"],
  Support: ["Linux","Unix","Windows","Control-M","ServiceNow","Jira","PuTTY","Shell Scripting"],
  Tools: ["Git","GitHub","Maven","Eclipse","VS Code","Postman","Splunk","Kibana","AppDynamics","Dynatrace"]
};

const projects = [
  { no:"01", type:"PRODUCTION SUPPORT • INVESTMENT BANKING", title:"Asset Management System", icon:<Activity size={22}/>, description:"L1/L2 support for Cash Flow, Bond Underwriting and Asset-Based Lending modules, including issue analysis, Java/Spring/Hibernate troubleshooting, Oracle validation, log monitoring, deployments, performance monitoring and RCA.", tags:["Java","Spring Boot","Hibernate","Oracle","Linux","Splunk/Kibana"] },
  { no:"02", type:"JAVA • DATABASE", title:"Library Management System", icon:<Database size={22}/>, description:"Java and MySQL application implementing complete CRUD operations with JDBC, OOP principles and database schema integration.", tags:["Java","MySQL","JDBC","OOP","CRUD"] },
  { no:"03", type:"JAVA • MYSQL", title:"Java CRUD Application", icon:<Code2 size={22}/>, description:"Java application integrated with MySQL, applying OOP concepts and complete CRUD functionality for data handling.", tags:["Java","MySQL","OOP","CRUD"] },
  { no:"04", type:"FRONTEND", title:"College Visit Web Application", icon:<Layers size={22}/>, description:"Responsive web application built with HTML, CSS and JavaScript with dynamic UI components to improve user interaction.", tags:["HTML","CSS","JavaScript"] }
];

function App() {
  const [open, setOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [image, setImage] = useState(null);
  const fileRef = useRef(null);

  const go = id => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
  };

  const uploadImage = e => {
    const file = e.target.files?.[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return <div className="app">
    <header className="navbar">
      <button className="logo" onClick={() => go("home")}>AS<span>.</span></button>
      <button className="menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {["home","about","skills","experience","projects","contact"].map(x =>
          <button key={x} onClick={() => go(x)}>{x}</button>
        )}
      </nav>
    </header>

    <main>
      <section id="home" className="hero container">
        <div className="hero-copy">
          <div className="avatar-wrap">
            <div className="avatar">
              <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Aditya Suruse" />
             </div>
          </div>
          <p className="eyebrow">APPLICATION SUPPORT • JAVA FULL STACK</p>
          <h1>Aditya <span>Suruse</span></h1>
          <h2>Application Support Engineer & Java Full Stack Developer</h2>
          <p className="lead">I build reliable applications and support business-critical production systems, combining Java/Spring development with SQL, Linux, monitoring, incident management and troubleshooting.</p>
          <div className="actions">
            <button className="btn primary" onClick={() => go("projects")}>View Projects <ArrowUpRight size={17}/></button>
            <button className="btn ghost" onClick={() => go("contact")}>Contact Me</button>
            <button className="btn ghost" onClick={() => setEmailOpen(true)}><Mail size={17}/> Email Me</button>
          </div>
          <div className="socials">
            <button onClick={() => setEmailOpen(true)}><Mail size={17}/> Email</button>
            <a href="https://github.com/AdityaSuruse" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ExternalLink size={13}/></a>
            <a href="https://linkedin.com/in/aadupatil3282" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ExternalLink size={13}/></a>
          </div>
        </div>

        <div className="profile-card">
          <div className="pulse"></div>
          <p className="muted">CURRENTLY FOCUSED ON</p>
          <h3>Production Reliability + Full Stack Engineering</h3>
          <div className="stats">
            <div><b>1.5+</b><small>Years Support</small></div>
            <div><b>Java</b><small>Backend</small></div>
            <div><b>SQL</b><small>Troubleshooting</small></div>
            <div><b>Linux</b><small>Operations</small></div>
          </div>
          <button className="card-action" onClick={() => go("experience")}>View Experience <ArrowUpRight size={16}/></button>
        </div>
      </section>

      <section id="about" className="section container">
        <SectionTitle number="01" title="Two strengths, one profile."/>
        <div className="two-col">
          <article className="card"><Server className="icon"/><h3>Application Support</h3><p>L1/L2 production support, incident and change handling, SQL troubleshooting, Linux/Unix log analysis, Control-M batch monitoring, deployment validation, RCA, SLA tracking and cross-team collaboration.</p><button className="text-action" onClick={() => go("experience")}>See support experience <ArrowUpRight size={15}/></button></article>
          <article className="card"><Code2 className="icon"/><h3>Java Full Stack</h3><p>Core Java, OOP, Spring Boot, Hibernate, JDBC, REST APIs, MySQL, HTML, CSS, JavaScript and React, with hands-on CRUD and web application projects.</p><button className="text-action" onClick={() => go("projects")}>See development projects <ArrowUpRight size={15}/></button></article>
        </div>
      </section>

      <section id="skills" className="section container">
        <SectionTitle number="02" title="Technical toolkit"/>
        <div className="skills-grid">
          {Object.entries(skills).map(([name,list]) =>
            <article className="card skill-card" key={name}><h3>{name}</h3><div className="tags">{list.map(x=><span key={x}>{x}</span>)}</div><button className="text-action" onClick={() => setEmailOpen(true)}>Ask about my skills <Mail size={15}/></button></article>
          )}
        </div>
      </section>

      <section id="experience" className="section container">
        <SectionTitle number="03" title="Production support experience"/>
        <article className="experience card">
          <div className="role-head"><div><h3>Application Support Engineer</h3><p>NGENIX BYTE THRILLER SOLUTION PVT LTD</p></div><span>2025 — Present</span></div>
          <ul>
            <li>Provide L1 support for mission-critical production applications.</li>
            <li>Perform SQL validation, debugging, troubleshooting and reporting.</li>
            <li>Analyze Linux/Unix logs and monitor application/system health.</li>
            <li>Monitor and manage batch jobs using Control-M.</li>
            <li>Handle incidents, service requests and changes through ServiceNow and Jira.</li>
            <li>Conduct RCA, support deployments, post-release validation and SLA compliance.</li>
            <li>Collaborate with development, infrastructure, L3 teams and business users.</li>
          </ul>
          <div className="actions"><button className="btn primary" onClick={() => setEmailOpen(true)}>Discuss an Opportunity <Mail size={16}/></button><button className="btn ghost" onClick={() => go("projects")}>View Domain Projects <ArrowUpRight size={16}/></button></div>
        </article>
      </section>

      <section id="projects" className="section container">
        <SectionTitle number="04" title="Projects & domain experience"/>
        <div className="projects">
          {projects.map((p,i) =>
            <article className={i===0 ? "project featured" : "project"} key={p.title}>
              <div className="project-top"><span>{p.no}</span>{p.icon}</div>
              <p className="type">{p.type}</p><h3>{p.title}</h3><p>{p.description}</p>
              <div className="tags">{p.tags.map(x=><span key={x}>{x}</span>)}</div>
              <div className="project-actions">
                <button className="text-action" onClick={() => setEmailOpen(true)}>Ask about project <Mail size={15}/></button>
                <button className="text-action" onClick={() => go("contact")}>Contact <ArrowUpRight size={15}/></button>
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="section container">
        <SectionTitle number="05" title="Education & achievement"/>
        <div className="two-col">
          <article className="card"><h3>Bachelor of Computer Applications (BCA)</h3><p>Badrinarayan Barwale Mahavidyalaya, Jalna</p><span className="muted">2023 — 2026</span><button className="text-action" onClick={() => setEmailOpen(true)}>Contact me <Mail size={15}/></button></article>
          <article className="card"><h3>State-Level Kabaddi Tournament</h3><p>Best Player in Team</p><span className="muted">Achievement</span><button className="text-action" onClick={() => setEmailOpen(true)}>Get in touch <Mail size={15}/></button></article>
        </div>
      </section>

      <section id="contact" className="section container contact">
        <div className="contact-box">
          <p className="eyebrow">06 — CONTACT</p>
          <h2>Let's build, support and improve reliable software.</h2>
          <p>Open to Application Support, Production Support, Java Backend and Full Stack opportunities.</p>
          <div className="actions center">
            <button className="btn primary" onClick={() => setEmailOpen(true)}><Mail size={17}/> Send Message</button>
            <a className="btn ghost" href={`tel:${PHONE}`}><Phone size={17}/> Call +91 95791 04754</a>
            <a className="btn ghost" href="https://github.com/AdityaSuruse" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            <a className="btn ghost" href="https://linkedin.com/in/aadupatil3282" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
    <footer>© {new Date().getFullYear()} Aditya Suruse · React Portfolio</footer>
    {emailOpen && <EmailModal onClose={() => setEmailOpen(false)}/>}
  </div>;
}

function SectionTitle({number,title}) {
  return <div className="section-title"><p className="eyebrow">{number} —</p><h2>{title}</h2></div>;
}

function EmailModal({onClose}) {
  const [form,setForm] = useState({name:"",email:"",subject:"",message:""});
  const [status,setStatus] = useState("");
  const [sending,setSending] = useState(false);

  const update = e => setForm({...form,[e.target.name]:e.target.value});

  const send = async e => {
    e.preventDefault();
    setStatus("");
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus("Email service is not configured yet. Add the EmailJS values in the .env file.");
      return;
    }
    try {
      setSending(true);
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: EMAIL,
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "Portfolio Opportunity",
          message: form.message,
          reply_to: form.email
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setForm({name:"",email:"",subject:"",message:""});
    } catch (err) {
      console.error(err);
      setStatus("Unable to send right now. Check your EmailJS settings and template variables.");
    } finally {
      setSending(false);
    }
  };

  return <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <div className="modal">
      <button className="close" onClick={onClose}><X/></button>
      <p className="eyebrow">SEND A MESSAGE</p>
      <h2>Contact Aditya</h2>
      <p className="muted">Send a message directly from the portfolio to <strong>{EMAIL}</strong>.</p>
      <form onSubmit={send}>
        <label>Your Name<input required name="name" value={form.name} onChange={update} placeholder="Your name"/></label>
        <label>Your Email<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com"/></label>
        <label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="Job opportunity / Project inquiry"/></label>
        <label>Message<textarea required name="message" rows="5" value={form.message} onChange={update} placeholder="Write your message..."/></label>
        <button className="btn primary send" disabled={sending}>{sending ? "Sending..." : <><Send size={17}/> Send Message</>}</button>
        {status === "success" && <div className="success">✓ Message sent successfully.</div>}
        {status && status !== "success" && <div className="error">{status}</div>}
      </form>
    </div>
  </div>;
}

createRoot(document.getElementById("root")).render(<App/>);
