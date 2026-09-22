import { CTA } from "@/components/site";
import { PortfolioGrid, Testimonials } from "@/components/portfolio";
import { WorkFilters } from "@/components/cogriss";
export const metadata = {
  title: "Selected work",
  description:
    "Explore delivered and development-stage web, mobile, commerce and education projects represented in the Cogriss portfolio.",
};
export default function Work() {
  return (
    <main>
      <section className="page-intro section-pad">
        <div className="eyebrow">SELECTED WORK</div>
        <h1>
          Digital products.
          <br />
          <span>Thought through.</span>
        </h1>
        <p>
          Explore six web and mobile projects from the supplied portfolio, with
          technologies, contribution details and available product links.
        </p>
        <div className="notice">
          Project descriptions reflect the supplied portfolio. No performance
          metrics or client endorsement is claimed without separate approval.
        </div>
      </section>
      <section className="section-pad">
        <WorkFilters>
          <PortfolioGrid />
        </WorkFilters>
      </section>
      <Testimonials />
      <CTA />
    </main>
  );
}
