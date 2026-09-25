import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const services = [
  {
    title: "Modern Logo Design",
    seller: "Ayesha Khan",
    price: "$25",
    category: "Design",
    rating: "4.9",
  },
  {
    title: "Professional Website Development",
    seller: "Daniel Reed",
    price: "$120",
    category: "Development",
    rating: "5.0",
  },
  {
    title: "SEO Optimization",
    seller: "Mia Wilson",
    price: "$60",
    category: "Marketing",
    rating: "4.8",
  },
  {
    title: "YouTube Thumbnail Design",
    seller: "Noah Smith",
    price: "$15",
    category: "Design",
    rating: "4.9",
  },
];

const projects = [
  {
    title: "Need a brand identity for a new startup",
    description: "Looking for a designer who can create a clean and professional visual identity.",
    budget: "$300 – $500",
    proposals: 12,
  },
  {
    title: "Build a responsive business website",
    description: "Need a modern responsive website for a growing business.",
    budget: "$500 – $1,000",
    proposals: 18,
  },
  {
    title: "Social media marketing campaign",
    description: "Looking for someone to manage and grow our social media presence.",
    budget: "$200 – $400",
    proposals: 9,
  },
];

const categories = [
  "Design & Creative",
  "Development & IT",
  "Writing & Translation",
  "Marketing",
  "Video & Animation",
  "Business",
  "Music & Audio",
  "AI Services",
];

function Layout({ children }) {
  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <Link to="/" className="logo">
            commonly
          </Link>

          <nav className="nav-links">
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/categories">Categories</Link>
          </nav>

          <div className="nav-actions">
            <Link to="/login" className="login-link">
              Log in
            </Link>
            <Link to="/signup" className="button button-dark">
              Join Commonly
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">commonly</div>
            <p>Find talent. Find work.</p>
          </div>

          <div className="footer-links">
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Commonly. All rights reserved.
        </div>
      </footer>
    </>
  );
}

function Home() {
  const [search, setSearch] = useState("");

  return (
    <Layout>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">THE GLOBAL WORK MARKETPLACE</span>

          <h1>
            Find the right talent.
            <br />
            Get work done.
          </h1>

          <p>
            Commonly connects businesses with independent professionals
            around the world.
          </p>

          <div className="hero-search">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="What service are you looking for?"
            />
            <Link to="/services" className="button button-dark">
              Search
            </Link>
          </div>

          <div className="popular">
            <span>Popular:</span>
            <Link to="/services">Logo Design</Link>
            <Link to="/services">Web Development</Link>
            <Link to="/services">SEO</Link>
            <Link to="/services">Video Editing</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE</span>
            <h2>What can we help you with?</h2>
          </div>
          <Link to="/categories" className="text-link">
            View all categories →
          </Link>
        </div>

        <div className="category-grid">
          {categories.slice(0, 6).map((category) => (
            <Link to="/services" className="category-card" key={category}>
              <span>{category}</span>
              <span>→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SERVICES</span>
            <h2>Popular services</h2>
          </div>
          <Link to="/services" className="text-link">
            Browse services →
          </Link>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard service={service} key={service.title} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span className="eyebrow">FOR PROFESSIONALS</span>
          <h2>Turn your skills into opportunities.</h2>
          <p>
            Create your profile, showcase your work and connect with clients
            from anywhere in the world.
          </p>
        </div>

        <Link to="/signup" className="button button-light">
          Become a professional
        </Link>
      </section>
    </Layout>
  );
}

function ServiceCard({ service }) {
  return (
    <Link to="/service" className="service-card">
      <div className="service-image">
        <span>{service.category}</span>
      </div>

      <div className="service-body">
        <div className="seller-row">
          <div className="avatar">{service.seller.charAt(0)}</div>
          <span>{service.seller}</span>
        </div>

        <h3>{service.title}</h3>

        <div className="service-meta">
          <span>★ {service.rating}</span>
          <strong>Starting at {service.price}</strong>
        </div>
      </div>
    </Link>
  );
}

function Services() {
  return (
    <Layout>
      <section className="page-header">
        <span className="eyebrow">MARKETPLACE</span>
        <h1>Services</h1>
        <p>Discover professionals offering services for every kind of project.</p>
      </section>

      <section className="section">
        <div className="service-grid">
          {services.concat(services).map((service, index) => (
            <ServiceCard service={service} key={`${service.title}-${index}`} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

function Projects() {
  return (
    <Layout>
      <section className="page-header">
        <span className="eyebrow">PROJECTS</span>
        <h1>Find projects</h1>
        <p>Explore opportunities posted by clients around the world.</p>
      </section>

      <section className="section">
        <div className="project-list">
          {projects.map((project) => (
            <Link to="/project" className="project-card" key={project.title}>
              <div>
                <span className="project-label">OPEN PROJECT</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="project-meta">
                  <span>Budget: {project.budget}</span>
                  <span>{project.proposals} proposals</span>
                </div>
              </div>

              <span className="arrow">→</span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

function Categories() {
  return (
    <Layout>
      <section className="page-header">
        <span className="eyebrow">DISCOVER</span>
        <h1>Categories</h1>
        <p>Explore the work people are hiring professionals to do.</p>
      </section>

      <section className="section">
        <div className="category-grid large">
          {categories.map((category) => (
            <Link to="/services" className="category-card" key={category}>
              <span>{category}</span>
              <span>→</span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

function ServiceDetail() {
  return (
    <Layout>
      <section className="detail-section">
        <div className="detail-image">Design & Creative</div>

        <div className="detail-content">
          <span className="eyebrow">DESIGN & CREATIVE</span>
          <h1>Modern Logo Design</h1>

          <div className="seller-row">
            <div className="avatar">A</div>
            <span>Ayesha Khan · ★ 4.9</span>
          </div>

          <p>
            Get a clean, professional and memorable logo designed specifically
            for your brand.
          </p>

          <div className="price-box">
            <span>Starting at</span>
            <strong>$25</strong>
          </div>

          <button className="button button-dark">Contact professional</button>
        </div>
      </section>
    </Layout>
  );
}

function ProjectDetail() {
  return (
    <Layout>
      <section className="detail-section">
        <div className="detail-content wide">
          <span className="eyebrow">OPEN PROJECT</span>
          <h1>Need a brand identity for a new startup</h1>

          <p>
            Looking for a designer who can create a clean and professional
            visual identity for a new technology startup.
          </p>

          <div className="project-meta">
            <span>Budget: $300 – $500</span>
            <span>12 proposals</span>
          </div>

          <button className="button button-dark">Submit proposal</button>
        </div>
      </section>
    </Layout>
  );
}

function Profile() {
  return (
    <Layout>
      <section className="profile-section">
        <div className="profile-avatar">A</div>
        <span className="eyebrow">PROFESSIONAL</span>
        <h1>Ayesha Khan</h1>
        <p>Brand Designer · UI Designer</p>

        <div className="profile-stats">
          <div>
            <strong>4.9</strong>
            <span>Rating</span>
          </div>
          <div>
            <strong>120+</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>98%</strong>
            <span>Success</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Login() {
  const navigate = useNavigate();

  return (
    <Layout>
      <AuthBox
        title="Welcome back"
        subtitle="Log in to your Commonly account."
        button="Log in"
        onSubmit={() => navigate("/dashboard")}
      />
    </Layout>
  );
}

function Signup() {
  const navigate = useNavigate();

  return (
    <Layout>
      <AuthBox
        title="Create your account"
        subtitle="Join clients and professionals from around the world."
        button="Create account"
        onSubmit={() => navigate("/dashboard")}
      />
    </Layout>
  );
}

function AuthBox({ title, subtitle, button, onSubmit }) {
  return (
    <section className="auth-section">
      <form
        className="auth-box"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <span className="eyebrow">COMMONLY</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <label>
          Email
          <input type="email" required placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input type="password" required placeholder="••••••••" />
        </label>

        <button className="button button-dark" type="submit">
          {button}
        </button>
      </form>
    </section>
  );
}

function Dashboard() {
  return (
    <Layout>
      <section className="page-header">
        <span className="eyebrow">YOUR WORKSPACE</span>
        <h1>Dashboard</h1>
        <p>Manage your services, projects and activity.</p>
      </section>

      <section className="section">
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <span>Active projects</span>
            <strong>4</strong>
          </div>
          <div className="dashboard-card">
            <span>Messages</span>
            <strong>12</strong>
          </div>
          <div className="dashboard-card">
            <span>Profile views</span>
            <strong>248</strong>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/service" element={<ServiceDetail />} />
        <Route path="/project" element={<ProjectDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
