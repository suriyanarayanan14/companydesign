import Link from "next/link";
import { CTA } from "@/components/site";
import { TeamGrid } from "@/components/portfolio";
export const metadata = {
  title: "About Cogriss",
  description:
    "A connected approach to digital product design, engineering, quality and long-term support.",
};
export default function About() {
  return (
    <main>
      <section className="page-intro section-pad">
        <div className="eyebrow">ABOUT COGRISS</div>
        <h1>
          Your ambition.
          <br />
          <span>Our shared purpose.</span>
        </h1>
        <p>
          Bring business goals, thoughtful design and dependable engineering
          together. Build the right product — and a clear path to what comes
          next.
        </p>
      </section>
      <section className="partner-section section-pad">
        <div>
          <div className="eyebrow">WHY COGRISS</div>
          <h2>
            A partner for
            <br />
            <span>the whole journey.</span>
          </h2>
        </div>
        <div className="case-copy">
          <h3>Our purpose</h3>
          <p>
            Digital products need more than development. They need a clear
            problem, an experience people understand, and systems that work
            together. Cogriss brings these disciplines into one connected
            delivery approach.
          </p>
          <h3>Our mission</h3>
          <p>
            Help businesses turn ideas into useful, production-ready digital
            products through design, engineering, testing and ongoing support.
          </p>
          <h3>Our vision</h3>
          <p>
            Become a technology partner that businesses can grow with, from
            their first launch to the next stage of scale.
          </p>
        </div>
      </section>
      <section className="section-pad work-section">
        <div className="eyebrow">WHAT GUIDES OUR WORK</div>
        <div className="industry-grid">
          {[
            [
              "Transparency",
              "Make scope, decisions, progress and trade-offs visible.",
            ],
            [
              "Ownership",
              "Care about the outcome, from the first requirement to the final release.",
            ],
            [
              "Craftsmanship",
              "Give usability, code quality and testing the attention they deserve.",
            ],
            [
              "Long-term partnership",
              "Build a foundation that can be maintained and improved.",
            ],
          ].map(([t, d]) => (
            <article className="industry-card" key={t}>
              <h2>{t}</h2>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="team-section section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">THE PEOPLE BEHIND THE WORK</div>
            <h2>
              Different strengths.
              <br />
              <span>One connected team.</span>
            </h2>
          </div>
          <p>
            A multidisciplinary team across engineering, mobile, quality,
            business analysis and growth.
          </p>
        </div>
        <div className="notice team-notice">
          Temporary portrait graphics and short biographies are included for
          design review. Replace them with approved team photos and final bios
          before launch.
        </div>
        <TeamGrid />
      </section>
      <section className="section-pad">
        <div className="section-heading">
          <h2>
            Build your
            <br />
            <span>next chapter with us.</span>
          </h2>
          <Link className="text-link" href="/careers">
            Explore careers ↗
          </Link>
        </div>
      </section>
      <CTA />
    </main>
  );
}
