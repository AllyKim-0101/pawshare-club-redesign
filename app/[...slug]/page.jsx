import { notFound } from "next/navigation";
import { faqItems, sitePages } from "../site-data";

export const dynamicParams = false;
export const revalidate = false;

const ORIGIN = "https://www.pawshareclub.com";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const logoSrc = "https://images.squarespace-cdn.com/content/v1/67eb3485bcafe97633e8e38a/344372ef-2760-4bd7-a00e-191c67e64274/square+space+logo+design+%281%29.jpg?format=1500w";
const encodedPathOverrides = {
  "blog/category/Pet+Stories/Community+Stories": "blog/category/Pet+Stories%2FCommunity+Stories",
};

const primaryLinks = [
  ["About", "/about"], ["Events", "/events"], ["Dog walking challenge", "/neighbourhood-dog-walking-challenge"], ["Blog", "/blog"], ["Pricing", "/pricing"], ["Referral bonus", "/referral-bonus"],
];

const withBasePath = (href) => `${BASE_PATH}${href}`;

const footerGroups = [
  { title: "About", links: [["About us", "/about"], ["Value and Mission", "/value"], ["Events", "/events"], ["Our Partners", "/our-partners"], ["Blog", "/blog"], ["Contact", "/contact"]] },
  { title: "Community", links: [["Referral Bonus", "/referral-bonus"], ["Join Reward Challenges", "/join-rewards-challenges"], ["How Points Work", "/how-points-work"], ["Pricing", "/pricing"], ["Become a Pet Sitter", "/become-a-pet-sitter"]] },
  { title: "Learn more", links: [["Qualified Pet Professionals", "/qualified-pet-professional"], ["Pet Sitting Agreement", "/community-pet-sitting-agreement"]] },
  { title: "Legal", links: [["Privacy Policy", "/privacy-policy"], ["Terms of Service", "/terms-of-service"], ["Code of Conduct", "/code-of-conduct"]] },
  { title: "Melbourne", links: [["Dog Walking", "/dog-walker-melbourne"], ["Pet Sitter", "/pet-sitting-melbourne"], ["Dog Sitter", "/dog-sitter-melbourne"]] },
  { title: "Sydney", links: [["Dog Walking", "/dog-walker-sydney"], ["Pet Sitter", "/pet-sitting-sydney"], ["Dog Sitter", "/dog-sitter-sydney"]] },
];

function FaqContent({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === "list") return <ul key={`${block.type}-${index}`}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
    if (block.type === "heading") return <strong className="subpage-faq-heading" key={`${block.type}-${index}`}>{block.text}</strong>;
    return <p key={`${block.type}-${index}`}>{block.text}</p>;
  });
}

function textFromHtml(value = "") {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function extractOriginalContent(html) {
  const articleMatch = html.match(/<article\b[^>]*id=["']page-regions["'][^>]*>([\s\S]*?)<\/article>/i);
  const mainMatch = html.match(/<main\b[^>]*id=["']page["'][^>]*>([\s\S]*?)<\/main>/i);
  const content = articleMatch?.[1] ?? mainMatch?.[1];
  const sourceTitle = textFromHtml(content?.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]);

  if (!content) return null;

  return {
    title: sourceTitle,
    html: content
      .replace(/<(script|style|noscript|template)\b[^>]*>[\s\S]*?<\/\1>/gi, "")
      .replace(/\s+on[a-z]+=(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
      .replace(/\s+(?:srcdoc|integrity|nonce)=(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
      .replace(/javascript:/gi, "")
      .replace(/(href=["'])https:\/\/www\.pawshareclub\.com(?=\/|["'])/gi, (_match, prefix) => `${prefix}${BASE_PATH}`),
  };
}

async function getOriginalContent(path, sourcePath = path) {
  if (["faqs", "get-a-referral-bonus", "cart", "privacy"].includes(path)) return null;

  try {
    const response = await fetch(`${ORIGIN}/${sourcePath}`, { cache: "force-cache" });
    if (!response.ok) return null;
    return extractOriginalContent(await response.text());
  } catch {
    return null;
  }
}

async function getPublishedRoutes() {
  try {
    const response = await fetch(`${ORIGIN}/sitemap.xml`, { cache: "force-cache" });
    if (!response.ok) return [];
    const xml = await response.text();
    return [...xml.matchAll(/<loc>https:\/\/www\.pawshareclub\.com\/([^<]+)<\/loc>/g)].map((match) => match[1].replace(/\/$/, ""));
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  const routes = new Set([...Object.keys(sitePages), ...(await getPublishedRoutes())]);
  return [...routes].filter(Boolean).flatMap((route) => {
    const segments = route.split("/");
    const decodedSlashSegments = route.includes("%2F") ? [{ slug: segments.flatMap((segment) => segment.split("%2F")) }] : [];
    return [{ slug: segments }, ...decodedSlashSegments];
  });
}

function readableRouteTitle(path) {
  return decodeURIComponent(path.split("/").at(-1) || "Pawshare Club")
    .replaceAll("+", " ")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default async function PawsharePage({ params }) {
  const { slug } = await params;
  const path = slug.join("/");
  const page = sitePages[path];
  const sourcePath = encodedPathOverrides[path] || path;
  const originalContent = await getOriginalContent(path, sourcePath);

  if (!page && !originalContent) notFound();

  const title = page?.title || originalContent?.title || readableRouteTitle(path);

  return (
    <main className="subpage" data-page={path}>
      <header className="subpage-header">
        <a className="subpage-logo" href={`${BASE_PATH}/`} aria-label="Pawshare Club home"><img src={logoSrc} alt="Pawshare Club" /></a>
        <nav aria-label="Primary navigation">{primaryLinks.map(([label, href]) => <a href={withBasePath(href)} key={href}>{label}</a>)}</nav>
        <a className="subpage-join" href="https://member.pawshareclub.com/signup">Join free</a>
      </header>
      <article className="subpage-content">
        <div className="subpage-label">Pawshare Club</div>
        <h1>{title}</h1>
        {page?.lead && <p className="subpage-lead">{page.lead}</p>}
        {path === "faqs" ? <div className="subpage-faqs">{faqItems.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><div><FaqContent blocks={faq.blocks} /></div></details>)}</div> : originalContent ? <div className="legacy-page-content" dangerouslySetInnerHTML={{ __html: originalContent.html }} /> : <div className="subpage-copy">{page.sections.map((section) => <p key={section}>{section}</p>)}</div>}
      </article>
      <footer className="subpage-footer">
        <div className="subpage-footer-top"><div><img src={logoSrc} alt="Pawshare Club" /><p>Building local connections for people and pets across Australia.</p></div><div className="subpage-footer-links">{footerGroups.map((group) => <div key={group.title}><strong>{group.title}</strong>{group.links.map(([label, href]) => <a href={withBasePath(href)} key={href}>{label}</a>)}</div>)}</div></div>
        <div className="subpage-footer-bottom"><span>© 2026 Pawshare Club</span><span><a href={withBasePath("/privacy-policy")}>Privacy Policy</a><a href={withBasePath("/terms-of-service")}>Terms of Service</a><a href={withBasePath("/code-of-conduct")}>Code of Conduct</a></span></div>
      </footer>
    </main>
  );
}
