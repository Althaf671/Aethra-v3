
//=========== CATALOG COMPONENT ==========//
'use client';

import React, { useRef } from 'react'
import Image from "next/image";
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const catalog = [
  {
    title: "Web Development",
    src: '/images/homeAssets/poster/webDev.webp',
    alt: 'View Web dev plan and pricing',
    desc: "As a web developer, I specialize in building fast, scalable, and modern web applications using cutting-edge technologies like Next.js, PostgreSQL, Prisma, and advanced SCSS architecture.",
    id: "webdev",
  },
  {
    title: "Bussines Consultant",
    src: '/images/homeAssets/poster/consultant.webp',
    alt: 'View Consultant services',
    desc: "Our business consultants help you craft winning strategies, optimize operations, and scale sustainably through market-driven insights and tailored guidance.",
    id: "bussines",
  },
  {
    title: "Graphic Designer",
    src: '/images/homeAssets/poster/graphicDesigner.webp',
    alt: 'View Graphic Design services',
    desc: "Our graphic designers bring your brand to life with visually stunning designs, ensuring every asset—from logos to marketing materials—captures attention and communicates clearly.",
    id: "graphic",
  },
  {
    title: "Video Editing",
    src: '/images/homeAssets/poster/videoEditing.webp',
    alt: 'View Video Editing services',
    desc: "Our video editors transform raw footage into compelling visual stories, combining technical precision with creative flair to elevate your message across all platforms.",
    id: "video",
  },
];

const toolsIcon = [
  {
    name: "Next.Js",
    src: "/images/homeAssets/tools/nextdotjs.svg",
    alt: "next dot js",
    href: "https://nextjs.org",
  },
  {
    name: "PostgreSQL",
    src: "/images/homeAssets/tools/postgresql.svg",
    alt: "postgresql",
    href: "https://www.postgresql.org",
  },
  {
    name: "Prisma",
    src: "/images/homeAssets/tools/prisma.svg",
    alt: "prisma",
    href: "https://www.prisma.io",
  },
  {
    name: "Sass",
    src: "/images/homeAssets/tools/sass.svg",
    alt: "sass",
    href: "https://sass-lang.com",
  },
  {
    name: "Github",
    src: "/images/homeAssets/tools/github.svg",
    alt: "github",
    href: "https://github.com",
  },
  {
    name: "Figma",
    src: "/images/homeAssets/tools/figma.svg",
    alt: "figma",
    href: "https://figma.com",
  },
  {
    name: "Typescript",
    src: "/images/homeAssets/tools/typescript.svg",
    alt: "typescript",
    href: "https://www.typescriptlang.org",
  },
  {
    name: "Zod",
    src: "/images/homeAssets/tools/zod.svg",
    alt: "zod",
    href: "https://zod.dev",
  },
  {
    name: "Swiper",
    src: "/images/homeAssets/tools/swiper.svg",
    alt: "swiper",
    href: "https://swiperjs.com",
  },
  {
    name: "AmazonS3",
    src: "/images/homeAssets/tools/amazons3.svg",
    alt: "amazon",
    href: "https://aws.amazon.com/s3/",
  },
  {
    name: "Cloudflare",
    src: "/images/homeAssets/tools/cloudflare.svg",
    alt: "cloudflare",
    href: "https://www.cloudflare.com",
  },
  {
    name: "Tailwind",
    src: "/images/homeAssets/tools/tailwindcss.svg",
    alt: "tailwind",
    href: "https://tailwindcss.com",
  },
  {
    name: "HTML5",
    src: "/images/homeAssets/tools/html5.svg",
    alt: "html5",
    href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
];


export const Catalog = () => {

    // Parallax Title
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true });
    
  return (
    <section id="catalog-section" className="catalog">

        {/* Left Catalog */}
        <div className="left-catalog">

            <header>
                 <motion.div
                    ref={ref}
                    initial={{ x: -120, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h2>Our <span className='golden-text'>Services</span> Catalog</h2>
                </motion.div>

                <div className="left-catalog-info">
                    <p><span className='catalog-highlight'>Catalog </span><span className="dot">&#9679;</span> Faq <span className="dot">&#9679;</span> Toolset</p>
                </div>

            </header>
        </div> 
        
        <div id='catalog' className="catalog-inner-container">

            {/* Upper left catalog */}
            <p className='upper-text'>
                Explore our services in web development, graphic design, video editing, and 
                tailored business solutions.
            </p>

            {/* Right Catalog */}
            <div className="right-catalog">
                {/* Catalog card list */}
                <div className="catalog-card-container">
                    {catalog.map((catalogItem, i) => (
                        <div className="catalog-card" id={catalogItem.id} key={i}>
                            <div className="inner-catalog-card">
                                 <div className="card-preview">
                                    <Image
                                        src={catalogItem.src}
                                        width={200}
                                        height={200}
                                        alt={catalogItem.alt}
                                        className="poster-card"
                                    />
                                    <div className="inner-preview-card">
                                        <h3>{catalog[i]?.title}</h3>
                                    </div>
                                </div>
                                 <div className="hidden-catalog">
                                        <p>{catalog[i]?.desc}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Faqs section */}
        <div id='faq' className='faq-container'>
            <div className="left-catalog-info">
                <p>Catalog <span className="dot">&#9679;</span><span className='catalog-highlight'> Faq </span><span className="dot">&#9679;</span> Toolset</p>
            </div>

            {/* Inner container */}
            <h3>Frequently Asked Question</h3>
            <div className='faq-inner-container'>
                <div>
                    <div className='faq-title-container'><span className='faq-question'>Q1: </span><p className='title-faq-question'>What services does Aethra Studio offer?</p><br /></div>
                    <p>A: We specialize in Web Development, Business Consulting, Graphic Design, and Video Editing — providing modern 
                    and high-quality solutions tailored to your goals.</p>
                </div>
                <div>
                    <div className='faq-title-container'><span className='faq-question-2'>Q2: </span><p className='title-faq-question'>How long does it take to complete a project? </p><br /></div>
                    <p>A: Project timelines vary based on scope, but most small-to-medium projects take between 1–4 weeks. We prioritize both speed and quality.</p> 
                </div>
                <div> 
                    <div  className='faq-title-container'><span className='faq-question'>Q3: </span><p className='title-faq-question'>How long does it take to complete a project? </p><br /></div>
                    <p>A: Absolutely. We offer a revision phase to ensure the final result aligns perfectly with your expectations.</p>
                </div>
                <div>
                    <div className='faq-title-container'><span className='faq-question-2'>Q4: </span><p className='title-faq-question'>Do I need to pay upfront?</p> <br /></div>
                    <p>A: We usually require a 50% upfront payment, with the remaining balance due upon project completion. For long-term 
                    collaborations, we offer flexible payment terms.</p>
                </div>
                <div>
                    <div className='faq-title-container'><span className='faq-question'>Q5: </span><p className='title-faq-question'>How do we communicate during the project?</p> <br /></div>
                    <p>A: We use your preferred platform — whether it’s WhatsApp, email, or Zoom — and provide regular updates throughout the project timeline.</p>
                </div>
                <div>
                    <div className='faq-title-container'><span className='faq-question-2'>Q6: </span><p className='title-faq-question'>What if I only need help with design, not development?</p> <br /></div>
                    <p>A: That’s totally fine! We offer design-only services (UI/UX, branding, graphics) as standalone packages.</p>
                </div>
            </div>
        </div>   

        {/* Tools section */}
        <div id='tools' className='tools-slider'>
            <div className="left-catalog-info">
                <p>Catalog <span className="dot">&#9679;</span> Faq <span className="dot">&#9679;</span> <span className='catalog-highlight'> Toolset</span></p>
            </div>

            {/* Top Tools slider */}
            <Swiper 
                className="slider-card-wrapper"
                spaceBetween={0}
                slidesPerView={8}
                grabCursor={true}
                loop={true}
                modules={[Autoplay]}
                speed={7000}
                autoplay={{
                    delay: 0, 
                    disableOnInteraction: false,
                }}
                breakpoints={{
                360: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                480: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 8,
                    spaceBetween: 20,
                },
                1536: {
                    slidesPerView: 8,
                    spaceBetween: 20,
                },
                }}             
            >
                {toolsIcon.map((toolsIcon, index) => (
                <SwiperSlide key={index} className="tools-card">
                    <a
                       href={toolsIcon.href}
                    >
                        <Image 
                            src={toolsIcon.src}
                            width={30}
                            height={30}
                            alt={toolsIcon.alt}
                            className="tool-icon"
                        />
                    </a>
                    <p>{toolsIcon.name}</p>
                </SwiperSlide>
                ))}
            </Swiper>

            {/* Bottom Tools slider */}
            <Swiper 
                className="slider-card-wrapper"
                spaceBetween={0}
                slidesPerView={8}
                grabCursor={true}
                loop={true}
                modules={[Autoplay]}
                speed={7000}
                autoplay={{
                    delay: 0, 
                    disableOnInteraction: false,
                    reverseDirection: true,
                }}
                breakpoints={{
                360: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                480: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 8,
                    spaceBetween: 20,
                },
                1536: {
                    slidesPerView: 8,
                    spaceBetween: 20,
                },
                }}             
            >
                {toolsIcon.map((toolsIcon, index) => (
                <SwiperSlide key={index} className="tools-card">
                    <a
                       href={toolsIcon.href}
                    >
                        <Image 
                            src={toolsIcon.src}
                            width={30}
                            height={30}
                            alt={toolsIcon.alt}
                            className="tool-icon"
                        />
                    </a>
                    <p>{toolsIcon.name}</p>
                </SwiperSlide>
                ))}
            </Swiper>

        </div>    

    </section>
  )
}
