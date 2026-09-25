import React, {useState} from 'react'
import {Link, NavLink, Routes, Route, useNavigate, useLocation} from 'react-router-dom'

const categories = [
  ['Design & Creative','Design','Logo design, brand identity, UI/UX and more.'],
  ['Development & Tech','Development','Websites, apps, software and automation.'],
  ['Writing & Translation','Writing','Copywriting, editing, translation and content.'],
  ['Marketing & Growth','Marketing','SEO, social media, ads and growth strategy.'],
  ['Video & Animation','Video','Editing, motion graphics, explainers and film.'],
  ['Business & Consulting','Business','Research, strategy, finance and operations.'],
  ['Data & AI','Data','Analytics, data science and practical AI solutions.'],
  ['Education & Coaching','Education','Tutoring, coaching and professional learning.']
]

const services = [
  {title:'Build a clean, conversion-focused website', user:'Maya Studio', role:'Web Designer', price:'$180', rating:'4.9', reviews:'128', tag:'Web Development', initials:'MS'},
  {title:'Professional brand identity and logo system', user:'Northline', role:'Brand Designer', price:'$120', rating:'5.0', reviews:'86', tag:'Branding', initials:'NL'},
  {title:'Edit short-form videos for social media', user:'FrameLab', role:'Video Editor', price:'$65', rating:'4.8', reviews:'214', tag:'Video Editing', initials:'FL'},
  {title:'SEO audit and practical growth roadmap', user:'Searchcraft', role:'SEO Specialist', price:'$95', rating:'4.9', reviews:'73', tag:'SEO', initials:'SC'},
  {title:'Write clear product copy that sounds human', user:'Plainword', role:'Copywriter', price:'$75', rating:'4.9', reviews:'154', tag:'Copywriting', initials:'PW'},
  {title:'Design a modern mobile app interface', user:'Studio Noma', role:'Product Designer', price:'$240', rating:'5.0', reviews:'61', tag:'UI/UX', initials:'SN'}
]

const projects = [
  {title:'Need a responsive website for a small business', desc:'Looking for a designer/developer to create a clean five-page site with a CMS-ready structure.', budget:'$300–600', proposals:'18', time:'4 days ago', category:'Web Development'},
  {title:'Brand identity for a new coffee company', desc:'Logo, typography, color system and a concise brand guide for a new consumer brand.', budget:'$250–450', proposals:'12', time:'1 day ago', category:'Branding'},
  {title:'Monthly social media video editor', desc:'Short-form edits for Instagram, TikTok and YouTube Shorts. Ongoing monthly work.', budget:'$400–700 / mo', proposals:'27', time:'2 hours ago', category:'Video Editing'},
  {title:'Translate website from English to Spanish', desc:'Human translation for approximately 4,000 words with attention to tone and terminology.', budget:'$100–180', proposals:'9', time:'6 hours ago', category:'Translation'}
]

function Icon({name}) {
  const paths = {
    search:<><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    arrow:<><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check:<path d="m5 12 4 4L19 6"/>,
    grid:<><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></>,
    brief:<><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/><path d="M10 12v2h4v-2"/></>,
    user:<><circle cx="12" cy="8" r="4"/><path d="M4 21c.8-4 3.5-6 8-6s7.2 2 8 6"/></>,
    heart:<path d="M20.8 8.8c0 5-8.8 10.2-8.8 10.2S3.2 13.8 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z"/>,
    menu:<><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close:<><path d="m6 6 12 12M18 6 6 18"/></>,
    bell:<><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
    message:<><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 9.5 9.5 0 0 1-4-.8L4 20l1.8-3.7A7.3 7.3 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/></>,
    star:<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function Logo(){return <Link className="logo" to="/"><span className="logo-mark">c</span><span>commonly</span></Link>}

function Header(){
  const [open,setOpen]=useState(false)
  return <header className="header">
    <div className="container nav">
      <Logo/>
      <nav className={open?'nav-links open':'nav-links'}>
        <NavLink to="/services">Find Services</NavLink>
        <NavLink to="/projects">Find Work</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </nav>
      <div className="nav-actions">
        <Link className="text-btn hide-mobile" to="/login">Log in</Link>
        <Link className="btn btn-dark small" to="/signup">Join Commonly</Link>
        <button className="icon-btn menu-btn" onClick={()=>setOpen(!open)} aria-label="Menu"><Icon name={open?'close':'menu'}/></button>
      </div>
    </div>
  </header>
}

function Footer(){
  return <footer className="footer"><div className="container footer-grid">
    <div><Logo/><p className="muted footer-copy">A place for people to find the skills they need — and turn the skills they have into meaningful work.</p></div>
    <div><h4>For clients</h4><Link to="/services">Find services</Link><Link to="/projects">Post a project</Link><Link to="/categories">Explore categories</Link></div>
    <div><h4>For professionals</h4><Link to="/projects">Find work</Link><Link to="/profile">Build your profile</Link><Link to="/signup">Join the marketplace</Link></div>
    <div><h4>Company</h4><a href="#">About</a><a href="#">Trust & safety</a><a href="#">Help center</a></div>
  </div><div className="container footer-bottom"><span>© 2026 Commonly. Frontend concept.</span><span>Built for a global marketplace.</span></div></footer>
}

function SearchBox({large=false}){
  const nav=useNavigate(); const [q,setQ]=useState('')
  return <form className={large?'search large':'search'} onSubmit={e=>{e.preventDefault();nav('/services')}}>
    <Icon name="search"/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search for a service, skill, or project"/><button type="submit">Search</button>
  </form>
}

function Home(){
 return <><section className="hero"><div className="container hero-grid">
   <div className="hero-copy"><div className="eyebrow">A global marketplace for skills</div>
    <h1>Find the right people for the work that matters.</h1>
    <p className="hero-lead">Whether you need a specialist or want to build a career around your skills, Commonly brings both sides of the marketplace together.</p>
    <SearchBox large/>
    <div className="hero-links"><Link to="/services">I need a service <Icon name="arrow"/></Link><Link to="/projects">I want to find work <Icon name="arrow"/></Link></div>
   </div>
   <div className="hero-panel"><div className="panel-top"><span>Marketplace activity</span><span className="live-dot">Live</span></div>
    <div className="activity-row"><div className="avatar a1">MS</div><div><b>Website design</b><small>New project matched</small></div><strong>$180</strong></div>
    <div className="activity-row"><div className="avatar a2">NL</div><div><b>Brand identity</b><small>Project completed</small></div><strong>$320</strong></div>
    <div className="activity-row"><div className="avatar a3">FL</div><div><b>Video editing</b><small>New service order</small></div><strong>$95</strong></div>
    <div className="panel-note"><span className="check-circle"><Icon name="check"/></span><div><b>Built around trust</b><small>Clear profiles, work history and reviews help people make informed decisions.</small></div></div>
   </div>
 </div></section>
 <section className="section"><div className="container"><div className="section-head"><div><div className="eyebrow">Explore</div><h2>Whatever you need done.</h2></div><Link className="arrow-link" to="/categories">View all categories <Icon name="arrow"/></Link></div>
  <div className="category-grid">{categories.slice(0,6).map(([name,tag,desc],i)=><Link className="category-card" to={'/services?category='+tag} key={name}><span className="category-num">0{i+1}</span><h3>{name}</h3><p>{desc}</p><Icon name="arrow"/></Link>)}</div>
 </div></section>
 <section className="section muted-section"><div className="container"><div className="section-head"><div><div className="eyebrow">Popular right now</div><h2>Services people are hiring for.</h2></div><Link className="arrow-link" to="/services">Explore services <Icon name="arrow"/></Link></div><div className="service-grid">{services.slice(0,4).map(s=><ServiceCard key={s.title} s={s}/>)}</div></div></section>
 <section className="section"><div className="container split-cta"><div><div className="eyebrow">For professionals</div><h2>Your skills deserve an audience.</h2><p>Build a profile around the work you are proud of, discover projects that fit your skills, and grow a reputation through real work.</p><Link className="btn btn-dark" to="/signup">Create your profile <Icon name="arrow"/></Link></div><div className="feature-list"><div><Icon name="check"/><span><b>Show your work</b><small>Put your portfolio and experience where clients can see it.</small></span></div><div><Icon name="check"/><span><b>Find relevant opportunities</b><small>Browse projects by skill, budget and category.</small></span></div><div><Icon name="check"/><span><b>Build lasting trust</b><small>Collect verified work history and client reviews.</small></span></div></div></div></section>
 <section className="section final-cta"><div className="container"><div className="cta-box"><div><div className="eyebrow">Start here</div><h2>There is work for every skill.</h2><p>And a skilled person for almost every kind of work.</p></div><div className="cta-actions"><Link className="btn btn-light" to="/services">Find a service</Link><Link className="btn btn-outline-light" to="/projects">Find work</Link></div></div></div></section>
 </>
}

function ServiceCard({s}){
 return <Link className="service-card" to="/service"><div className="service-thumb"><span>{s.tag}</span><div className="thumb-mark">{s.initials}</div></div><div className="service-body"><div className="mini-user"><span className="avatar small">{s.initials}</span><span><b>{s.user}</b><small>{s.role}</small></span></div><h3>{s.title}</h3><div className="service-meta"><span><Icon name="star"/> {s.rating} <em>({s.reviews})</em></span><strong>From {s.price}</strong></div></div></Link>
}

function Services(){
 const [query,setQuery]=useState('')
 const filtered=services.filter(s=>s.title.toLowerCase().includes(query.toLowerCase())||s.tag.toLowerCase().includes(query.toLowerCase()))
 return <><PageIntro eyebrow="Marketplace" title="Find a service that fits." text="Search thousands of professional services, compare profiles and discover people whose work matches what you need."/><div className="container"><div className="market-layout"><aside className="filters"><b>Filter results</b><label>Category<select><option>All categories</option><option>Design</option><option>Development</option><option>Marketing</option></select></label><label>Budget<select><option>Any budget</option><option>Under $50</option><option>$50–$150</option><option>$150+</option></select></label><label>Rating<select><option>Any rating</option><option>4.5+</option><option>4.8+</option><option>5.0</option></select></label><label className="check-label"><input type="checkbox"/> Verified professionals</label></aside><main><div className="market-toolbar"><div className="search"><Icon name="search"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search services..."/></div><select className="sort"><option>Recommended</option><option>Highest rated</option><option>Lowest price</option></select></div><div className="service-grid">{filtered.map(s=><ServiceCard key={s.title} s={s}/>)}</div></main></div></div></>
}

function Projects(){
 return <><PageIntro eyebrow="Opportunities" title="Find work that fits your skills." text="Browse client projects, understand the brief, and send a proposal when the opportunity is right for you."/><div className="container"><div className="project-layout"><aside className="filters"><b>Project filters</b><label>Category<select><option>All categories</option><option>Development</option><option>Design</option><option>Video</option></select></label><label>Budget<select><option>Any budget</option><option>Under $250</option><option>$250–$500</option><option>$500+</option></select></label><label>Project type<select><option>All projects</option><option>Fixed price</option><option>Ongoing</option></select></label></aside><main><div className="project-list">{projects.map((p,i)=><Link className="project-card" to="/project" key={p.title}><div className="project-top"><span className="tag">{p.category}</span><span className="muted">{p.time}</span></div><h3>{p.title}</h3><p>{p.desc}</p><div className="project-bottom"><span><b>{p.budget}</b><small>Budget</small></span><span><b>{p.proposals}</b><small>Proposals</small></span><span className="project-arrow"><Icon name="arrow"/></span></div></Link>)}</div></main></div></div></>
}

function PageIntro({eyebrow,title,text}){return <section className="page-intro"><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{text}</p></div></section>}

function Categories(){return <><PageIntro eyebrow="Explore" title="Find your category." text="From a one-off task to an ongoing partnership, start with the kind of work you need."/><div className="container category-full">{categories.map(([name,tag,desc],i)=><Link to={'/services?category='+tag} className="category-row" key={tag}><span>0{i+1}</span><div><h2>{name}</h2><p>{desc}</p></div><Icon name="arrow"/></Link>)}</div></>}

function Profile(){return <><div className="profile-cover"></div><div className="container profile"><div className="profile-head"><div className="profile-avatar">MS</div><div className="profile-title"><div className="eyebrow">Verified professional</div><h1>Maya Studio</h1><p>Web designer & developer · Lisbon, Portugal</p><div className="rating"><Icon name="star"/> 4.9 <span>128 reviews</span> · 6 years experience</div></div><button className="btn btn-dark">Contact</button></div><div className="profile-grid"><main><section className="profile-section"><h2>About</h2><p>I help growing businesses turn ideas into clear, useful digital experiences. My work focuses on thoughtful interfaces, responsive websites and systems that are easy to maintain.</p></section><section className="profile-section"><h2>Selected work</h2><div className="portfolio-grid"><div className="portfolio-box">Brand site</div><div className="portfolio-box">SaaS dashboard</div><div className="portfolio-box">Mobile product</div></div></section><section className="profile-section"><h2>Reviews</h2><div className="review"><div className="avatar">JR</div><div><b>“Clear communication and excellent work.”</b><p className="muted">Jordan R. · Client</p></div></div><div className="review"><div className="avatar">AK</div><div><b>“Understood the brief quickly and delivered on time.”</b><p className="muted">Aisha K. · Client</p></div></div></section></main><aside className="profile-side"><div className="side-card"><h3>Services</h3><span>Web design</span><span>Frontend development</span><span>UX/UI design</span><span>Design systems</span><hr/><b>Typical rate</b><strong>$35–60 / hour</strong><button className="btn btn-dark full">Start a conversation</button></div></aside></div></div></>}

function ServiceDetail(){return <><div className="container detail"><div className="breadcrumbs">Services / Design & Creative / Web Design</div><div className="detail-grid"><main><div className="detail-visual">Maya Studio <span>Web design</span></div><h1>Build a clean, conversion-focused website</h1><div className="mini-user"><span className="avatar">MS</span><span><b>Maya Studio</b><small>Web Designer · <Icon name="star"/> 4.9 (128)</small></span></div><hr/><h2>About this service</h2><p>I will design and build a responsive website with a clear structure, thoughtful interactions and a polished visual system. The goal is a site that feels credible and helps visitors understand what you do.</p><h2>What you get</h2><div className="feature-grid"><span><Icon name="check"/> Responsive design</span><span><Icon name="check"/> Source files</span><span><Icon name="check"/> Accessible structure</span><span><Icon name="check"/> Two revision rounds</span></div></main><aside><div className="order-card"><div className="order-tabs"><b>Standard</b><span>Premium</span></div><h3>Website design & build</h3><p>Responsive five-page website with clean handoff.</p><div className="order-price">$180</div><div className="order-line"><span>Delivery</span><b>7 days</b></div><div className="order-line"><span>Revisions</span><b>2</b></div><button className="btn btn-dark full">Continue</button><button className="btn btn-outline full">Contact seller</button></div></aside></div></div></>}

function ProjectDetail(){return <><div className="container detail"><div className="breadcrumbs">Projects / Web Development</div><div className="detail-grid"><main><span className="tag">Web Development</span><h1>Need a responsive website for a small business</h1><div className="project-owner"><div className="avatar">AC</div><div><b>Alex Carter</b><small>Client · 3 projects posted</small></div></div><hr/><h2>Project brief</h2><p>We are looking for a designer/developer to create a clean five-page website for a small service business. The site should work well on mobile, load quickly and be easy for our team to update later.</p><h2>Requirements</h2><div className="requirements"><span><Icon name="check"/> Responsive across modern devices</span><span><Icon name="check"/> Clear information architecture</span><span><Icon name="check"/> Contact form and basic SEO structure</span><span><Icon name="check"/> Source files and handoff documentation</span></div></main><aside><div className="order-card"><span className="muted">Estimated budget</span><div className="order-price">$300–600</div><div className="order-line"><span>Proposals</span><b>18</b></div><div className="order-line"><span>Posted</span><b>4 days ago</b></div><button className="btn btn-dark full">Send a proposal</button><button className="btn btn-outline full">Save project</button></div></aside></div></div></>}

function Auth({signup=false}){return <div className="auth-page"><div className="auth-card"><Logo/><h1>{signup?'Join a marketplace built around people.':'Welcome back.'}</h1><p className="muted">{signup?'Create a profile as a client, professional, or both.':'Log in to continue to your marketplace.'}</p>{signup&&<div className="role-toggle"><button>Client</button><button className="active">Professional</button></div>}<label>Email<input type="email" placeholder="you@example.com"/></label><label>Password<input type="password" placeholder="••••••••"/></label><button className="btn btn-dark full">{signup?'Create account':'Log in'}</button><div className="auth-divider">or</div><button className="social-btn">Continue with Google</button><p className="auth-foot">{signup?'Already have an account?':'New to Commonly?'} <Link to={signup?'/login':'/signup'}>{signup?'Log in':'Create an account'}</Link></p></div></div>}

function Dashboard(){return <div className="dashboard"><div className="container dash-grid"><aside className="dash-side"><Logo/><nav><NavLink to="/dashboard">Overview</NavLink><NavLink to="/projects">Projects</NavLink><a>Messages</a><a>Saved</a><a>Profile</a><a>Settings</a></nav><div className="dash-user"><div className="avatar">MS</div><span><b>Maya Studio</b><small>Professional</small></span></div></aside><main className="dash-main"><div className="dash-top"><div><div className="eyebrow">Dashboard</div><h1>Good morning, Maya.</h1></div><div className="dash-actions"><button className="icon-btn"><Icon name="bell"/></button><button className="avatar">MS</button></div></div><div className="stats"><div><span>Active projects</span><b>4</b><small>2 awaiting client</small></div><div><span>This month</span><b>$2,840</b><small>+12% from last month</small></div><div><span>Profile views</span><b>1,284</b><small>Last 30 days</small></div><div><span>Rating</span><b>4.9</b><small>128 reviews</small></div></div><div className="dash-content"><section className="dash-card"><div className="card-head"><h2>Active projects</h2><a>View all</a></div>{['Acme website redesign','Northline brand system','Mobile app landing page'].map((x,i)=><div className="dash-project" key={x}><div><b>{x}</b><small>{i===0?'Awaiting client feedback':'In progress'}</small></div><span>{['$680','$420','$310'][i]}</span></div>)}</section><section className="dash-card"><div className="card-head"><h2>Recent opportunities</h2><a>Browse projects</a></div>{projects.slice(0,3).map(p=><Link className="dash-opportunity" to="/project" key={p.title}><span className="tag">{p.category}</span><b>{p.title}</b><small>{p.budget} · {p.proposals} proposals</small></Link>)}</section></div></main></div></div>}

function App(){
 return <div className="app"><Routes>
   <Route path="/" element={<><Header/><Home/><Footer/></>}/>
   <Route path="/services" element={<><Header/><Services/><Footer/></>}/>
   <Route path="/projects" element={<><Header/><Projects/><Footer/></>}/>
   <Route path="/categories" element={<><Header/><Categories/><Footer/></>}/>
   <Route path="/profile" element={<><Header/><Profile/><Footer/></>}/>
   <Route path="/service" element={<><Header/><ServiceDetail/><Footer/></>}/>
   <Route path="/project" element={<><Header/><ProjectDetail/><Footer/></>}/>
   <Route path="/login" element={<Auth/>}/>
   <Route path="/signup" element={<Auth signup/>}/>
   <Route path="/dashboard" element={<Dashboard/>}/>
 </Routes></div>
}

export default App
