"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Lightbulb,
  PenTool,
  Code2,
  Cloud,
  TrendingUp,
  Search,
  Sun,
  Moon,
  ArrowUpRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { services } from "@/lib/content";
import { useRouter } from "next/navigation";
const stages = [
  [
    "Idea",
    "Start with the right question.",
    "A shared brief connects your business goals, users and priorities.",
    Lightbulb,
  ],
  [
    "Design",
    "Make the complex feel clear.",
    "Journeys, prototypes and a visual system bring the experience into focus.",
    PenTool,
  ],
  [
    "Build",
    "Turn the plan into a product.",
    "Connected engineering and QA deliver working, tested increments.",
    Code2,
  ],
  [
    "Cloud",
    "Give your product a solid home.",
    "Deployment, monitoring and recovery planning prepare the launch.",
    Cloud,
  ],
  [
    "Scale",
    "Build for your next chapter.",
    "Support and product improvements follow the needs of your business.",
    TrendingUp,
  ],
] as const;
export function Architecture() {
  const [active, setActive] = useState(2);
  const Icon = stages[active][3];
  return (
    <div className="architecture">
      <div className="architecture-top">
        <span>THE PRODUCT JOURNEY</span>
        <span>0{active + 1} / 05</span>
      </div>
      <div className="architecture-display">
        <div className="architecture-grid" aria-hidden="true" />
        <div className="stage-symbol">
          <Icon size={48} strokeWidth={1.3} />
        </div>
        <div className="stage-label">
          COGRISS / {stages[active][0].toUpperCase()}
        </div>
        <h2>{stages[active][1]}</h2>
        <p>{stages[active][2]}</p>
      </div>
      <div className="stage-controls" aria-label="Explore the product journey">
        {stages.map(([label, , , I], i) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={active === i}
          >
            <I size={20} />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <div className="architecture-bottom">
        <span>ONE CONNECTED TEAM</span>
        <span>END-TO-END DELIVERY ↗</span>
      </div>
    </div>
  );
}
export function SiteTools() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const chosen = localStorage.getItem("cogriss-theme") === "light";
    document.documentElement.dataset.theme = chosen ? "light" : "dark";
    const frame = requestAnimationFrame(() => setLight(chosen));
    const k = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(
          (e.target as HTMLElement).tagName,
        ) &&
        !(e.target as HTMLElement).isContentEditable
      ) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", k);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", k);
    };
  }, []);
  return (
    <>
      <button
        className="icon-button"
        aria-label="Search pages"
        onClick={() => setOpen(true)}
      >
        <Search size={18} />
      </button>
      <button
        className="icon-button"
        aria-label={light ? "Use dark theme" : "Use light theme"}
        onClick={() => {
          setLight(!light);
          document.documentElement.dataset.theme = light ? "dark" : "light";
          localStorage.setItem("cogriss-theme", light ? "dark" : "light");
        }}
      >
        {light ? <Moon size={18} /> : <Sun size={18} />}
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="search-dialog">
          <DialogTitle>Explore Cogriss</DialogTitle>
          <DialogDescription>
            Find a service or page. Press / to open search.
          </DialogDescription>
          <Command>
            <CommandInput placeholder="What are you looking for?" />
            <CommandList>
              <CommandEmpty>
                No matching pages. Try “web” or “pricing”.
              </CommandEmpty>
              <CommandGroup heading="Pages">
                {[
                  ["Home", "/"],
                  ["About", "/about"],
                  ["Industries", "/industries"],
                  ["Work", "/work"],
                  ["Process", "/process"],
                  ["Pricing", "/pricing"],
                  ["Insights", "/blog"],
                  ["Careers", "/careers"],
                  ["Get a quote", "/contact"],
                ].map(([t, h]) => (
                  <CommandItem
                    key={h}
                    onSelect={() => {
                      setOpen(false);
                      router.push(h);
                    }}
                  >
                    {t}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="Services">
                {services.map((s) => (
                  <CommandItem
                    key={s.slug}
                    onSelect={() => {
                      setOpen(false);
                      router.push("/services/" + s.slug);
                    }}
                  >
                    {s.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
export const packages = [
  [
    "Starter Website",
    "Website",
    "Fixed project",
    "A focused website to introduce your business and turn interest into enquiries.",
    "Responsive design|Core company pages|Basic technical SEO|Deployment",
  ],
  [
    "Business Platform",
    "Platform",
    "Milestone project",
    "Connect customers, teams and operations in one purpose-built platform.",
    "Web or mobile experience|Backend and admin|Third-party integrations|QA and deployment",
  ],
  [
    "MVP Package",
    "Product",
    "Milestone project",
    "Validate the essential product before investing in the full vision.",
    "Discovery and prioritisation|Product design|Core product engineering|Launch planning",
  ],
  [
    "E-commerce",
    "Commerce",
    "Project + support",
    "A connected shopping journey from discovery through to fulfilment.",
    "Storefront and catalogue|Payments and checkout|Inventory and orders|Store support plan",
  ],
  [
    "Enterprise",
    "Platform",
    "Custom proposal",
    "A tailored engagement for complex systems and organisational requirements.",
    "Architecture and discovery|System integrations|Cloud and security|Rollout planning",
  ],
  [
    "Dedicated Team",
    "Team",
    "Monthly retainer",
    "Add the skills and capacity your product roadmap needs.",
    "Assigned specialists|Agreed delivery capacity|Sprint collaboration|Progress reporting",
  ],
  [
    "Managed Support",
    "Support",
    "Monthly recurring",
    "Keep your product healthy and improve it over time.",
    "Maintenance and fixes|Monitoring|Dependency updates|Agreed enhancements",
  ],
  [
    "SaaS",
    "Product",
    "Scoped build + recurring support",
    "Take a subscription product from discovery to continuous development.",
    "Multi-tenant foundation|Subscriptions|Product analytics|Continuous development",
  ],
];
export function PackageSelector() {
  const [filter, setFilter] = useState("All");
  return (
    <>
      <div className="filters" aria-label="Filter packages by project type">
        {[
          "All",
          "Website",
          "Platform",
          "Product",
          "Commerce",
          "Team",
          "Support",
        ].map((t) => (
          <button
            key={t}
            aria-pressed={filter === t}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="package-grid">
        {packages
          .filter((p) => filter === "All" || p[1] === filter)
          .map(([name, , model, desc, items]) => (
            <article className="package-card" key={name}>
              <div className="eyebrow">{model}</div>
              <h2>{name}</h2>
              <p>{desc}</p>
              <ul>
                {items.split("|").map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <Link
                className="pill"
                href={"/contact?package=" + encodeURIComponent(name)}
              >
                Request a custom quote <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
      </div>
    </>
  );
}
export function WorkFilters({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState("All");
  return (
    <>
      <div className="filters">
        {["All", "Mobile", "Web", "Commerce"].map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="filtered-work" data-filter={filter}>
        {children}
      </div>
    </>
  );
}
