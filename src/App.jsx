import React, { useState } from "react";
import {
  ArrowRight, Check, Code2, ShoppingCart, Smartphone, Database,
  Search, Gauge, ShieldCheck, Sparkles, Menu, X, MessageCircle,
  Mail, ChevronDown, ExternalLink
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Business Websites",
    text: "Fast, responsive websites designed around your brand, customers and business goals.",
    bullets: ["React + Vite", "Mobile-first", "SEO-ready"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    text: "Product catalogues, enquiry flows, checkout integrations and scalable online stores.",
    bullets: ["Product pages", "Payment integration", "Order workflows"]
  },
  {
    icon: Database,
    title: "Web Applications",
    text: "Custom dashboards, portals, booking systems and internal tools built around your workflow.",
    bullets: ["Custom UI", "REST APIs", "Database integration"]
  },
  {
    icon: Smartphone,
    title: "Mobile Experiences",
    text: "Responsive experiences that feel polished on phones, tablets and desktops.",
    bullets: ["Responsive UI", "PWA-ready", "Performance focused"]
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    text: "Technical foundations that improve loading speed, discoverability and usability.",
    bullets: ["Core Web Vitals", "Metadata", "Clean URLs"]
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Hosting",
    text: "Post-launch support, content updates, deployment and basic monitoring.",
    bullets: ["Deployments", "Bug fixes", "Updates"]
  }
];

const process = [
  ["01", "Discover", "We understand your business, audience, content and goals before building."],
  ["02", "Plan & Design", "We turn the idea into a clean structure, visual direction and responsive layout."],
  ["03", "Build", "Development happens in focused stages with previews so you can review progress."],
  ["04", "Launch & Support", "We deploy, connect your domain and help keep the website updated."]
];

const faqs = [
  ["Do I need to buy hosting?", "Not necessarily. We can deploy a suitable project to platforms such as Netlify and connect your own domain."],
  ["Can you connect my existing domain?", "Yes. Your domain can remain with your registrar while DNS is connected to the hosting provider."],
  ["Can I update the website later?", "Yes. We can build the project so content and sections are easy to maintain, and ongoing maintenance can be added."],
  ["Do you build only React websites?", "React is one of our preferred stacks, but the technology can be selected based on the project's requirements."]
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function App() {
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const whatsapp = "https://wa.me/918660363874?text=Hi%20WeDebug%2C%20I%20would%20like%20to%20discuss%20a%20website%20project.";
  const email = "mailto:wedebug.official@gmail.com";

  return (
    <div className="app">
      <header className="header">
        <div className="container nav">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="WeDebug home">
            <span className="brand-mark">{`</>`}</span>
            <span>
              <strong>WeDebug</strong>
              <small>BUILD • DEBUG • GROW</small>
            </span>
          </button>

          <nav className={menu ? "nav-links open" : "nav-links"}>
            <button onClick={() => { scrollTo("home"); setMenu(false); }}>Home</button>
            <button onClick={() => { scrollTo("services"); setMenu(false); }}>Services</button>
            <button onClick={() => { scrollTo("work"); setMenu(false); }}>Work</button>
            <button onClick={() => { scrollTo("process"); setMenu(false); }}>Process</button>
            <button onClick={() => { scrollTo("faq"); setMenu(false); }}>FAQ</button>
            <button className="nav-cta" onClick={() => { scrollTo("contact"); setMenu(false); }}>Get a Quote <ArrowRight size={16}/></button>
          </nav>

          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={15}/> WEB DEVELOPMENT STUDIO</div>
              <h1>We build websites that make your business <em>look as good as it works.</em></h1>
              <p className="hero-text">
                WeDebug creates modern business websites, web applications and digital experiences —
                from the first idea to launch, hosting and ongoing improvements.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => scrollTo("contact")}>Start Your Project <ArrowRight size={18}/></button>
                <button className="btn btn-secondary" onClick={() => scrollTo("services")}>Explore Services</button>
              </div>
              <div className="trust-row">
                <span><Check size={15}/> Mobile-first</span>
                <span><Check size={15}/> SEO-ready</span>
                <span><Check size={15}/> Fast & responsive</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="browser-card">
                <div className="browser-top"><span></span><span></span><span></span><b>wedebug.in</b></div>
                <div className="mock-site">
                  <div className="mock-nav"><div className="mock-logo"></div><div className="mock-links"><i></i><i></i><i></i></div></div>
                  <div className="mock-content">
                    <div>
                      <span className="mock-label">YOUR DIGITAL PRESENCE</span>
                      <div className="mock-title"></div>
                      <div className="mock-title short"></div>
                      <div className="mock-lines"><i></i><i></i><i></i></div>
                      <div className="mock-button"></div>
                    </div>
                    <div className="code-panel">
                      <div className="code-head"><span>WeDebug</span><span>● ●</span></div>
                      <div className="code-lines"><i></i><i></i><i></i><i></i><i></i></div>
                    </div>
                  </div>
                  <div className="mock-stats"><span>01 <b>Design</b></span><span>02 <b>Build</b></span><span>03 <b>Launch</b></span></div>
                </div>
              </div>
              <div className="floating-chip chip-one">⚡ Fast</div>
              <div className="floating-chip chip-two">✓ Responsive</div>
              <div className="floating-chip chip-three">&lt;/&gt; Clean code</div>
            </div>
          </div>
        </section>

        <section className="intro-strip">
          <div className="container strip-inner">
            <span>DESIGN</span><b>•</b><span>DEVELOP</span><b>•</b><span>DEPLOY</span><b>•</b><span>GROW</span>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">WHAT WE BUILD</div>
              <h2>Everything you need to take an idea <em>online.</em></h2>
              <p>Choose a focused service or let us handle the complete journey from design to deployment.</p>
            </div>
            <div className="service-grid">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <article className="service-card" key={s.title}>
                    <div className="icon-box"><Icon size={22}/></div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <ul>{s.bullets.map(b => <li key={b}><Check size={15}/>{b}</li>)}</ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="work" className="section section-soft">
          <div className="container">
            <div className="section-heading left">
              <div className="eyebrow">SAMPLE PROJECTS</div>
              <h2>Built for different kinds of <em>businesses.</em></h2>
              <p>Replace these examples with your real client projects as your portfolio grows.</p>
            </div>
            <div className="work-grid">
              <article className="work-card work-a">
                <div className="work-screen"><span>01 / BUSINESS</span><h3>Premium<br/>Business Website</h3><b>Modern • Responsive • SEO</b></div>
                <div className="work-info"><span>Corporate / Services</span><ExternalLink size={18}/></div>
              </article>
              <article className="work-card work-b">
                <div className="work-screen"><span>02 / CREATIVE</span><h3>Wedding<br/>Photography</h3><b>Gallery • Enquiry • Mobile-first</b></div>
                <div className="work-info"><span>Creative / Photography</span><ExternalLink size={18}/></div>
              </article>
              <article className="work-card work-c">
                <div className="work-screen"><span>03 / PRODUCT</span><h3>Online<br/>Store</h3><b>Catalogue • Cart • Payments</b></div>
                <div className="work-info"><span>E-commerce</span><ExternalLink size={18}/></div>
              </article>
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">HOW WE WORK</div>
              <h2>From first conversation to <em>launch.</em></h2>
            </div>
            <div className="process-grid">
              {process.map(([num, title, text]) => (
                <article className="process-card" key={num}>
                  <span className="process-number">{num}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tech-section">
          <div className="container tech-inner">
            <div>
              <div className="eyebrow">TECHNOLOGY</div>
              <h2>Modern tools. <em>Practical solutions.</em></h2>
              <p>We choose the stack around the project's needs rather than forcing every project into the same template.</p>
            </div>
            <div className="tech-list">
              {["React", "Vite", "JavaScript", "Node.js", "Java / Spring Boot", "REST APIs", "SQL", "Redis", "AWS", "Git & GitHub"].map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container faq-layout">
            <div className="section-heading left">
              <div className="eyebrow">FAQ</div>
              <h2>Questions before you <em>start?</em></h2>
              <p>Here are some common questions. We can discuss your exact project during a free consultation.</p>
            </div>
            <div className="faq-list">
              {faqs.map(([q, a], i) => (
                <div className="faq-item" key={q}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{q}</span>
                    <ChevronDown className={openFaq === i ? "rotate" : ""} size={20}/>
                  </button>
                  {openFaq === i && <p>{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-card">
            <div className="contact-copy">
              <div className="eyebrow">LET'S BUILD</div>
              <h2>Have a website idea? <em>Let's talk.</em></h2>
              <p>Tell us what you want to build, what your business does and when you'd like to launch.</p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp Us</a>
                <a className="btn btn-light" href={email}><Mail size={18}/> Email Us</a>
              </div>
              <small>Replace the demo WhatsApp number and email in <code>src/App.jsx</code> before launch.</small>
            </div>
            <div className="contact-form">
              <div className="form-row"><input placeholder="Your name" /><input placeholder="Phone / WhatsApp" /></div>
              <input placeholder="Business / brand name" />
              <select defaultValue=""><option value="" disabled>What do you need?</option><option>Business website</option><option>E-commerce</option><option>Web application</option><option>Website redesign</option><option>Maintenance</option></select>
              <textarea rows="5" placeholder="Tell us briefly about your project"></textarea>
              <a className="form-submit" href={whatsapp} target="_blank" rel="noreferrer">Send enquiry on WhatsApp <ArrowRight size={17}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <button className="brand footer-brand" onClick={() => scrollTo("home")}><span className="brand-mark">{`</>`}</span><span><strong>WeDebug</strong><small>BUILD • DEBUG • GROW</small></span></button>
            <p>Modern websites and web applications for businesses, creators and growing brands.</p>
          </div>
          <div><h4>Services</h4><button onClick={() => scrollTo("services")}>Web Development</button><button onClick={() => scrollTo("services")}>E-commerce</button><button onClick={() => scrollTo("services")}>Web Applications</button></div>
          <div><h4>Company</h4><button onClick={() => scrollTo("work")}>Our Work</button><button onClick={() => scrollTo("process")}>How We Work</button><button onClick={() => scrollTo("contact")}>Contact</button></div>
          <div><h4>Contact</h4><a href={email}>wedebug.official@gmail.com</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><span>India</span></div>
        </div>
        <div className="container copyright">© {new Date().getFullYear()} WeDebug. All rights reserved. <span>wedebug.in</span></div>
      </footer>

      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={26}/></a>
    </div>
  );
}

export default App;