"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Music2,
  PawPrint,
  Quote,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { faqItems } from "./site-data";

const SITE = "";
const MEMBER_SITE = "https://member.pawshareclub.com";
const LOGO_SRC = "https://images.squarespace-cdn.com/content/v1/67eb3485bcafe97633e8e38a/344372ef-2760-4bd7-a00e-191c67e64274/square+space+logo+design+%281%29.jpg?format=1500w";

const navLinks = [
  { label: "About", href: `${SITE}/about` },
  { label: "Events", href: `${SITE}/events` },
  { label: "Dog walking challenge", href: `${SITE}/neighbourhood-dog-walking-challenge` },
  { label: "Blog", href: `${SITE}/blog` },
  { label: "Pricing", href: `${SITE}/pricing` },
  { label: "Referral bonus", href: `${SITE}/referral-bonus` },
];

const steps = [
  {
    number: "01",
    title: "Build your profile",
    text: "Tell local members about yourself, your pet and the help you can offer. Complete ID verification and a short pet knowledge quiz.",
    icon: <PawPrint size={24} strokeWidth={1.75} />,
  },
  {
    number: "02",
    title: "Meet local pet people",
    text: "Find people nearby, have a chat and arrange a simple meet-up before making a booking.",
    icon: <Heart size={24} strokeWidth={1.75} />,
  },
  {
    number: "03",
    title: "Share care and earn points",
    text: "Help with another member's pet and earn points to use when your own pet needs care.",
    icon: <Sparkles size={24} strokeWidth={1.75} />,
  },
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Pawshare Club home">
      <img src={LOGO_SRC} alt="Pawshare Club" />
    </a>
  );
}

function FaqBlocks({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === "list") {
      return <ul key={`${block.type}-${index}`}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
    }
    if (block.type === "heading") {
      return <strong className="faq-subheading" key={`${block.type}-${index}`}>{block.text}</strong>;
    }
    return <p key={`${block.type}-${index}`}>{block.text}</p>;
  });
}

function ArrowLink({ children, href, className = "" }) {
  return (
    <a className={`arrow-link ${className}`} href={href}>
      {children} <ArrowRight size={16} />
    </a>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <div className="announcement">
        <span className="announcement-dot" /> 500+ members have joined Pawshare Club
      </div>

      <header className="site-header">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="header-actions">
          <div className="header-socials" aria-label="Pawshare social links">
            <a href="https://www.instagram.com/pawshareclub" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="https://www.facebook.com/groups/484634907604450" aria-label="Facebook"><Facebook size={16} /></a>
            <a href="https://www.linkedin.com/company/pawshare-club" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="mailto:hello@pawshareclub.com" aria-label="Email"><Mail size={16} /></a>
            <a href="https://www.tiktok.com/@pawshare.club" aria-label="TikTok"><Music2 size={16} /></a>
          </div>
          <a className="login-link" href={MEMBER_SITE}>Log in</a>
          <a className="button button-small" href={`${MEMBER_SITE}/signup`}>Join free <ArrowDownRight size={15} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={23} /></button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-top"><Logo /><button onClick={closeMenu} aria-label="Close menu"><X /></button></div>
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => <a key={link.label} href={link.href} onClick={closeMenu}>{link.label}<ArrowRight size={18} /></a>)}
          <a href={`${MEMBER_SITE}/signup`} onClick={closeMenu}>Join Pawshare <ArrowRight size={18} /></a>
        </nav>
        <p>Good care should feel close to home.</p>
      </div>

      <section className="hero section-shell" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <div className="eyebrow">Pet care, shared locally</div>
          <h1 id="hero-heading">Community way to care for your pet.</h1>
          <p className="hero-lede">Meet pet sitters, dog walkers and playdate companions nearby. Help your pet spend time with others, get to know your neighbours and make life less lonely for people and pets.</p>
          <div className="hero-cta">
            <a className="button" href={`${MEMBER_SITE}/signup`}>Join for free <ArrowDownRight size={18} /></a>
            <ArrowLink href="#how-it-works">See how it works</ArrowLink>
          </div>
          <div className="member-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span>R</span><span>S</span><span>J</span><span>+</span>
            </div>
            <p><strong>500+ neighbours</strong> are already sharing pet care</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-sun" />
          <div className="hero-image-frame">
            <img src="https://images.squarespace-cdn.com/content/v1/67eb3485bcafe97633e8e38a/c6fcd108-ffca-43f3-872d-9e10f3e4c172/home+1+%281%29.webp?format=1500w" alt="A happy dog relaxing beside its owner" />
          </div>
          <div className="care-note"><ShieldCheck size={21} /><span><strong>Built on community</strong><br />Meet first. Get to know each other.</span></div>
          <div className="hero-sticker"><PawPrint size={32} fill="currentColor" /><span>Pets bring<br />people together</span></div>
        </div>
      </section>

      <section className="challenge-band">
        <div className="section-shell challenge-inner">
          <span className="challenge-label">Pawshare challenge</span>
          <p>Our neighbourhood dog walking challenge is on now.</p>
          <a href={`${SITE}/neighbourhood-dog-walking-challenge`}>Explore the challenge <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="intro section-shell" id="community">
        <div className="intro-kicker">Pets bring us together</div>
        <h2>More connection. Less loneliness.</h2>
        <div className="intro-grid">
          <p>Pawshare helps people and pets find company close to home. A dog walk can be a chance to meet someone new. A pet sit can give an owner support when they need it.</p>
          <div className="intro-checks">
            <p><Check size={17} /> Meet people through your pet</p>
            <p><Check size={17} /> Give pets more company</p>
            <p><Check size={17} /> Get support from nearby members</p>
          </div>
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="section-shell">
          <div className="section-heading">
            <div><span className="eyebrow">How Pawshare works</span><h2>Meet people. Help pets.</h2></div>
            <ArrowLink href={`${SITE}/how-points-work`}>How points work</ArrowLink>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <div className="step-top"><span>{step.number}</span><i>{step.icon}</i></div>
                <h3>{step.title}</h3><p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section section-shell">
        <div className="trust-images">
          <img className="trust-main" src="https://images.squarespace-cdn.com/content/v1/67eb3485bcafe97633e8e38a/b1e0a8a8-3210-4328-838c-a0d5087887a3/trust+%281%29.png?format=1000w" alt="A Pawshare community member with a dog" />
          <img className="trust-side" src="https://images.squarespace-cdn.com/content/v1/67eb3485bcafe97633e8e38a/a86741cc-3288-4606-9c6d-5afb15177ca5/trust+%282%29.png?format=750w" alt="Two happy dogs" />
          <span className="round-seal"><ShieldCheck size={23} /><strong>Good people.<br />Good care.</strong></span>
        </div>
        <div className="trust-copy">
          <span className="eyebrow">Start with a conversation</span>
          <h2>Getting to know each other matters.</h2>
          <p>Pawshare helps you find people nearby, then gives you space to talk and meet before care begins. You can make a decision that works for you and your pet.</p>
          <div className="trust-list">
            <div><span>01</span><p><strong>See who is nearby</strong><br />Read about the people and pets in your area.</p></div>
            <div><span>02</span><p><strong>Meet before you book</strong><br />Take your time and see if the match feels right.</p></div>
            <div><span>03</span><p><strong>Help your local community</strong><br />Earn points when you help someone with their pet.</p></div>
          </div>
        </div>
      </section>

      <section className="stories-section" id="stories">
        <div className="section-shell">
          <div className="section-heading stories-heading">
            <div><span className="eyebrow">Stories from the community</span><h2>People and pets getting to know each other.</h2></div>
            <a className="text-link" href={`${SITE}/testominal-1`}>Read all stories <ArrowRight size={16} /></a>
          </div>
          <div className="testimonials">
            <article className="testimonial testimonial-coral"><div className="testimonial-top"><Quote size={32} fill="currentColor" /><img src="/images/suri-raj-testimonial.png" alt="Suri and Raj, Pawshare Club members" /></div><p>"We were new to the city when we joined Pawshare Club and did not know anyone. Through dog walks and pet-sitting swaps, we met trustworthy dog owners in our local area."</p><footer><strong>Suri &amp; Raj</strong><span>Pet owners, Melbourne</span></footer></article>
            <article className="testimonial testimonial-cream"><div className="testimonial-top"><Quote size={32} fill="currentColor" /><img src="/images/dave-testimonial.png" alt="Dave with his dog" /></div><p>"Through Pawshare Club, I met two neighbours who had lost their own dog. They now walk him a few times each week. It has been a huge help for me and great company for my dog."</p><footer><strong>Dave</strong><span>Dog dad, Melbourne</span></footer></article>
          </div>
        </div>
      </section>

      <section className="faq-section section-shell" id="faqs">
        <div className="faq-copy"><span className="eyebrow">Common questions</span><h2>What you need to know.</h2><p>Find answers about meeting other members, arranging care and getting started.</p><a className="button button-dark" href={`${SITE}/faqs`}>More FAQs <ArrowDownRight size={17} /></a></div>
        <div className="faq-list">
          {faqItems.map((faq, index) => {
            const isOpen = openFaq === index;
            return <article className={`faq-item ${isOpen ? "open" : ""}`} key={faq.question}>
              <button onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}><span>{faq.question}</span><ChevronDown size={20} /></button>
              <div className="faq-answer"><FaqBlocks blocks={faq.blocks} /></div>
            </article>;
          })}
        </div>
      </section>

      <section className="join-section">
        <div className="join-orbit orbit-one" /><div className="join-orbit orbit-two" />
        <div className="section-shell join-inner">
          <span className="eyebrow eyebrow-light">Meet local pet people</span>
          <h2>Make life less lonely, one walk at a time.</h2>
          <p>Join Pawshare Club for free. Meet people in your area, find company for your pet and offer a hand when you can.</p>
          <a className="button button-light" href={`${MEMBER_SITE}/signup`}>Join Pawshare Club <ArrowDownRight size={18} /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-top">
          <div className="footer-brand"><Logo /><p>Pawshare helps people and pets meet, spend time together and build local support across Australia.</p><div className="socials"><a href="https://www.instagram.com/pawshareclub" aria-label="Instagram"><Instagram size={18} /></a><a href="https://www.facebook.com/groups/484634907604450" aria-label="Facebook"><Facebook size={18} /></a><a href="https://www.linkedin.com/company/pawshare-club" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="https://www.tiktok.com/@pawshare.club" aria-label="TikTok"><Music2 size={18} /></a><a href="mailto:hello@pawshareclub.com" aria-label="Email"><Mail size={18} /></a></div></div>
          <div className="footer-links">
            <div><strong>About</strong><a href={`${SITE}/about`}>About us</a><a href={`${SITE}/value`}>Value and Mission</a><a href={`${SITE}/events`}>Events</a><a href={`${SITE}/our-partners`}>Our Partners</a><a href={`${SITE}/blog`}>Blog</a><a href={`${SITE}/contact`}>Contact</a></div>
            <div><strong>Community</strong><a href={`${SITE}/get-a-referral-bonus`}>Referral Bonus</a><a href={`${SITE}/join-rewards-challenges`}>Join Reward Challenges</a><a href={`${SITE}/how-points-work`}>How Points Work</a><a href={`${SITE}/pricing`}>Pricing</a><a href={`${SITE}/become-a-pet-sitter`}>Become a Pet Sitter</a></div>
            <div><strong>Learn more</strong><a href={`${SITE}/qualified-pet-professional`}>Qualified Pet Professionals</a><a href={`${SITE}/community-pet-sitting-agreement`}>Pet Sitting Agreement</a></div>
            <div><strong>Legal</strong><a href={`${SITE}/privacy-policy`}>Privacy Policy</a><a href={`${SITE}/terms-of-service`}>Terms of Service</a><a href={`${SITE}/code-of-conduct`}>Code of Conduct</a></div>
            <div className="footer-services"><strong>Services</strong><span>Melbourne</span><a href={`${SITE}/dog-walker-melbourne`}>Dog Walking</a><a href={`${SITE}/pet-sitting-melbourne`}>Pet Sitter</a><a href={`${SITE}/dog-sitter-melbourne`}>Dog Sitter</a><span>Sydney</span><a href={`${SITE}/dog-walker-sydney`}>Dog Walking</a><a href={`${SITE}/pet-sitting-sydney`}>Pet Sitter</a><a href={`${SITE}/dog-sitter-sydney`}>Dog Sitter</a></div>
            <div><strong>Stay in the loop</strong><p>News, local events and Pawshare updates.</p><form onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Your email address" /><button aria-label="Subscribe"><ArrowRight size={18} /></button></form></div>
          </div>
        </div>
        <div className="section-shell footer-bottom"><span>© 2026 Pawshare Club</span><span><a href={`${SITE}/privacy-policy`}>Privacy Policy</a><a href={`${SITE}/terms-of-service`}>Terms of Service</a><a href={`${SITE}/code-of-conduct`}>Code of Conduct</a></span></div>
      </footer>
    </main>
  );
}
