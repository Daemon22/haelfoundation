/*
 * HAEL Verdant Archive reminder: asymmetric field-guide layout, ivory paper ground,
 * canopy green and harvest gold accents, DM Serif Display + Manrope hierarchy,
 * and motion that reveals a living system rather than decorating it.
 */
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleArrowOutUpRight,
  Leaf,
  Menu,
  MoveRight,
  Sprout,
  X,
} from "lucide-react";
import { toast } from "sonner";

const SUPPLIED_EMBLEM = "/manus-storage/hael-supplied-emblem_96fd421f.png";
const HERO_ART = "/manus-storage/hael-live-tree-hero_0b4d16d5.jpg";
const ROOTS_ART = "/manus-storage/hael-roots-field_75b51709.jpg";
const FLOW_ART = "/manus-storage/hael-circular-flow_bcd04058.jpg";

const treeLayers = [
  {
    id: "roots",
    number: "01",
    label: "Roots",
    title: "Where memory keeps us alive.",
    description:
      "Land, agriculture, ancestry, culture, language, nature, and indigenous knowledge are not a prologue. They are the living substrate from which capability grows.",
    tags: ["Land", "Agriculture", "Ancestry", "Culture", "Language", "Nature"],
  },
  {
    id: "trunk",
    number: "02",
    label: "Trunk",
    title: "A shared architecture for movement.",
    description:
      "HAEL Foundation and Orren form the trunk: shared communication, coordination, and sovereign infrastructure that let the wider system move with coherence.",
    tags: ["HAEL Foundation", "Orren", "Coordination", "Infrastructure"],
  },
  {
    id: "branches",
    number: "03",
    label: "Branches",
    title: "Every enterprise has a place to grow.",
    description:
      "Businesses, industry, commerce, services, technology, science, research, education, and innovation are branches of one ecosystem—not competing silos.",
    tags: ["Businesses", "Industry", "Commerce", "Technology", "Research", "Education"],
  },
  {
    id: "canopy",
    number: "04",
    label: "Canopy",
    title: "A wider field of participation.",
    description:
      "Markets, institutions, collaboration, and new possibilities form the canopy: the part of the system that can meet the world without losing its roots.",
    tags: ["Markets", "Institutions", "Collaboration", "Possibility"],
  },
];

const flowStages = [
  { id: "primary", number: "01", label: "Primary", copy: "Agriculture, farming, livestock, fisheries, forestry, and natural resources.", color: "green" },
  { id: "secondary", number: "02", label: "Secondary", copy: "Processing, manufacturing, fabrication, construction, and transformation.", color: "gold" },
  { id: "tertiary", number: "03", label: "Tertiary", copy: "Retail, commerce, logistics, finance, services, and businesses.", color: "ink" },
  { id: "quaternary", number: "04", label: "Quaternary", copy: "Science, research, engineering, technology, education, intelligence, and innovation.", color: "green" },
  { id: "return", number: "05", label: "Return", copy: "Knowledge, technology, capital, tools, and improved capability return to the roots.", color: "gold" },
];

const navItems = [
  { label: "The idea", href: "#idea" },
  { label: "The tree", href: "#tree" },
  { label: "The cycle", href: "#cycle" },
  { label: "Participate", href: "#participate" },
];

function scrollToId(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "wordmark wordmark--compact" : "wordmark"}>
      <img src={SUPPLIED_EMBLEM} alt="" aria-hidden="true" />
      <span>HAEL</span><Diamond />
    </div>
  );
}

function Diamond() {
  return <span className="diamond" aria-hidden="true" />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFlow, setActiveFlow] = useState("primary");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);

  const activeLayer = treeLayers[1];
  const activeStage = useMemo(
    () => flowStages.find((stage) => stage.id === activeFlow) ?? flowStages[0],
    [activeFlow],
  );

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    toast.success("You’re on the listening list.");
  };

  return (
    <div className="site-shell">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="HAEL Foundation home">
          <Wordmark />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <button className="header-cta" onClick={() => scrollToId("#participate")}>
          Join the circle <ArrowRight size={15} strokeWidth={1.5} />
        </button>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <button onClick={() => { setMenuOpen(false); scrollToId("#participate"); }}>Join the circle <ArrowRight size={15} /></button>
          </div>
        )}
      </header>

      <main id="top">
        <aside className="field-spine" aria-label="Field journal chapters">
          <span className="field-spine-title">HAEL / FIELD JOURNAL</span>
          <a href="#idea" className="field-spine-item is-active"><span>01</span><i>Premise</i></a>
          <a href="#tree" className="field-spine-item"><span>02</span><i>Living tree</i></a>
          <a href="#cycle" className="field-spine-item"><span>03</span><i>Circular flow</i></a>
          <a href="#participate" className="field-spine-item"><span>04</span><i>Participation</i></a>
          <span className="field-spine-end">◇</span>
        </aside>
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-land-memory" aria-hidden="true"><span /><span /><span /><span /></div>
          <div className="hero-copy">
            <div className="eyebrow reveal"><Diamond /> A living foundation / 001</div>
            <h1 id="hero-heading" className="reveal reveal-delay-1">
              We are the generation <em>that remembers.</em>
            </h1>
            <p className="hero-intro reveal reveal-delay-2">
              HAEL is a living architecture for the people, knowledge, production, and possibilities that move through us.
            </p>
            <div className="hero-actions reveal reveal-delay-3">
              <button className="button button--dark" onClick={() => scrollToId("#tree")}>Enter the living tree <ArrowDown size={15} /></button>
              <button className="text-link" onClick={() => scrollToId("#idea")}>Read the premise <MoveRight size={16} /></button>
            </div>
            <div className="hero-footnote reveal reveal-delay-4">
              <span>01 / 04</span><span className="footnote-line" /><span>Roots · Trunk · Branches · Canopy</span>
            </div>
          </div>
          <div className="hero-art-wrap reveal reveal-delay-2">
            <div className="hero-art-frame">
              <img src={HERO_ART} alt="A living tree with roots and fine gold circuit-like lines" />
              <div className="hero-art-caption"><span>Fig. 01</span><span>A living system</span></div>
            </div>
            <div className="emblem-card">
              <img src={SUPPLIED_EMBLEM} alt="HAEL emblem: a green and gold tree within a circular frame" />
            </div>
            <div className="orbit-note orbit-note--top">ROOT / LAND / MEMORY</div>
            <div className="orbit-note orbit-note--bottom">HAEL FOUNDATION <span>◇</span> 2026</div>
          </div>
        </section>

        <div className="marquee-band" aria-label="HAEL Foundation principles">
          <div className="marquee-track">
            {["Remember", "Root", "Build", "Trade", "Discover", "Return", "Remember", "Root", "Build", "Trade", "Discover", "Return"].map((item, index) => (
              <span key={`${item}-${index}`}>{item}<Diamond /></span>
            ))}
          </div>
        </div>
        <div className="section-connector section-connector--light" aria-hidden="true"><span /><span /><span /></div>

        <section id="idea" className="idea-section section-pad">
          <div className="section-aside reveal"><span className="chapter-number">02</span><span className="vertical-rule" /><span className="vertical-label">The premise</span></div>
          <div className="idea-content">
            <div className="eyebrow reveal"><Diamond /> Not a repair mechanism</div>
            <h2 className="reveal reveal-delay-1">Africa is a living system.<br /><em>HAEL is part of its next layer.</em></h2>
            <div className="idea-columns reveal reveal-delay-2">
              <p>We remember where we come from: the land, the knowledge, the languages, the people, and what was built before us.</p>
              <p>Then we reconnect those roots to shared infrastructure, productive enterprise, research, and a future that can return more than it takes.</p>
            </div>
            <div className="quote-line reveal reveal-delay-3"><span>“</span><p>The question is not which sector HAEL approves of. It is how an enterprise participates in the living system.</p></div>
          </div>
        </section>

        <section id="tree" className="tree-section section-pad section-dark" aria-labelledby="tree-heading">
          <div className="sovereign-mark" aria-hidden="true"><span /><span /><span /><b>HAEL</b></div>
          <div className="tree-section-header reveal">
            <div><div className="eyebrow eyebrow--light"><Diamond /> The living tree / 02</div><h2 id="tree-heading">Identity is not a diagram.<br /><em>It is a way of moving.</em></h2></div>
            <p>Four layers. One organism. Explore the structure HAEL is building with the generation that remembers.</p>
          </div>
          <div className="tree-layout">
            <div className="tree-illustration reveal reveal-delay-1">
              <div className="live-tree-scene">
                <img src={HERO_ART} alt="A monumental living tree rooted in sunlit earth" />
                <div className="live-tree-wash" />

                <div className="live-tree-caption"><span>Fig. 03</span><strong>A living architecture</strong></div>
              </div>
              <div className="tree-halo" />
              <svg viewBox="0 0 520 660" role="img" aria-label="A stylized living tree with roots, trunk, branches, and canopy">
                <defs>
                  <linearGradient id="trunkGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#c69537" /><stop offset="0.32" stopColor="#eff0b0" /><stop offset="0.55" stopColor="#19814b" /><stop offset="1" stopColor="#0b3827" /></linearGradient>
                  <filter id="softGlow"><feGaussianBlur stdDeviation="7" /></filter>
                </defs>
                <ellipse cx="260" cy="590" rx="190" ry="31" fill="#c69537" opacity=".16" filter="url(#softGlow)" />
                <g className="svg-roots" fill="none" stroke="#c69537" strokeWidth="3" strokeLinecap="round">
                  <path d="M258 470 C238 514 199 548 114 598" /><path d="M269 474 C291 520 342 554 419 598" /><path d="M253 484 C237 531 228 563 223 606" /><path d="M277 485 C300 533 304 569 319 606" /><path d="M242 482 C214 515 167 526 74 540" /><path d="M285 485 C329 512 373 521 448 541" />
                </g>
                <g fill="none" stroke="#1e8954" strokeWidth="4" strokeLinecap="round">
                  <path d="M260 500 C256 430 254 366 258 276 C261 210 259 156 259 81" /><path d="M256 290 C228 250 194 224 153 184" /><path d="M260 307 C291 259 323 222 360 178" /><path d="M257 243 C221 215 205 180 187 144" /><path d="M262 225 C301 198 323 159 340 120" />
                </g>
                <g fill="none" stroke="#c69537" strokeWidth="2" opacity=".9">
                  <path d="M259 281 C215 246 175 232 104 226" /><path d="M263 314 C320 280 357 258 426 254" /><path d="M257 207 C217 176 178 154 131 152" /><path d="M264 195 C308 169 339 146 397 131" />
                  <circle cx="106" cy="226" r="8" fill="#f3e9c7" /><circle cx="426" cy="254" r="8" fill="#f3e9c7" /><circle cx="131" cy="152" r="8" fill="#f3e9c7" /><circle cx="397" cy="131" r="8" fill="#f3e9c7" />
                </g>
                <g className="svg-leaves" fill="#1e8954" stroke="#e8c660" strokeWidth="1.6">
                  <path d="M258 75 C226 50 234 21 260 9 C286 29 284 56 258 75Z" /><path d="M153 182 C116 170 111 140 127 117 C157 119 173 143 153 182Z" /><path d="M360 178 C393 169 403 140 389 113 C359 120 345 146 360 178Z" /><path d="M101 226 C67 216 59 188 73 166 C103 168 120 196 101 226Z" /><path d="M427 254 C460 240 472 213 460 189 C430 194 413 220 427 254Z" /><path d="M186 144 C160 122 165 94 186 79 C210 94 213 119 186 144Z" /><path d="M339 120 C365 96 361 69 341 54 C316 70 313 95 339 120Z" />
                </g>
                <g fill="#eff0b0" opacity=".8"><circle cx="258" cy="81" r="4" /><circle cx="153" cy="184" r="4" /><circle cx="360" cy="178" r="4" /><circle cx="104" cy="226" r="4" /><circle cx="426" cy="254" r="4" /></g>
              </svg>
              <div className="tree-legend"><span><i className="legend-dot legend-dot--gold" />Knowledge</span><span><i className="legend-dot legend-dot--green" />Capability</span></div>
            </div>
            <div className="tree-explorer reveal reveal-delay-2">
              <div className="tree-tabs" aria-label="Living tree layers">
                {treeLayers.map((layer) => (
                  <div key={layer.id} className={layer.id === "trunk" ? "tree-tab tree-tab--static is-active" : "tree-tab tree-tab--static"}>
                    <span>{layer.number}</span>{layer.label}
                  </div>
                ))}
              </div>
              <div className="tree-panel" key={activeLayer.id}>
                <div className="panel-kicker">Layer {activeLayer.number} / {activeLayer.label}</div>
                <h3>{activeLayer.title}</h3>
                <p>{activeLayer.description}</p>
                <div className="tag-list">{activeLayer.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="tree-signature"><span>HAEL</span><Diamond /><span className="signature-line" /><span>ROOTED IN POSSIBILITY</span></div>
            </div>
          </div>
        </section>
        <div className="section-connector section-connector--dark" aria-hidden="true"><span /><span /><span /></div>

        <section id="cycle" className="cycle-section section-pad" aria-labelledby="cycle-heading">
          <div className="cycle-intro reveal">
            <div className="eyebrow"><Diamond /> The circular flow / 03</div>
            <h2 id="cycle-heading">Value does not leave.<br /><em>It returns with more life.</em></h2>
            <p>From primary production to research and back again, the system is designed to regenerate its own capability.</p>
            <div className="image-frame image-frame--small"><img src={FLOW_ART} alt="A conceptual circular landscape moving from fields to making, commerce, and research" /><span>Fig. 02 / Circulation</span></div>
          </div>
          <div className="cycle-explorer reveal reveal-delay-1">
            <div className="cycle-orbit" aria-hidden="true"><div className="orbit-ring orbit-ring--outer" /><div className="orbit-ring orbit-ring--inner" /><div className="orbit-center"><Sprout size={26} strokeWidth={1.2} /><span>RETURN<br />TO ROOTS</span></div>{flowStages.map((stage, index) => <span key={stage.id} className={`orbit-node orbit-node--${index + 1}`}><i className={`orbit-node-dot orbit-node-dot--${stage.color}`} />{stage.number}</span>)}</div>
            <div className="flow-list" role="tablist" aria-label="Circular flow stages">
              {flowStages.map((stage) => (
                <button key={stage.id} role="tab" aria-selected={activeFlow === stage.id} className={activeFlow === stage.id ? "flow-item is-active" : "flow-item"} onClick={() => setActiveFlow(stage.id)}>
                  <span className="flow-num">{stage.number}</span><span className="flow-label">{stage.label}</span><span className="flow-copy">{stage.copy}</span><ArrowRight className="flow-arrow" size={17} />
                </button>
              ))}
            </div>
            <div className="flow-note"><div className={`flow-note-mark flow-note-mark--${activeStage.color}`}><Leaf size={19} /></div><div><span className="panel-kicker">Now tracing</span><strong>{activeStage.label}</strong><p>{activeStage.copy}</p></div></div>
          </div>
        </section>
        <div className="section-connector section-connector--light" aria-hidden="true"><span /><span /><span /></div>

        <section className="remember-section section-dark section-pad" aria-label="Remember and return narrative">
          <div className="remember-image reveal"><img src={ROOTS_ART} alt="Cultivated land and roots in warm morning light" /><div className="image-stamp">HAEL / FIELD NOTE 001</div></div>
          <div className="remember-copy reveal reveal-delay-1"><div className="eyebrow eyebrow--light"><Diamond /> A public narrative</div><p className="remember-statement">We remember.<br />We root.<br /><em>We build.</em></p><div className="remember-body"><p>We trade. We discover. We return what we have learned to the roots that made the work possible.</p><button className="button button--cream" onClick={() => scrollToId("#participate")}>Find your place in the cycle <ArrowRight size={15} /></button></div></div>
        </section>
        <div className="section-connector section-connector--dark" aria-hidden="true"><span /><span /><span /></div>

        <section id="participate" className="participate-section section-pad">
          <div className="section-aside reveal"><span className="chapter-number">04</span><span className="vertical-rule" /><span className="vertical-label">Participation</span></div>
          <div className="participate-content">
            <div className="participate-copy reveal"><div className="eyebrow"><Diamond /> No wrong domain</div><h2>Bring the work<br /><em>you already do.</em></h2><p>A farm, supermarket, clothing business, construction company, laboratory, transport service, restaurant, manufacturer, research institution, or technology company can participate.</p><p className="participate-question">The question is simple: <strong>how does your enterprise move through the living system?</strong></p></div>
            <div className="participate-form-card reveal reveal-delay-1"><div className="form-card-top"><span className="panel-kicker">Open circle / 2026</span><CircleArrowOutUpRight size={21} strokeWidth={1.2} /></div><h3>Stay close to the next layer.</h3><p>Receive occasional field notes on the people, enterprises, and ideas extending the HAEL ecosystem.</p>{submitted ? <div className="form-success"><Check size={19} /><span>Thank you. We’ll keep the circle warm.</span></div> : <form onSubmit={handleSubmit}><label htmlFor="email">Your email address</label><div className="input-row"><input id="email" type="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} /><button className="button button--dark" type="submit" aria-label="Join the circle"><ArrowRight size={17} /></button></div><small>No noise. No borrowed urgency. Just the signal when it matters.</small></form>}</div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main"><Wordmark compact /><p>We are the generation<br /><em>that remembers.</em></p><div className="footer-links"><a href="#idea">The idea</a><a href="#tree">The tree</a><a href="#cycle">The cycle</a><a href="#participate">Participate</a></div></div>
        <div className="footer-bottom"><span>© 2026 HAEL Foundation</span><span>Rooted in possibility <Diamond /></span><span>Made for the living system</span></div>
      </footer>
    </div>
  );
}
