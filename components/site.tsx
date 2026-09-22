"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SiteTools } from "@/components/cogriss";
import { PortfolioGrid } from "@/components/portfolio";
import { services } from "@/lib/content";
export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Cogriss home">
        <Image src="/favicon.svg" alt="" width={34} height={34} />
        <span>
          cogriss<span className="brand-period">.</span>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/services">Services</Link>
        <Link href="/work">Work</Link>
        <Link href="/industries">Industries</Link>
        <Link href="/process">Process</Link>
        <Link href="/about">About</Link>
      </nav>
      <div className="header-tools">
        <SiteTools />
        <Link className="pill header-cta" href="/contact">
          Get a quote <ArrowUpRight size={17} />
        </Link>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="mobile-menu" aria-label="Open navigation">
            <Menu />
          </button>
        </DialogTrigger>
        <DialogContent className="menu-dialog">
          <DialogTitle>Explore Cogriss</DialogTitle>
          <DialogDescription>From idea to scale.</DialogDescription>
          {[
            ["Services", "/services"],
            ["Work", "/work"],
            ["Industries", "/industries"],
            ["Process", "/process"],
            ["Pricing", "/pricing"],
            ["About", "/about"],
            ["Insights", "/blog"],
            ["Get a quote", "/contact"],
          ].map(([t, h]) => (
            <DialogClose asChild key={h}>
              <Link href={h}>
                {t}
                <ArrowUpRight />
              </Link>
            </DialogClose>
          ))}
        </DialogContent>
      </Dialog>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Link href="/" className="footer-logo">
          cogriss<span>.</span>
        </Link>
        <p>
          Design. Build. Launch. Scale.
          <br />
          Your next chapter starts here.
        </p>
        <div>
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Insights</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="legal-links">
        {[
          ["Privacy policy", "privacy-policy"],
          ["Terms of use", "terms-of-service"],
          ["Cookie policy", "cookie-policy"],
          ["Refund policy", "refund-policy"],
        ].map(([t, s]) => (
          <Link href={"/legal/" + s} key={s}>
            {t}
          </Link>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Cogriss</span>
        <span>Technology that moves your business forward.</span>
        <span>Development preview · Portfolio content</span>
      </div>
    </footer>
  );
}
export function CTA() {
  return (
    <section className="cta-section">
      <div className="eyebrow">GREAT THINGS START WITH A CONVERSATION</div>
      <Link href="/contact" className="big-cta">
        Have a vision?
        <br />
        <span>Let’s build it.</span>
        <ArrowUpRight aria-hidden="true" />
      </Link>
      <p>Tell us what you’re thinking. We’ll help you find the next step.</p>
    </section>
  );
}
export function Reveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("seen");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((x) => io.observe(x));
    return () => io.disconnect();
  }, []);
  return null;
}
export function ProjectVisual({ kind }: { kind: string }) {
  return (
    <div className={"project-visual " + kind} aria-hidden="true">
      {kind === "learn" ? (
        <div className="learn-ui">
          <div className="learn-nav">
            learnwise<span>My learning / Courses</span>
          </div>
          <div className="learn-body">
            <small>MAKE ROOM FOR YOUR NEXT CHAPTER</small>
            <strong>
              Learn something
              <br />
              that moves you.
            </strong>
            <div className="learn-course">
              <span>01 / DESIGN FOUNDATIONS</span>
              <b>Your next lesson is ready.</b>
              <div className="learn-progress">
                <i />
              </div>
              <span>Course progress · Sample data</span>
            </div>
          </div>
        </div>
      ) : kind === "orbit" ? (
        <div className="orbit-ui">
          <div className="mock-side">
            <b>orbit.</b>
            <span>Overview</span>
            <span>Projects</span>
            <span>Team</span>
            <span>Reports</span>
          </div>
          <div className="mock-main">
            <div className="mock-heading">
              Your work, in focus.<span>+ New project</span>
            </div>
            <p>Monday, September 14</p>
            <div className="mock-stats">
              <div>
                <small>Projects in motion</small>
                <strong>24</strong>
              </div>
              <div>
                <small>Tasks completed</small>
                <strong>86%</strong>
              </div>
            </div>
            <div className="mock-chart">
              <span style={{ height: "30%" }} />
              <span style={{ height: "47%" }} />
              <span style={{ height: "40%" }} />
              <span style={{ height: "66%" }} />
              <span style={{ height: "58%" }} />
              <span style={{ height: "76%" }} />
              <span style={{ height: "92%" }} />
            </div>
            <div className="mock-row">
              Website launch <span>In progress</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="forma-ui">
          <div className="forma-nav">
            <b>forma.</b>
            <span>Objects &nbsp; About &nbsp; Bag (0)</span>
          </div>
          <div className="forma-body">
            <small>LESS, BUT BETTER.</small>
            <strong>
              Everyday.
              <br />
              Extraordinary.
            </strong>
            <div className="forma-rule" />
            <p>
              A considered collection
              <br />
              for the way you live.
            </p>
            <span className="forma-shop">Explore the collection ↗</span>
          </div>
          <div className="forma-bottom">Thoughtfully chosen. Made to stay.</div>
        </div>
      )}
    </div>
  );
}
export function ProjectGrid() {
  return <PortfolioGrid />;
}
export function ServiceList() {
  return (
    <div className="service-list">
      {services.map((s, i) => (
        <Link href={"/services/" + s.slug} key={s.slug}>
          <span className="service-num">0{i + 1}</span>
          <h3>{s.name}</h3>
          <span className="service-short">{s.eyebrow}</span>
          <ArrowUpRight />
        </Link>
      ))}
    </div>
  );
}
export function FAQs() {
  return (
    <Accordion type="single" collapsible className="faq-list">
      {[
        [
          "What happens after I enquire?",
          "We start by understanding your goals, audience and current challenges. Then we agree on scope, priorities and a practical next step.",
        ],
        [
          "Can you work with an existing website or product?",
          "Yes. A focused review helps identify what to improve, what to keep and whether a phased redesign is right for your business.",
        ],
        [
          "How much does a project cost?",
          "Pricing depends on scope, integrations, content and timeline. Share your requirements and budget range so the proposal can match your priorities.",
        ],
        [
          "Will you support the product after launch?",
          "Maintenance, monitoring, fixes and future improvements can be included in an agreed support plan.",
        ],
        [
          "Do you work with clients outside Chennai?",
          "The proposed service model supports remote collaboration across India and internationally, with agreed meeting times and regular progress updates.",
        ],
      ].map(([q, a], i) => (
        <AccordionItem value={"" + i} key={q}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
export function EnquiryForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [prepared, setPrepared] = useState("");
  const [requestedPackage, setRequestedPackage] = useState("");
  useEffect(() => {
    const frame = requestAnimationFrame(() =>
      setRequestedPackage(
        new URLSearchParams(window.location.search).get("package") || "",
      ),
    );
    return () => cancelAnimationFrame(frame);
  }, []);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setPrepared(
      `COGRISS PROJECT ENQUIRY\nPackage: ${requestedPackage || "To discuss"}\nName: ${f.get("name")}\nEmail: ${f.get("email")}\nPhone: ${f.get("phone") || "Not specified"}\nCompany: ${f.get("company") || "Not specified"}\nServices: ${selected.join(", ") || "Let’s discuss"}\nBudget: ${f.get("budget") || "To discuss"}\nProject: ${f.get("message")}`,
    );
  }
  function download() {
    const u = URL.createObjectURL(new Blob([prepared], { type: "text/plain" }));
    const a = document.createElement("a");
    a.href = u;
    a.download = "project-enquiry.txt";
    a.click();
    URL.revokeObjectURL(u);
  }
  return (
    <form onSubmit={submit} className="enquiry-form">
      <fieldset>
        {requestedPackage && (
          <p className="notice">
            Selected package: <strong>{requestedPackage}</strong>
          </p>
        )}
        <legend>I’m interested in…</legend>
        <div className="service-choices">
          {services.map((s) => (
            <button
              key={s.slug}
              type="button"
              aria-pressed={selected.includes(s.name)}
              onClick={() => {
                setSelected((v) =>
                  v.includes(s.name)
                    ? v.filter((x) => x !== s.name)
                    : [...v, s.name],
                );
                setPrepared("");
              }}
            >
              {s.name}
              {selected.includes(s.name) && <Check size={15} />}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="form-row">
        <label>
          Your name *
          <input
            name="name"
            autoComplete="name"
            placeholder="Alex Morgan"
            required
            maxLength={100}
            onChange={() => setPrepared("")}
          />
        </label>
        <label>
          Email address *
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="alex@company.com"
            required
            maxLength={200}
            onChange={() => setPrepared("")}
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Phone (optional)
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your contact number"
            maxLength={30}
            onChange={() => setPrepared("")}
          />
        </label>
        <label>
          Company
          <input
            name="company"
            autoComplete="organization"
            placeholder="Your company or idea"
            maxLength={150}
            onChange={() => setPrepared("")}
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Approximate budget
          <input
            name="budget"
            placeholder="e.g. ₹2–5 lakh, or let’s discuss"
            maxLength={100}
            onChange={() => setPrepared("")}
          />
        </label>
      </div>
      <label>
        What would you like to build? *
        <textarea
          name="message"
          placeholder="A little about your goals, scope and timeline…"
          required
          minLength={15}
          maxLength={4000}
          rows={4}
          onChange={() => setPrepared("")}
        />
      </label>
      <p className="form-note">
        Preview form: prepare and download your project brief. Enquiry delivery
        is not connected yet; your details are not sent or stored.
      </p>
      <button className="pill lime" type="submit">
        Prepare project enquiry <ArrowUpRight size={20} />
      </button>
      {prepared && (
        <div role="status" className="form-success">
          <Check />
          <div>
            <strong>Your project brief is ready.</strong>
            <p>Download a copy of your brief. No enquiry has been sent.</p>
            <button type="button" onClick={download}>
              Download enquiry ↓
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
