import { useState, useEffect } from "react";

const L = {
  lightest: "#A7EBF2",
  light: "#54ACBF",
  mid: "#26658C",
  dark: "#023859",
  darkest: "#011C40",
  white: "#E8F8FA",
  mist: "#7BB8C8",
  glow: "#7DE0EE",
};

const navItems = ["Home", "About", "Classes", "Trainers", "Pricing", "Gallery", "Contact"];

const stats = [
  { value: "3,200+", label: "Active Members" },
  { value: "22+", label: "Expert Trainers" },
  { value: "60+", label: "Classes / Week" },
  { value: "9", label: "Years of Excellence" },
];

const features = [
  { icon: "💧", title: "Olympic Swimming Pool", desc: "25m heated pool exclusively for members — aqua fitness & lap swimming" },
  { icon: "⚡", title: "Premium Equipment", desc: "Top-tier machines from Life Fitness, Technogym & Hammer Strength" },
  { icon: "🧊", title: "Cryo Recovery Zone", desc: "Ice baths, cryotherapy chambers & sports massage therapy" },
  { icon: "🎯", title: "Smart Training AI", desc: "AI-powered form analysis and adaptive workout recommendations" },
];

const classes = [
  { name: "Aqua HIIT", time: "6:00 AM", duration: "45 min", trainer: "Arjun Mehta", slots: 5, tag: "Water" },
  { name: "Power Yoga", time: "7:30 AM", duration: "60 min", trainer: "Priya Sharma", slots: 8, tag: "Mind" },
  { name: "Strength Lab", time: "9:00 AM", duration: "75 min", trainer: "Ravi Kumar", slots: 3, tag: "Iron" },
  { name: "Kickboxing", time: "5:00 PM", duration: "60 min", trainer: "Sneha Rao", slots: 6, tag: "Combat" },
  { name: "CrossFit Surge", time: "6:30 PM", duration: "75 min", trainer: "Dev Patil", slots: 4, tag: "Endurance" },
  { name: "Deep Stretch", time: "8:00 PM", duration: "45 min", trainer: "Priya Sharma", slots: 12, tag: "Recovery" },
];

const trainers = [
  { name: "Arjun Mehta", role: "Strength & Aqua Fitness", exp: "10 Yrs", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop&crop=face" },
  { name: "Priya Sharma", role: "Yoga & Mindfulness", exp: "7 Yrs", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop&crop=face" },
  { name: "Ravi Kumar", role: "Olympic Lifting", exp: "12 Yrs", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop&crop=face" },
  { name: "Sneha Rao", role: "Combat & Boxing", exp: "8 Yrs", img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=500&fit=crop&crop=face" },
];

const plans = [
  { name: "Wave", price: "₹999", desc: "Perfect start", features: ["Gym Floor Access", "Locker Room", "Basic Classes (5/month)", "1 Guest Pass"], hot: false },
  { name: "Tide", price: "₹1,999", desc: "Most popular", features: ["Everything in Wave", "Unlimited Classes", "Personal Trainer 2x/week", "Nutrition Plan", "Pool Access"], hot: true },
  { name: "Ocean", price: "₹3,799", desc: "Elite experience", features: ["Everything in Tide", "24/7 Access", "Dedicated Coach", "Cryotherapy Zone", "Priority Booking", "Custom Meal Plans"], hot: false },
];

const gallery = [
  { img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&h=500&fit=crop", label: "Main Floor" },
  { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop", label: "Free Weights" },
  { img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop", label: "Cardio Zone" },
  { img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=700&h=300&fit=crop", label: "Group Class" },
  { img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop", label: "Training" },
  { img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop", label: "Recovery" },
];

const testimonials = [
  { name: "Rahul Verma", result: "Lost 22kg in 4 months", text: "Aqua HIIT literally changed my life. The pool sessions are unlike anything else in Pune.", avatar: "RV" },
  { name: "Nisha Patel", result: "Fitness model in 6 months", text: "The coaches at AquaForge are phenomenal. Personalised, caring, and results-driven.", avatar: "NP" },
  { name: "Amit Joshi", result: "Marathon finisher", text: "From zero to marathon in 5 months. The endurance program here is world-class.", avatar: "AJ" },
];

export default function GymLuna() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [activeTesti, setActiveTesti] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", goal: "" });
  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTesti(p => (p + 1) % testimonials.length), 4500);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
    setMenuOpen(false);
  };

  const navSolid = scrollY > 80;

  return (
    <div style={{ background: L.darkest, color: L.white, fontFamily: "'Exo 2', sans-serif", minHeight: "100vh", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@200;300;400;600;700;900&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />

      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:${L.darkest}}
        ::-webkit-scrollbar-thumb{background:${L.mid};border-radius:2px}
        @keyframes fadeUp{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideIn{from{opacity:0;transform:translateX(-24px)}to{opacity:1;transform:translateX(0)}}
        @keyframes ripple{0%{transform:scale(0.95);opacity:0.7}50%{transform:scale(1.08);opacity:0.3}100%{transform:scale(0.95);opacity:0.7}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes shimmer{0%{background-position:200% center}100%{background-position:-200% center}}
        .nav-btn{background:none;border:none;color:${L.mist};font-family:'Exo 2',sans-serif;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;cursor:pointer;padding:8px 0;transition:color 0.3s}
        .nav-btn:hover,.nav-btn.active{color:${L.lightest}}
        .btn-main{background:linear-gradient(135deg,${L.mid},${L.light});color:${L.darkest};border:none;padding:15px 40px;font-family:'Orbitron',sans-serif;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:all 0.3s;clip-path:polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%)}
        .btn-main:hover{background:linear-gradient(135deg,${L.light},${L.lightest});transform:translateY(-3px);box-shadow:0 12px 30px rgba(84,172,191,0.4)}
        .btn-ghost{background:transparent;border:1.5px solid ${L.mid};color:${L.light};padding:13px 36px;font-family:'Orbitron',sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:all 0.3s;clip-path:polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%)}
        .btn-ghost:hover{background:rgba(38,101,140,0.3);border-color:${L.light};color:${L.lightest}}
        .orb{font-family:'Orbitron',sans-serif}
        .tag{display:inline-block;background:rgba(167,235,242,0.08);border:1px solid rgba(167,235,242,0.2);color:${L.lightest};font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:7px 18px;margin-bottom:18px}
        .divider{width:50px;height:2px;background:linear-gradient(90deg,${L.mid},${L.lightest});margin:18px 0 30px}
        .card{background:rgba(2,56,89,0.4);border:1px solid rgba(84,172,191,0.12);backdrop-filter:blur(8px)}
        .card-hover{transition:transform 0.3s,box-shadow 0.3s,border-color 0.3s}
        .card-hover:hover{transform:translateY(-8px);box-shadow:0 24px 60px rgba(38,101,140,0.35);border-color:rgba(84,172,191,0.35) !important}
        .input{width:100%;background:rgba(2,56,89,0.5);border:1px solid rgba(84,172,191,0.2);color:${L.white};padding:14px 18px;font-family:'Exo 2',sans-serif;font-size:15px;outline:none;transition:border-color 0.3s}
        .input:focus{border-color:${L.light}}
        .input::placeholder{color:rgba(123,184,200,0.5)}
        @media(max-width:768px){.desktop-nav{display:none!important}.mob-btn{display:block!important}.hero-grid{grid-template-columns:1fr!important}.about-grid{grid-template-columns:1fr!important}.contact-grid{grid-template-columns:1fr!important}.footer-grid{grid-template-columns:1fr 1fr!important}}
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, background: navSolid ? `rgba(1,28,64,0.97)` : "transparent", borderBottom: navSolid ? `1px solid rgba(84,172,191,0.15)` : "none", transition: "all 0.4s", padding: "0 5%" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 74 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ position: "relative", width: 44, height: 44 }}>
              <div style={{ position: "absolute", inset: 0, border: `2px solid ${L.light}`, borderRadius: "50%", animation: "ripple 3s ease infinite" }} />
              <div style={{ position: "absolute", inset: 6, background: `linear-gradient(135deg,${L.mid},${L.dark})`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="orb" style={{ color: L.lightest, fontSize: 14, fontWeight: 900 }}>AF</span>
              </div>
            </div>
            <div>
              <div className="orb" style={{ fontSize: 20, letterSpacing: 4, color: L.white, lineHeight: 1 }}>AQUAFORGE</div>
              <div style={{ fontSize: 9, color: L.mist, letterSpacing: 3, textTransform: "uppercase" }}>Elite Fitness · Pune</div>
            </div>
          </div>

          <div className="desktop-nav" style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {navItems.map(n => <button key={n} className={`nav-btn ${activeNav === n ? "active" : ""}`} onClick={() => scrollTo(n)}>{n}</button>)}
            <button className="btn-main" style={{ padding: "10px 22px", fontSize: 11 }} onClick={() => scrollTo("Contact")}>Join Now</button>
          </div>

          <button className="mob-btn" style={{ display: "none", background: "none", border: "none", color: L.lightest, fontSize: 26, cursor: "pointer" }} onClick={() => setMenuOpen(p => !p)}>☰</button>
        </div>
        {menuOpen && (
          <div style={{ background: L.darkest, padding: "16px 0", borderTop: `1px solid rgba(84,172,191,0.15)` }}>
            {navItems.map(n => <button key={n} className="nav-btn" style={{ display: "block", padding: "12px 24px", width: "100%", textAlign: "left" }} onClick={() => scrollTo(n)}>{n}</button>)}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="Home" style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1800&h=1000&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.18) saturate(0.6) hue-rotate(180deg)" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, rgba(1,28,64,0.95) 40%, rgba(38,101,140,0.3) 100%)` }} />

        {/* Decorative circles */}
        <div style={{ position: "absolute", right: "-8%", top: "15%", width: 500, height: 500, borderRadius: "50%", border: `1px solid rgba(167,235,242,0.06)`, animation: "float 6s ease infinite" }} />
        <div style={{ position: "absolute", right: "2%", top: "25%", width: 320, height: 320, borderRadius: "50%", border: `1px solid rgba(84,172,191,0.1)`, animation: "float 6s ease 2s infinite" }} />

        <div style={{ position: "relative", zIndex: 1, padding: "130px 5% 80px", maxWidth: 820 }}>
          <div className="tag" style={{ animation: "fadeUp 0.6s ease both" }}>Pune's Most Advanced Fitness Club</div>

          <h1 className="orb" style={{ fontSize: "clamp(44px, 9vw, 100px)", fontWeight: 900, lineHeight: 0.95, letterSpacing: 4, animation: "fadeUp 0.7s ease 0.1s both" }}>
            RISE<br />
            <span style={{ color: L.light }}>BEYOND</span><br />
            <span style={{ fontSize: "0.55em", color: L.mist, letterSpacing: 6 }}>YOUR LIMITS</span>
          </h1>

          <p style={{ color: L.mist, fontSize: "clamp(15px,1.8vw,18px)", maxWidth: 500, lineHeight: 1.8, margin: "28px 0 44px", fontWeight: 300, animation: "fadeUp 0.7s ease 0.2s both" }}>
            Where science meets sweat. Train with Pune's top coaches, recover faster, and unlock performance you never knew existed.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "fadeUp 0.7s ease 0.3s both" }}>
            <button className="btn-main" onClick={() => scrollTo("Contact")}>Start Free Trial</button>
            <button className="btn-ghost" onClick={() => scrollTo("Classes")}>View Schedule</button>
          </div>

          <div style={{ display: "flex", gap: 48, marginTop: 72, flexWrap: "wrap", animation: "fadeUp 0.7s ease 0.5s both" }}>
            {stats.map(s => (
              <div key={s.label}>
                <div className="orb" style={{ fontSize: 44, fontWeight: 900, color: L.lightest, lineHeight: 1, background: `linear-gradient(90deg,${L.lightest},${L.light})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
                <div style={{ color: L.mist, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Side image strip */}
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "28%", display: "grid", gridTemplateRows: "1fr 1fr 1fr" }}>
          {[
            "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
          ].map((src, i) => (
            <div key={i} style={{ overflow: "hidden", opacity: 0.5 }}>
              <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.4) hue-rotate(180deg)" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="About" style={{ padding: "100px 5%", background: `linear-gradient(180deg, ${L.darkest} 0%, rgba(2,56,89,0.3) 100%)` }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=620&h=700&fit=crop" alt="Gym" style={{ width: "100%", height: 560, objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", top: -16, left: -16, right: 16, bottom: 16, border: `1px solid rgba(84,172,191,0.2)`, pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -24, right: -24, background: `linear-gradient(135deg,${L.dark},${L.mid})`, padding: "28px 36px", border: `1px solid rgba(167,235,242,0.2)` }}>
              <div className="orb" style={{ fontSize: 48, fontWeight: 900, color: L.lightest, lineHeight: 1 }}>4.9★</div>
              <div style={{ fontSize: 11, letterSpacing: 2, color: L.mist, textTransform: "uppercase", marginTop: 4 }}>Google Rating</div>
            </div>
          </div>

          <div>
            <div className="tag">Why AquaForge</div>
            <h2 className="orb" style={{ fontSize: "clamp(36px,6vw,70px)", fontWeight: 900, lineHeight: 0.95, letterSpacing: 3 }}>
              BUILT TO<br /><span style={{ color: L.light }}>DOMINATE</span>
            </h2>
            <div className="divider" />
            <p style={{ color: L.mist, lineHeight: 1.9, fontSize: 15, marginBottom: 40, fontWeight: 300 }}>
              AquaForge blends elite gym infrastructure with Pune's first integrated aqua-fitness studio. Science-backed programming, world-class coaches, and a tribe of high-achievers await you.
            </p>
            {features.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 18, marginBottom: 22 }} className="card-hover">
                <div style={{ width: 50, height: 50, background: `rgba(38,101,140,0.25)`, border: `1px solid rgba(84,172,191,0.2)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: 0.5, marginBottom: 4, color: L.white }}>{f.title}</div>
                  <div style={{ color: L.mist, fontSize: 13, lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES */}
      <section id="Classes" style={{ padding: "100px 5%", background: `rgba(2,56,89,0.15)` }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="tag">Weekly Schedule</div>
          <h2 className="orb" style={{ fontSize: "clamp(38px,6vw,72px)", fontWeight: 900, letterSpacing: 4 }}>TODAY'S <span style={{ color: L.light }}>CLASSES</span></h2>
          <div className="divider" style={{ margin: "18px auto 0" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
          {classes.map((c, i) => (
            <div key={i} className="card card-hover" style={{ padding: "24px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", borderLeft: `3px solid ${L.mid}` }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span className="orb" style={{ fontSize: 18, fontWeight: 700, color: L.white, letterSpacing: 1 }}>{c.name}</span>
                  <span style={{ background: `rgba(38,101,140,0.4)`, border: `1px solid rgba(84,172,191,0.2)`, color: L.light, fontSize: 10, fontWeight: 700, letterSpacing: 2, padding: "3px 10px" }}>{c.tag}</span>
                </div>
                <div style={{ color: L.mist, fontSize: 13, marginBottom: 4 }}>Trainer: <span style={{ color: L.light }}>{c.trainer}</span></div>
                <div style={{ color: L.mist, fontSize: 12 }}>{c.duration}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="orb" style={{ fontSize: 28, fontWeight: 700, color: L.lightest }}>{c.time}</div>
                <div style={{ fontSize: 11, color: c.slots <= 4 ? L.light : L.mist, letterSpacing: 1, marginBottom: 8 }}>{c.slots} slots left</div>
                <button className="btn-ghost" style={{ padding: "7px 18px", fontSize: 10 }}>Book</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRAINERS */}
      <section id="Trainers" style={{ padding: "100px 5%", background: L.darkest }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="tag">Meet The Team</div>
          <h2 className="orb" style={{ fontSize: "clamp(38px,6vw,72px)", fontWeight: 900, letterSpacing: 4 }}>ELITE <span style={{ color: L.light }}>COACHES</span></h2>
          <div className="divider" style={{ margin: "18px auto 0" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 24 }}>
          {trainers.map((t, i) => (
            <div key={i} className="card card-hover" style={{ overflow: "hidden" }}>
              <div style={{ position: "relative" }}>
                <img src={t.img} alt={t.name} style={{ width: "100%", height: 290, objectFit: "cover", display: "block", filter: "saturate(0.8)", transition: "transform 0.5s,filter 0.5s" }}
                  onMouseEnter={e => { e.target.style.transform = "scale(1.07)"; e.target.style.filter = "saturate(1.1)"; }}
                  onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.filter = "saturate(0.8)"; }} />
                <div style={{ position: "absolute", top: 12, right: 12, background: `rgba(38,101,140,0.9)`, border: `1px solid rgba(167,235,242,0.3)`, padding: "4px 14px" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: L.lightest }}>{t.exp}</span>
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: `linear-gradient(transparent, rgba(1,28,64,0.9))` }} />
              </div>
              <div style={{ padding: "20px 22px 26px" }}>
                <div className="orb" style={{ fontSize: 19, fontWeight: 700, letterSpacing: 2, marginBottom: 5, color: L.white }}>{t.name}</div>
                <div style={{ color: L.light, fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 }}>{t.role}</div>
                <div style={{ width: 28, height: 2, background: `linear-gradient(90deg,${L.mid},${L.light})`, marginBottom: 14 }} />
                <button className="btn-ghost" style={{ width: "100%", fontSize: 11, padding: "9px" }}>View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="Pricing" style={{ padding: "100px 5%", background: `linear-gradient(180deg,rgba(2,56,89,0.25),${L.darkest})` }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="tag">Membership Plans</div>
          <h2 className="orb" style={{ fontSize: "clamp(38px,6vw,72px)", fontWeight: 900, letterSpacing: 4 }}>CHOOSE YOUR <span style={{ color: L.light }}>WAVE</span></h2>
          <div className="divider" style={{ margin: "18px auto 0" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, maxWidth: 1020, margin: "0 auto" }}>
          {plans.map((p, i) => (
            <div key={i} className="card-hover" style={{ background: p.hot ? `linear-gradient(160deg,rgba(38,101,140,0.5),rgba(2,56,89,0.6))` : `rgba(2,56,89,0.25)`, border: p.hot ? `1.5px solid ${L.mid}` : `1px solid rgba(84,172,191,0.1)`, padding: "44px 36px", position: "relative", backdropFilter: "blur(12px)" }}>
              {p.hot && <div style={{ position: "absolute", top: -15, left: "50%", transform: "translateX(-50%)", background: `linear-gradient(90deg,${L.mid},${L.light})`, color: L.darkest, padding: "6px 28px", fontSize: 10, fontWeight: 900, letterSpacing: 3, textTransform: "uppercase", whiteSpace: "nowrap" }}>Most Popular</div>}
              <div className="orb" style={{ fontSize: 26, fontWeight: 900, letterSpacing: 4, color: L.mist, marginBottom: 6 }}>{p.name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
                <span className="orb" style={{ fontSize: 58, fontWeight: 900, color: p.hot ? L.lightest : L.white, lineHeight: 1 }}>{p.price}</span>
                <span style={{ color: L.mist, fontSize: 14 }}>/month</span>
              </div>
              <div style={{ color: L.mist, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", marginBottom: 28 }}>{p.desc}</div>
              <div style={{ borderTop: `1px solid rgba(84,172,191,0.12)`, paddingTop: 24, marginBottom: 32 }}>
                {p.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 13 }}>
                    <div style={{ width: 18, height: 18, background: `rgba(38,101,140,0.4)`, border: `1px solid rgba(84,172,191,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: L.lightest, fontSize: 10 }}>✓</span>
                    </div>
                    <span style={{ color: L.mist, fontSize: 14 }}>{f}</span>
                  </div>
                ))}
              </div>
              <button className={p.hot ? "btn-main" : "btn-ghost"} style={{ width: "100%", fontSize: 12 }} onClick={() => scrollTo("Contact")}>Get Started</button>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="Gallery" style={{ padding: "100px 5%", background: L.darkest }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="tag">Inside AquaForge</div>
          <h2 className="orb" style={{ fontSize: "clamp(38px,6vw,72px)", fontWeight: 900, letterSpacing: 4 }}>OUR <span style={{ color: L.light }}>WORLD</span></h2>
          <div className="divider" style={{ margin: "18px auto 0" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "260px 260px", gap: 12 }}>
          {gallery.map((g, i) => (
            <div key={i} style={{ overflow: "hidden", position: "relative", gridColumn: i === 0 || i === 3 ? "span 2" : "span 1" }} className="card-hover">
              <img src={g.img} alt={g.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.65) saturate(0.7) hue-rotate(160deg)", transition: "transform 0.5s,filter 0.5s" }}
                onMouseEnter={e => { e.target.style.transform = "scale(1.06)"; e.target.style.filter = "brightness(0.85) saturate(1) hue-rotate(160deg)"; }}
                onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.filter = "brightness(0.65) saturate(0.7) hue-rotate(160deg)"; }} />
              <div style={{ position: "absolute", bottom: 16, left: 20 }}>
                <span style={{ background: `rgba(1,28,64,0.85)`, border: `1px solid rgba(84,172,191,0.3)`, color: L.lightest, fontSize: 11, fontWeight: 700, letterSpacing: 2, padding: "5px 14px" }}>{g.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "100px 5%", background: `rgba(2,56,89,0.15)` }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="tag">Success Stories</div>
          <h2 className="orb" style={{ fontSize: "clamp(38px,6vw,72px)", fontWeight: 900, letterSpacing: 4 }}>REAL <span style={{ color: L.light }}>RESULTS</span></h2>
          <div className="divider" style={{ margin: "18px auto 0" }} />
        </div>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ display: i === activeTesti ? "block" : "none", background: `rgba(2,56,89,0.4)`, border: `1px solid rgba(84,172,191,0.15)`, borderLeft: `4px solid ${L.mid}`, padding: "48px 48px 40px", animation: "slideIn 0.5s ease", backdropFilter: "blur(10px)" }}>
              <div className="orb" style={{ fontSize: 24, fontWeight: 700, color: L.lightest, marginBottom: 14 }}>{t.result}</div>
              <p style={{ color: L.mist, fontSize: 17, lineHeight: 1.8, fontStyle: "italic", marginBottom: 32, fontWeight: 300 }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <div style={{ width: 52, height: 52, background: `linear-gradient(135deg,${L.dark},${L.mid})`, border: `1px solid rgba(167,235,242,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, borderRadius: "50%", color: L.lightest }}>{t.avatar}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: L.white }}>{t.name}</div>
                  <div style={{ color: L.mist, fontSize: 12, letterSpacing: 1 }}>AquaForge Member</div>
                </div>
              </div>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTesti(i)} style={{ width: i === activeTesti ? 32 : 10, height: 10, background: i === activeTesti ? L.light : `rgba(84,172,191,0.25)`, border: "none", cursor: "pointer", transition: "all 0.3s" }} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="Contact" style={{ padding: "100px 5%", background: L.darkest }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <div>
            <div className="tag">Get In Touch</div>
            <h2 className="orb" style={{ fontSize: "clamp(36px,5vw,68px)", fontWeight: 900, lineHeight: 0.95, letterSpacing: 3 }}>START YOUR<br /><span style={{ color: L.light }}>JOURNEY</span></h2>
            <div className="divider" />
            <p style={{ color: L.mist, lineHeight: 1.9, fontSize: 15, marginBottom: 40, fontWeight: 300 }}>Book a free trial session and experience why 3,200+ Punekars chose AquaForge as their second home.</p>
            {[
              { icon: "📍", label: "Location", value: "Kalyani Nagar, Pune 411006" },
              { icon: "📞", label: "Phone", value: "+91 98765 43210" },
              { icon: "✉️", label: "Email", value: "hello@aquaforgepune.com" },
              { icon: "🕐", label: "Hours", value: "Mon–Sat 5am–10pm · Sun 6am–8pm" },
            ].map(c => (
              <div key={c.label} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                <span style={{ fontSize: 20, marginTop: 2 }}>{c.icon}</span>
                <div>
                  <div style={{ color: L.light, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 3 }}>{c.label}</div>
                  <div style={{ color: L.mist, fontSize: 14 }}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: `rgba(2,56,89,0.4)`, border: `1px solid rgba(84,172,191,0.15)`, padding: 44, backdropFilter: "blur(12px)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "50px 0" }}>
                <div className="orb" style={{ fontSize: 64, color: L.lightest, marginBottom: 8 }}>✓</div>
                <div className="orb" style={{ fontSize: 32, letterSpacing: 4, marginBottom: 12 }}>ALL SET!</div>
                <p style={{ color: L.mist, fontSize: 15 }}>We'll call you within 2 hours to confirm your free session!</p>
                <button className="btn-main" style={{ marginTop: 28 }} onClick={() => setSubmitted(false)}>Book Another</button>
              </div>
            ) : (
              <>
                <h3 className="orb" style={{ fontSize: 24, letterSpacing: 4, marginBottom: 28, color: L.white }}>FREE TRIAL SESSION</h3>
                <div style={{ display: "grid", gap: 16 }}>
                  <input className="input" placeholder="Full Name *" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
                  <input className="input" type="email" placeholder="Email Address *" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
                  <input className="input" placeholder="Phone Number" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                  <select className="input" value={form.goal} onChange={e => setForm(p => ({ ...p, goal: e.target.value }))} style={{ background: `rgba(2,56,89,0.5)` }}>
                    <option value="" style={{ background: L.darkest }}>Select Your Goal</option>
                    <option value="weight" style={{ background: L.darkest }}>Weight Loss</option>
                    <option value="muscle" style={{ background: L.darkest }}>Build Muscle</option>
                    <option value="fitness" style={{ background: L.darkest }}>General Fitness</option>
                    <option value="sport" style={{ background: L.darkest }}>Sports Training</option>
                    <option value="aqua" style={{ background: L.darkest }}>Aqua Fitness</option>
                  </select>
                  <button className="btn-main" style={{ marginTop: 8, fontSize: 13 }} onClick={() => form.name && form.email && setSubmitted(true)}>Book Free Trial →</button>
                </div>
                <p style={{ color: `rgba(123,184,200,0.5)`, fontSize: 12, marginTop: 16, textAlign: "center", letterSpacing: 1 }}>No credit card required · Cancel anytime</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: `rgba(1,20,48,1)`, borderTop: `1px solid rgba(84,172,191,0.12)`, padding: "64px 5% 32px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div className="orb" style={{ fontSize: 28, letterSpacing: 6, marginBottom: 14, color: L.white }}>AQUAFORGE</div>
            <p style={{ color: L.mist, fontSize: 13, lineHeight: 1.9, maxWidth: 270, fontWeight: 300 }}>Pune's premier aqua-fitness and strength training facility. Where champions are forged.</p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {["📱", "📸", "▶️", "💼"].map((icon, i) => (
                <div key={i} style={{ width: 38, height: 38, background: `rgba(38,101,140,0.2)`, border: `1px solid rgba(84,172,191,0.2)`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 15, transition: "all 0.3s" }}>{icon}</div>
              ))}
            </div>
          </div>
          {[
            { title: "Quick Links", links: ["Home", "Classes", "Trainers", "Pricing", "Gallery"] },
            { title: "Services", links: ["Aqua Fitness", "Strength Training", "Yoga & Mindfulness", "Cryo Recovery", "Sports Coaching"] },
            { title: "Support", links: ["FAQ", "Contact Us", "Membership Terms", "Privacy Policy", "Careers"] },
          ].map(col => (
            <div key={col.title}>
              <div className="orb" style={{ fontSize: 14, letterSpacing: 3, marginBottom: 20, color: L.light }}>{col.title}</div>
              {col.links.map(link => (
                <div key={link} style={{ color: L.mist, fontSize: 13, marginBottom: 10, cursor: "pointer", transition: "color 0.3s" }}
                  onMouseEnter={e => e.target.style.color = L.lightest} onMouseLeave={e => e.target.style.color = L.mist}>{link}</div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop: `1px solid rgba(84,172,191,0.08)`, paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ color: L.mist, fontSize: 12, letterSpacing: 1 }}>© 2025 AquaForge Gym. All rights reserved.</div>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: `rgba(123,184,200,0.5)`, fontSize: 10, letterSpacing: 3, textTransform: "uppercase" }}>Designed & Developed by</div>
            <div className="orb" style={{ fontSize: 20, letterSpacing: 4, color: L.light, fontWeight: 900 }}>TAKSHAK GHAGI</div>
            <div style={{ color: L.mist, fontSize: 10, letterSpacing: 3, textTransform: "uppercase" }}>TG Tech Solution</div>
          </div>
          <div style={{ color: L.mist, fontSize: 12 }}>Kalyani Nagar, Pune 411006</div>
        </div>
      </footer>
    </div>
  );
}