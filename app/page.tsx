import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  Code2,
  Smartphone,
  Workflow,
  Cloud,
  PenTool,
  ShieldCheck,
} from "lucide-react";
import { CTA, FAQs } from "@/components/site";
import { PortfolioGrid, Testimonials } from "@/components/portfolio";
import { Architecture } from "@/components/cogriss";
const featured = [
  [
    "Web & software",
    "web-development",
    Code2,
    "Websites, platforms and products built around your business.",
  ],
  [
    "Mobile applications",
    "mobile-app-development",
    Smartphone,
    "Connected iOS and Android experiences, from first tap to daily use.",
  ],
  [
    "AI & automation",
    "ai-automation",
    Workflow,
    "Practical intelligence. Less repetitive work. More possibility.",
  ],
  [
    "Cloud & DevOps",
    "cloud-devops",
    Cloud,
    "Reliable infrastructure and a clear path from release to scale.",
  ],
  [
    "UI/UX & product design",
    "ui-ux-design",
    PenTool,
    "Make complex journeys feel simple, useful and intuitive.",
  ],
  [
    "QA & testing",
    "qa-testing",
    ShieldCheck,
    "Careful testing for confidence in every customer interaction.",
  ],
] as const;
export default function Home() {
  return (
    <main>
      <section className="c-hero">
        <div className="hero-kicker">
          <span>YOUR END-TO-END TECHNOLOGY PARTNER</span>
          <span>DESIGN. BUILD. LAUNCH. SCALE.</span>
        </div>
        <div className="c-hero-grid">
          <div>
            <div className="label-line">
              GOOD IDEAS DESERVE GREAT ENGINEERING
            </div>
            <h1>
              From <em>idea.</em>
              <br />
              To <em className="green">impact.</em>
            </h1>
            <p>
              We design and build digital products that move your business
              forward. Web, mobile, AI and cloud — connected by one technology
              partner.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="pill lime">
                Start your project <ArrowUpRight size={19} />
              </Link>
              <Link href="/work" className="quiet-link">
                Explore our work <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <Architecture />
        </div>
        <div className="hero-foot">
          <span>BUILT FOR AMBITIOUS BUSINESSES. DESIGNED AROUND PEOPLE.</span>
          <a href="#capabilities">
            Discover Cogriss <ArrowDown size={15} />
          </a>
        </div>
      </section>
      <section className="stack-strip" aria-label="Our technology toolkit">
        <span>
          THE RIGHT TOOLS.
          <br />
          <b>FOR YOUR NEXT CHAPTER.</b>
        </span>
        {["React", "Next.js", "Flutter", "Laravel", "Node.js", "AWS"].map(
          (t) => (
            <span className="tech-badge" key={t}>
              {t}
            </span>
          ),
        )}
      </section>
      <section className="section-pad capability-section" id="capabilities">
        <div className="section-heading">
          <div>
            <div className="eyebrow">01 / CONNECTED CAPABILITIES</div>
            <h2>
              Everything it takes.
              <br />
              <span>One committed partner.</span>
            </h2>
          </div>
          <div>
            <p>
              From the first conversation to the next release,
              <br />
              we connect every part of the product journey.
            </p>
            <Link href="/services" className="text-link">
              All services <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="cap-grid">
          {featured.map(([name, slug, Icon, desc], i) => (
            <Link key={slug} href={"/services/" + slug} className="cap-card">
              <div>
                <Icon size={27} />
                <span>0{i + 1}</span>
              </div>
              <h3>{name}</h3>
              <p>{desc}</p>
              <ArrowUpRight className="cap-arrow" size={22} />
            </Link>
          ))}
        </div>
      </section>
      <section className="work-section section-pad" id="selected-work">
        <div className="section-heading">
          <div>
            <div className="eyebrow">02 / SELECTED WORK</div>
            <h2>
              See the thinking.
              <br />
              <span>Feel the difference.</span>
            </h2>
          </div>
          <div>
            <p>
              Real product work across mobile, web and backend systems.
              <br />
              Screens and contribution details come from the supplied portfolio.
            </p>
            <Link href="/work" className="text-link">
              Explore our work <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <PortfolioGrid />
      </section>
      <Testimonials />
      <section className="partner-section section-pad">
        <div>
          <div className="eyebrow">04 / THE COGRISS APPROACH</div>
          <h2>
            A better build.
            <br />A clearer journey.
            <br />
            <span>A longer view.</span>
          </h2>
          <Link className="text-link" href="/about">
            Get to know Cogriss <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="principles">
          {[
            [
              "01",
              "One connected journey",
              "Strategy, design, engineering, testing and support work toward the same business goal.",
            ],
            [
              "02",
              "Progress you can see",
              "Defined milestones, working increments and clear conversations keep decisions moving.",
            ],
            [
              "03",
              "Partnership beyond launch",
              "Plan for maintenance, monitoring and your next product improvements from day one.",
            ],
          ].map(([n, t, d]) => (
            <div key={n}>
              <span>{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="process-section section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              05 / FROM FIRST QUESTION TO WHAT’S NEXT
            </div>
            <h2>
              A clear path
              <br />
              <span>from idea to scale.</span>
            </h2>
          </div>
          <Link href="/process" className="text-link">
            Our full process <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="process-grid">
          {[
            [
              "01",
              "Discover",
              "Understand the business, the users and the problem worth solving.",
            ],
            [
              "02",
              "Design",
              "Explore and validate a direction before development starts.",
            ],
            [
              "03",
              "Build & test",
              "Deliver working increments, with quality built into every release.",
            ],
            [
              "04",
              "Launch & evolve",
              "Release with care and keep improving around real needs.",
            ],
          ].map(([n, t, d]) => (
            <div key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="industry-band section-pad">
        <div className="eyebrow">BUILT AROUND YOUR WORLD</div>
        <h2>
          Different industries.
          <br />
          <span>Shared ambition.</span>
        </h2>
        <div className="industry-links">
          {[
            "Startups",
            "SMEs",
            "Retail & e-commerce",
            "Education",
            "Healthcare",
            "Logistics",
            "Enterprises",
            "Agencies",
          ].map((x) => (
            <Link key={x} href="/industries">
              {x}
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </div>
      </section>
      <section className="faq-section section-pad">
        <div>
          <div className="eyebrow">BEFORE WE BUILD</div>
          <h2>
            Good questions.
            <br />
            <span>Clear answers.</span>
          </h2>
        </div>
        <FAQs />
      </section>
      <CTA />
    </main>
  );
}
