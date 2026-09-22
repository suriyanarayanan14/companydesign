import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { projects, team, testimonials } from "@/lib/content";

export function PortfolioVisual({
  image,
  name,
  format,
  priority = false,
}: {
  image: string;
  name: string;
  format: string;
  priority?: boolean;
}) {
  return (
    <div className={`portfolio-visual portfolio-${format.toLowerCase()}`}>
      <Image
        src={image}
        alt={`${name} project interface`}
        fill
        sizes="(max-width: 720px) 88vw, 44vw"
        priority={priority}
      />
    </div>
  );
}

export function PortfolioGrid() {
  return (
    <div className="project-grid portfolio-grid">
      {projects.map((project, index) => (
        <Link
          href={`/work/${project.slug}`}
          className="project-card reveal"
          data-category={project.filter}
          key={project.slug}
        >
          <div className="project-art">
            <PortfolioVisual
              image={project.cover}
              name={project.name}
              format={project.filter}
              priority={index < 2}
            />
            <span className="project-open" aria-hidden="true">
              <ArrowUpRight />
            </span>
            <span className="project-type">REAL PROJECT</span>
          </div>
          <div className="project-caption">
            <h3>
              {project.name}
              <sup>{String(index + 1).padStart(2, "0")}</sup>
            </h3>
            <p>{project.tag}</p>
            <ArrowUpRight aria-hidden="true" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="testimonial-section section-pad">
      <div className="section-heading">
        <div>
          <div className="eyebrow">03 / PROJECT-LED FEEDBACK</div>
          <h2>
            Proof deserves
            <br />
            <span>the right words.</span>
          </h2>
        </div>
        <p>
          Temporary testimonial copy is included for layout review.
          <br />
          Replace it with approved client feedback before launch.
        </p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.project}>
            <Quote aria-hidden="true" />
            <blockquote>“{item.quote}”</blockquote>
            <div>
              <strong>{item.project}</strong>
              <span>{item.attribution}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TeamGrid() {
  return (
    <div className="team-grid">
      {team.map((member) => (
        <article className="team-card" key={member.name}>
          <div className="team-photo">
            <Image
              src={member.image}
              alt={`Temporary portrait placeholder for ${member.name}`}
              fill
              sizes="(max-width: 560px) 88vw, (max-width: 1000px) 44vw, 20vw"
            />
            <span>PHOTO PLACEHOLDER</span>
          </div>
          <div className="team-copy">
            <span>{member.initials}</span>
            <h3>{member.name}</h3>
            <strong>{member.role}</strong>
            <p>{member.focus}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
