import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Instagram,
  Laptop,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Palette,
  PanelsTopLeft,
  Send,
  Smartphone,
  Sparkles,
  Sun,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { z } from "zod";

import emailjs from "@emailjs/browser";
import { toast } from "sonner";

import profilePhoto from "@/assets/profile.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Services", "services"],
  ["Contact", "contact"],
] as const;

const skillGroups = [
  { title: "Frontend Technologies", icon: Code2, skills: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Bootstrap", "JSX"] },
  { title: "UI / Web Development", icon: PanelsTopLeft, skills: ["Responsive Web Design", "Single Page Applications", "Component Architecture", "Virtual DOM", "One-Way Data Flow", "Design-to-Code", "Accessibility / a11y"] },
  { title: "State & Data", icon: Zap, skills: ["Redux", "JSON", "AJAX", "RESTful APIs", "Dynamic Data Integration"] },
  { title: "Backend Exposure", icon: Wrench, skills: ["Node.js", "Basic Spring Security Integration"] },
  { title: "Development Tools", icon: Laptop, skills: ["Git", "GitHub", "Visual Studio", "VS Code", "Windows"] },
  { title: "Professional Skills", icon: BadgeCheck, skills: ["Problem Solving", "Debugging", "Adaptability", "Team Collaboration", "Independent Execution", "Client Communication", "Cross-functional Coordination"] },
];

const experiences = [
  {
    company: "Wipro Technologies",
    role: "Senior Project Engineer",
    period: "December 2021 – May 2022",
    location: "Hyderabad",
    summary: "Delivered UI and frontend solutions for enterprise software projects using React.js and the JavaScript ecosystem.",
    points: ["Contributed to enterprise application delivery", "Applied practical React.js and JavaScript expertise", "Collaborated within large-scale project teams"],
  },
  {
    company: "Plasticon Technologies",
    role: "UI / Frontend Developer",
    period: "September 2017 – December 2021",
    location: "Hyderabad",
    summary: "Built dynamic, responsive interfaces and single-page applications across enterprise, commerce, and e-learning domains.",
    points: ["Integrated reusable interfaces with REST APIs", "Managed dynamic content and schedule-based features", "Resolved UI, cross-browser, and accessibility issues", "Partnered with UI/UX, backend, and QA teams"],
  },
];

const projects = [
  {
    number: "01",
    title: "Enterprise Survey & Module Manager",
    type: "Enterprise Management Portal",
    contribution: "Built the core interface from scratch and handled frontend integration for question-module creation.",
    tech: ["React.js", "JavaScript", "Bootstrap", "REST APIs"],
    features: ["Dynamic survey forms", "Custom survey creation", "Multi-level approvals", "Accessible workflows", "Non-technical user experience"],
    mockup: "survey",
  },
  {
    number: "02",
    title: "Toll Clothing",
    type: "E-Commerce / Shopping Application",
    contribution: "Developed responsive shopping components and integrated dynamic backend product data.",
    tech: ["React.js", "Redux", "AJAX", "JSON", "REST APIs"],
    features: ["Dynamic product catalog", "Product filtering", "Time-slot displays", "Checkout improvements", "Cross-browser fixes"],
    mockup: "commerce",
  },
  {
    number: "03",
    title: "Interactive Online Exam & Quiz Portal",
    type: "E-Learning / Assessment Application",
    contribution: "Designed intuitive test-taking screens and automated answer-submission flows.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    features: ["Timed examination UI", "Distraction-free layout", "Automated submission", "Dynamic questions", "Response logging"],
    mockup: "exam",
  },
];

const coreServices = [
  ["React.js Frontend Development", "Reusable, high-performance React applications built with modern frontend practices.", Code2],
  ["Website Development", "Responsive, user-friendly websites that work smoothly across every device.", Laptop],
  ["UI Development & Design-to-Code", "Figma, Adobe XD, or image-based designs converted into clean, semantic interfaces.", PanelsTopLeft],
  ["Responsive Web Design", "Layouts thoughtfully optimized for desktop, tablet, and mobile screens.", Smartphone],
  ["Landing Pages", "Engaging pages for businesses, products, campaigns, and personal brands.", Sparkles],
  ["E-Commerce Frontend", "Product catalogs, filtering, dynamic content, and intuitive shopping flows.", BriefcaseBusiness],
  ["API Integration", "Frontend applications connected to REST APIs for dynamic data experiences.", Zap],
  ["Maintenance & Bug Fixing", "UI, responsive-layout, browser, and accessibility issues resolved with care.", Wrench],
] as const;

const trustItems = [
  ["Professional Experience", "Enterprise, e-commerce, and e-learning interface experience.", BriefcaseBusiness],
  ["React & Frontend Expertise", "Strong practical experience across the modern frontend stack.", Code2],
  ["Responsive First", "Every interface is designed for desktop, tablet, and mobile.", Smartphone],
  ["Problem Solver", "Careful debugging, accessibility improvements, and practical solutions.", Wrench],
  ["Client-Focused", "Clear requirements, useful outcomes, and user-friendly delivery.", MessageCircle],
  ["Continuous Learner", "A growing blend of technical and creative design skills.", Sparkles],
] as const;

const projectTypes = ["Website Development", "React.js Development", "Landing Page", "E-Commerce Website", "UI Development", "Website Maintenance", "Digital Invitation", "Other"];

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  projectType: z.string().min(1, "Please choose a project type."),
  message: z.string().trim().min(10, "Please share a few more project details.").max(1200),
});

type FormErrors = Partial<Record<"name" | "email" | "projectType" | "message", string>>;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><Sparkles aria-hidden="true" />{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

function ThemeToggle({ theme, onToggle }: { theme: "light" | "dark"; onToggle: () => void }) {
  return (
    <Button variant="ghost" size="icon" className="nav-icon" onClick={onToggle} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
      {theme === "light" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
    </Button>
  );
}

function Navbar({ theme, onToggle }: { theme: "light" | "dark"; onToggle: () => void }) {
  const [open, setOpen] = useState(false);
  const goTo = (id: string) => { setOpen(false); scrollToSection(id); };

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <button className="brand" onClick={() => goTo("home")} aria-label="Go to home">
          <span className="brand-mark" aria-hidden="true">PV</span>
          <span><strong>Vidyullatha</strong><small>UI / Frontend Developer</small></span>
        </button>
        <div className="desktop-nav">
          {navItems.map(([label, id]) => <button key={id} onClick={() => goTo(id)}>{label}</button>)}
        </div>
        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <Button className="desktop-cta" onClick={() => goTo("contact")}>Let&apos;s Work Together <ArrowRight aria-hidden="true" /></Button>
          <Button variant="ghost" size="icon" className="nav-icon mobile-menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </nav>
      {open ? (
        <div id="mobile-navigation" className="mobile-nav">
          {navItems.map(([label, id]) => <button key={id} onClick={() => goTo(id)}>{label}<ChevronRight aria-hidden="true" /></button>)}
          <Button onClick={() => goTo("contact")}>Let&apos;s Work Together</Button>
        </div>
      ) : null}
    </header>
  );
}

function ProfileVisual() {
  return (
    <div className="profile-stage">
      <span className="floating-tag tag-code">&lt;React /&gt;</span>
      <span className="floating-tag tag-design">Design → Code</span>
      <div className="profile-frame">
        <div className="profile-arch">
          <img src={profilePhoto} width={1265} height={1599} alt="Parigi Vijaya Vidyullatha, UI and frontend developer based in Hyderabad" />
        </div>
        <div className="photo-label"><span>Parigi Vijaya Vidyullatha</span><small>Hyderabad, India</small></div>
      </div>
      <div className="experience-float"><strong>4+</strong><span>Years in<br />UI / Frontend</span></div>
    </div>
  );
}


function Hero() {
  return (
    <section id="home" className="hero-section section-anchor">
      <div className="hero-grid page-shell">
        <div className="hero-copy">
          <p className="availability"><span aria-hidden="true" />Available for freelance projects</p>
          <h1>Hi, I&apos;m <span className="gradient-text">Vidyullatha</span><br />UI &amp; Frontend Developer</h1>
          <p className="hero-lead">I build responsive, interactive and user-friendly web experiences with React.js and modern frontend technologies.</p>
          <p className="hero-freelance">Available for freelance website development, frontend solutions and creative digital design projects.</p>
          <div className="hero-actions">
            <Button size="lg" onClick={() => scrollToSection("projects")}>View My Work <ArrowRight aria-hidden="true" /></Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>Let&apos;s Work Together</Button>
            <Button size="lg" variant="ghost" onClick={() => window.alert("Vidyullatha’s CV will be available here soon.")}>Download CV <Download aria-hidden="true" /></Button>
          </div>
          <div className="hero-proof" aria-label="Professional highlights">
            <span><strong>React.js</strong> specialist</span>
            <span><strong>Hyderabad</strong> based</span>
            <span><strong>Freelance</strong> ready</span>
          </div>
        </div>
        <ProfileVisual />
      </div>
      <div className="scroll-cue" aria-hidden="true"><span />Scroll to explore</div>
    </section>
  );
}

function About() {
  const stats = [["4+", "Years UI / Frontend Experience"], ["React", "Specialist"], ["3+", "Professional Project Domains"], ["Open", "To Freelance Projects"]];
  return (
    <section id="about" className="section-block section-anchor">
      <div className="page-shell about-grid">
        <div>
          <SectionHeading eyebrow="About me" title="Enterprise experience. Creative ambition." />
          <div className="about-copy">
            <p>I&apos;m a UI / Frontend Developer with professional experience creating dynamic, responsive web applications for enterprise management, e-commerce, and online assessment platforms.</p>
            <p>My work combines React.js, JavaScript, HTML5, CSS3, Bootstrap, and REST API integration to turn complex requirements and visual designs into practical digital experiences.</p>
            <p>Today, I&apos;m building toward an independent freelance career—helping businesses and individuals launch thoughtful websites while expanding my creative work in digital invitations and visual design.</p>
          </div>
          <Button variant="outline" onClick={() => scrollToSection("contact")}>Start a conversation <ArrowRight aria-hidden="true" /></Button>
        </div>
        <div className="stats-grid">
          {stats.map(([value, label], index) => <div className={`stat-card stat-${index + 1}`} key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-block section-muted section-anchor">
      <div className="page-shell">
        <SectionHeading eyebrow="Skills & expertise" title="A practical frontend toolkit" copy="Technology, design thinking, and collaborative skills developed through real product work." />
        <div className="skills-grid">
          {skillGroups.map(({ title, icon: Icon, skills }) => <article className="skill-card" key={title}><div className="icon-box"><Icon aria-hidden="true" /></div><h3>{title}</h3><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-block section-anchor">
      <div className="page-shell">
        <SectionHeading eyebrow="Professional experience" title="Built in real product teams" copy="A chronological view of the roles that shaped my frontend practice." />
        <div className="timeline">
          {experiences.map((item, index) => <article className="timeline-item" key={item.company}><div className="timeline-year">{index === 0 ? "2021—22" : "2017—21"}</div><div className="timeline-dot" aria-hidden="true" /><div className="timeline-content"><div className="timeline-top"><div><p className="role-label">{item.role}</p><h3>{item.company}</h3></div><div className="timeline-meta"><span>{item.period}</span><span><MapPin aria-hidden="true" />{item.location}</span></div></div><p>{item.summary}</p><ul>{item.points.map((point) => <li key={point}><Check aria-hidden="true" />{point}</li>)}</ul></div></article>)}
        </div>
      </div>
    </section>
  );
}

function ProjectMockup({ type }: { type: string }) {
  if (type === "commerce") return <div className="project-mockup commerce-mockup" aria-hidden="true"><div className="mock-nav"><i /><i /><i /></div><div className="product-grid"><span /><span /><span /></div><div className="mock-lines"><i /><i /></div></div>;
  if (type === "exam") return <div className="project-mockup exam-mockup" aria-hidden="true"><div className="exam-head"><span>18:24</span><i /></div><div className="question-line" /><div className="answer-list"><i /><i /><i /><i /></div><div className="exam-footer"><span /><span /></div></div>;
  return <div className="project-mockup survey-mockup" aria-hidden="true"><div className="mock-sidebar"><i /><i /><i /><i /></div><div className="survey-body"><div className="mock-lines"><i /><i /></div><div className="survey-card"><span /><span /><span /></div><div className="survey-card short"><span /><span /></div></div></div>;
}

function Projects() {
  return (
    <section id="projects" className="section-block section-dark section-anchor">
      <div className="page-shell">
        <SectionHeading eyebrow="Professional experience projects" title="Interfaces designed for real-world complexity" copy="Generic representations are shown to respect employer and client confidentiality." />
        <div className="projects-stack">
          {projects.map((project) => <article className="project-card" key={project.number}><div className="project-visual"><span className="project-number">{project.number}</span><ProjectMockup type={project.mockup} /></div><div className="project-details"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.contribution}</p><div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><ul>{project.features.map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}</ul><Button variant="outline" disabled>Case study coming soon</Button></div></article>)}
        </div>
        <div className="inline-cta"><div><p>Have a complex interface in mind?</p><h3>Let&apos;s turn it into a clear digital experience.</h3></div><Button onClick={() => scrollToSection("contact")}>Start a Project <ArrowRight aria-hidden="true" /></Button></div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-block section-anchor">
      <div className="page-shell">
        <SectionHeading eyebrow="Freelance services" title="How I can help your business" copy="From focused landing pages to dynamic React interfaces, each service is shaped around useful, maintainable outcomes." />
        <div className="services-grid">
          {coreServices.map(([title, copy, Icon], index) => <article className="service-card" key={title}><span className="service-index">0{index + 1}</span><Icon aria-hidden="true" /><h3>{title}</h3><p>{copy}</p><button onClick={() => scrollToSection("contact")} aria-label={`Ask about ${title}`}>Ask about this service <ArrowRight aria-hidden="true" /></button></article>)}
        </div>
        <div className="creative-service"><div className="creative-icon"><Palette aria-hidden="true" /></div><div><p className="eyebrow">Creative design service</p><h3>Digital Invitations &amp; Promotional Banners</h3><p>Distinct from my core development work, I&apos;m growing a creative practice for weddings, birthdays, engagements, anniversaries, corporate events, social graphics, and special occasions.</p></div><Button variant="outline" onClick={() => scrollToSection("creative")}>Explore Creative Work</Button></div>
      </div>
    </section>
  );
}

function CreativeWork() {
  const items = ["Wedding invitations", "Engagement invitations", "Birthday invitations", "Corporate invitations", "Digital banners", "Social media graphics"];
  return (
    <section id="creative" className="section-block creative-section section-anchor">
      <div className="page-shell">
        <SectionHeading eyebrow="Beyond code" title="Creative design, coming into focus" copy="I’m expanding my creative portfolio through digital invitations, event designs, and promotional graphics." />
        <div className="creative-gallery">{items.map((item, index) => <article className={`creative-tile tile-${index + 1}`} key={item}><div className="tile-art" aria-hidden="true"><Sparkles /><span>{String(index + 1).padStart(2, "0")}</span></div><div><h3>{item}</h3><p>Coming Soon</p></div></article>)}</div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section-block section-muted" aria-labelledby="education-title">
      <div className="page-shell education-layout">
        <div><p className="eyebrow"><GraduationCap aria-hidden="true" />Education</p><h2 id="education-title">A foundation in computer science &amp; web technology</h2></div>
        <div className="education-list">
          <article><span>2014 — 2017</span><div><h3>Master of Technology</h3><p>Computer Science &amp; Engineering</p><small>Specialization: Web Technologies · Institution to be confirmed from final CV</small></div></article>
          <article><span>2010 — 2014</span><div><h3>Bachelor of Technology</h3><p>Computer Science &amp; Engineering</p><small>Pujya Shri Madavanji College · Affiliated to JNTUH</small></div></article>
        </div>
      </div>
    </section>
  );
}

function WhyMe() {
  return (
    <section className="section-block section-dark" aria-labelledby="why-title">
      <div className="page-shell">
        <div className="why-heading"><div><p className="eyebrow"><Sparkles aria-hidden="true" />Why work with me</p><h2 id="why-title">Professional thinking, personal attention.</h2></div><p>A thoughtful blend of product experience, practical frontend skills, and the care of an independent creative partner.</p></div>
        <div className="trust-grid">{trustItems.map(([title, copy, Icon]) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <div className="why-cta"><h3>Have a website idea? Let&apos;s build it together.</h3><Button onClick={() => scrollToSection("contact")}>Hire Me <ArrowRight aria-hidden="true" /></Button></div>
      </div>
    </section>
  );
}

const EMAILJS_SERVICE_ID = "service_v7rnvu5";
const EMAILJS_TEMPLATE_ID = "template_crq18rs";
const EMAILJS_PUBLIC_KEY = "JZST6oOyysup7sF7O";

function ContactForm() {
  const [projectType, setProjectType] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const result = inquirySchema.safeParse({ name: form.get("name"), email: form.get("email"), projectType, message: form.get("message") });
    if (!result.success) {
      const nextErrors: FormErrors = {};
      result.error.issues.forEach((issue) => { const key = issue.path[0] as keyof FormErrors; if (!nextErrors[key]) nextErrors[key] = issue.message; });
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: result.data.name,
          from_name: result.data.name,
          email: result.data.email,
          reply_to: result.data.email,
          project_type: result.data.projectType,
          message: result.data.message,
          title: `${result.data.projectType} inquiry from ${result.data.name}`,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      toast.success("Thank you! Your message has been sent.");
      formElement.reset();
      setProjectType("");
    } catch {
      toast.error("Message could not be sent. Please email pvvidyullatha1991@gmail.com directly.");
    } finally {
      setSending(false);
    }
  };


  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <div className="field"><Label htmlFor="name">Name</Label><Input id="name" name="name" autoComplete="name" maxLength={100} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} placeholder="Your name" />{errors.name ? <p id="name-error" className="field-error">{errors.name}</p> : null}</div>
        <div className="field"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" autoComplete="email" maxLength={255} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} placeholder="you@example.com" />{errors.email ? <p id="email-error" className="field-error">{errors.email}</p> : null}</div>
      </div>
      <div className="field"><Label htmlFor="project-type">Project Type</Label><Select value={projectType} onValueChange={setProjectType}><SelectTrigger id="project-type" aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? "project-type-error" : undefined}><SelectValue placeholder="Choose a service" /></SelectTrigger><SelectContent>{projectTypes.map((type) => <SelectItem value={type} key={type}>{type}</SelectItem>)}</SelectContent></Select>{errors.projectType ? <p id="project-type-error" className="field-error">{errors.projectType}</p> : null}</div>
      <div className="field"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" rows={6} maxLength={1200} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} placeholder="Tell me about your goals, timeline, and what you need help with." />{errors.message ? <p id="message-error" className="field-error">{errors.message}</p> : null}</div>
      <Button type="submit" size="lg" disabled={sending}>{sending ? "Sending…" : "Send Message"} <Send aria-hidden="true" /></Button>
      <p className="form-note">Your message is delivered straight to my inbox — I usually reply within a day.</p>
    </form>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-block contact-section section-anchor">
      <div className="page-shell contact-grid">
        <div className="contact-copy">
          <p className="eyebrow"><MessageCircle aria-hidden="true" />Get in touch</p><h2>Let&apos;s build something great together.</h2><p>Have a website, frontend, or digital design project in mind? I&apos;d love to hear about it.</p>
          <div className="contact-links">
            <a href="mailto:pvvidyullatha1991@gmail.com"><span><Mail aria-hidden="true" /></span><div><small>Email</small><strong>pvvidyullatha1991@gmail.com</strong></div><ExternalLink aria-hidden="true" /></a>
            <a href="https://wa.me/917382448733?text=Hello%20Vidyullatha%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer"><span><MessageCircle aria-hidden="true" /></span><div><small>Phone / WhatsApp</small><strong>+91 7382448733</strong></div><ExternalLink aria-hidden="true" /></a>
            <div className="location-row"><span><MapPin aria-hidden="true" /></span><div><small>Based in</small><strong>Hyderabad, Telangana, India</strong></div></div>
          </div>
          <div className="social-soon" aria-label="Future social profiles"><button disabled aria-label="LinkedIn coming soon"><Linkedin aria-hidden="true" /></button><button disabled aria-label="GitHub coming soon"><Github aria-hidden="true" /></button><button disabled aria-label="Instagram coming soon"><Instagram aria-hidden="true" /></button><span>Social profiles coming soon</span></div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main"><div><div className="footer-brand"><span className="brand-mark" aria-hidden="true">PV</span><span><strong>Parigi Vijaya Vidyullatha</strong><small>UI / Frontend Developer · Freelance Web Developer</small></span></div><p>Building responsive digital experiences with code and creativity.</p></div><nav aria-label="Footer navigation">{navItems.map(([label, id]) => <button onClick={() => scrollToSection(id)} key={id}>{label}</button>)}</nav></div>
      <div className="page-shell footer-bottom"><span>© 2026 Parigi Vijaya Vidyullatha. All rights reserved.</span><button onClick={() => scrollToSection("home")}>Back to top ↑</button></div>
    </footer>
  );
}

export function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const saved = window.localStorage.getItem("pv-theme");
    const initial = saved === "dark" || saved === "light" ? saved : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("pv-theme", next);
  };
  return <><Navbar theme={theme} onToggle={toggleTheme} /><Hero /><About /><Skills /><Experience /><Projects /><Services /><CreativeWork /><Education /><WhyMe /><Contact /><Footer /><Toaster position="top-center" richColors /></>;
}
