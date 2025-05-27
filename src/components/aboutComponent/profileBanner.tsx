
//========== PROFILE BANNER COMPONENT ==========//

import React from "react";

const toolsIcon = [
  { name: "Next.Js", src: "/images/homeAssets/tools/nextdotjs.svg", alt: "next dot js", href: "https://nextjs.org" },
  { name: "PostgreSQL", src: "/images/homeAssets/tools/postgresql.svg", alt: "postgresql", href: "https://www.postgresql.org" },
  { name: "Prisma", src: "/images/homeAssets/tools/prisma.svg", alt: "prisma", href: "https://www.prisma.io" },
  { name: "Sass", src: "/images/homeAssets/tools/sass.svg", alt: "sass", href: "https://sass-lang.com" },
  { name: "Github", src: "/images/homeAssets/tools/github.svg", alt: "github", href: "https://github.com" },
  { name: "Figma", src: "/images/homeAssets/tools/figma.svg", alt: "figma", href: "https://figma.com" },
  { name: "Typescript", src: "/images/homeAssets/tools/typescript.svg", alt: "typescript", href: "https://www.typescriptlang.org" },
  { name: "Zod", src: "/images/homeAssets/tools/zod.svg", alt: "zod", href: "https://zod.dev" },
  { name: "Swiper", src: "/images/homeAssets/tools/swiper.svg", alt: "swiper", href: "https://swiperjs.com" },
  { name: "AmazonS3", src: "/images/homeAssets/tools/amazons3.svg", alt: "amazon", href: "https://aws.amazon.com/s3/" },
  { name: "Cloudflare", src: "/images/homeAssets/tools/cloudflare.svg", alt: "cloudflare", href: "https://www.cloudflare.com" },
  { name: "Tailwind", src: "/images/homeAssets/tools/tailwindcss.svg", alt: "tailwind", href: "https://tailwindcss.com" },
  { name: "HTML5", src: "/images/homeAssets/tools/html5.svg", alt: "html5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
  { name: "React", src: "/images/homeAssets/tools/react.svg", alt: "react", href: "https://reactjs.org" },
  { name: "Canva", src: "/images/homeAssets/tools/canva.svg", alt: "canva", href: "https://www.canva.com" },
  { name: "JavaScript", src: "/images/homeAssets/tools/javascript.svg", alt: "javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "i18next", src: "/images/homeAssets/tools/i18next.svg", alt: "i18next", href: "https://www.i18next.com" },
  { name: "supabase", src: "/images/homeAssets/tools/supabase.svg", alt: "supabase", href: "https://supabase.com" },
];

export default function AboutAethraStudio() {
  return (
    <main className="about-container">
      <section className="about-hero">
        <h1>
          We Don’t Just <span className="highlight">Create</span>.<br />
          We Strategize, Design, and Build for <span className="highlight">Impact</span>.
        </h1>
        <p className="about-subtitle">Helping businesses thrive through visual excellence and smart strategies.</p>
      </section>

      <div className="about-divider" />

      <section className="about-services">
        <h2>Our Expertise</h2>
        <p className="about-services__description">
          Aethra Studio blends <span className="highlight">creative thinking</span> with <span className="highlight">strategic execution</span>. We help founders, brands, and startups elevate their business presence through services that are both powerful and personal.
        </p>
        <div className="about-services__grid">
          <div className="about-service">
            <h3>Visionary Business Consulting</h3>
            <p>We shape compelling digital strategies, rooted in branding and data-driven insight.</p>
          </div>
          <div className="about-service">
            <h3>Professional Video Editing</h3>
            <p>Every cut tells a story. We craft cinematic visuals tailored for business goals.</p>
          </div>
          <div className="about-service">
            <h3>Characterful Graphic Design</h3>
            <p>Visuals with soul. From identity to brand guides, we make you unforgettable.</p>
          </div>
          <div className="about-service">
            <h3>Custom Web Development</h3>
            <p>Responsive, elegant, fast. Our websites reflect your brand and convert visitors.</p>
          </div>
        </div>
      </section>

      <div className="about-divider" />

      <section className="about-tools">
        <h2>Our Toolset</h2>
        <p className="about-tools__intro">
          From backend to frontend, branding to UI, we rely on modern tools that empower digital excellence.
        </p>
        <div className="about-tools__grid">
          {toolsIcon.map(({ name, src, alt, href }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="about-tool" title={name}>
              <img src={src} alt={alt} />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}