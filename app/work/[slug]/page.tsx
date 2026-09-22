import { projects } from "@/lib/content";
import { CTA } from "@/components/site";
import { PortfolioVisual } from "@/components/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return { title: p?.name || "Project", description: p?.description };
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <main>
      <section className="page-intro section-pad">
        <Link className="back-link" href="/work">
          ← All work
        </Link>
        <div className="eyebrow">{p.category} / PORTFOLIO PROJECT</div>
        <h1>
          {p.name}
          <span className="title-dot">.</span>
        </h1>
        <p>{p.description}</p>
        {p.links.length > 0 && (
          <div className="project-links">
            {p.links.map((link) => (
              <a
                className="pill"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                key={link.url}
              >
                {link.label} <ArrowUpRight size={17} />
              </a>
            ))}
          </div>
        )}
      </section>
      <section className="case-visual section-pad">
        <PortfolioVisual
          image={p.cover}
          name={p.name}
          format={p.filter}
          priority
        />
      </section>
      <section className="detail-section section-pad">
        <div>
          <div className="eyebrow">THE PROJECT</div>
          <h2>{p.headline}</h2>
          <p className="sample-note">{p.note}</p>
        </div>
        <div className="case-copy">
          <h3>The challenge</h3>
          <p>{p.challenge}</p>
          <h3>The delivered approach</h3>
          <p>{p.solution}</p>
          <h3>Contribution scope</h3>
          <div className="tags">
            {p.scope.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <h3>Technology</h3>
          <div className="tags">
            {p.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="project-gallery-section section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">SELECTED INTERFACES</div>
            <h2>
              Inside
              <br />
              <span>{p.name}.</span>
            </h2>
          </div>
          <p>{p.note}</p>
        </div>
        <div className="project-gallery-grid">
          {p.images.map((image, index) => (
            <figure key={image}>
              <Image
                src={image}
                alt={`${p.name} interface ${index + 1}`}
                fill
                sizes="(max-width: 760px) 90vw, 30vw"
              />
              <figcaption>
                {p.name} / {String(index + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
