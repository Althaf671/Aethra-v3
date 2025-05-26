
//=========== HERO COMPONENT ==========//
'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const posters = [
  {
    src: '/images/homeAssets/poster/webDev.webp',
    alt: 'View Web dev plan and pricing',
    href: '/#catalog',
  },
  {
    src: '/images/homeAssets/poster/consultant.webp',
    alt: 'View Consultant services',
    href: '/#catalog',
  },
  {
    src: '/images/homeAssets/poster/graphicDesigner.webp',
    alt: 'View Graphic Design services',
    href: '/#catalog',
  },
  {
    src: '/images/homeAssets/poster/videoEditing.webp',
    alt: 'View Video Editing services',
    href: '/#catalog',
  },
];

export default function Hero() {
    return (
        <section className="hero">


            {/* Hero Content */}
            <div id="hero-section" className="hero-content">

                {/* Header */}
                <header aria-labelledby="hero-title hero-subtitle">
                    <h1 id="hero-title">Aethra Studio builds Professional Business Consulting, Promotion, and Websites.</h1>
                    <p id="hero-subtitle">Empowering growth through expertise.</p>
                </header>

                {/* Milestones */}
                <div className="milestone-container" aria-labelledby="project-handled">

                    {/* Card milestone */}
                    <div id="project-handled" className="milestone-card">
                        <h3>Project Handled</h3>
                        <div className="inner-milestone">
                            <Image
                                src="/images/misc/chart.svg"
                                width={35}
                                height={35}
                                decoding="async"
                                alt="Illustration of Aethra Studio Hero section showing creativity in media design"
                                className="milestone-image"
                            />
                            <p>0 project</p>
                        </div>
                    </div>
                    
                </div>


                {/* CTA */}
                <div className="cta-buttons">

                    {/* Explore button */}
                    <motion.div>
                        <a
                            href="#whyus"
                            aria-label="Get started to explore our website"
                            className="explore-button"
                        >
                            Get started
                        </a>
                    </motion.div>

                    {/* Pricing button */}
                    <motion.div>
                        <Link
                            href="/#pricing"
                            aria-label="Check our Pricing"
                            className="hero-pricing-button"
                        >
                            Pricing
                        </Link>
                    </motion.div>

                </div>

            </div>

            {/* Overlay background */}
            <div className="overlay"></div>

            {/* Hero slider */}
            <div className="swiper-container">

               {/* Swiper top */}
               <Swiper 
                    className="swiper-top"
                    spaceBetween={18}
                    slidesPerView={3}
                    loop={true}
                    grabCursor={true}
                    modules={[Autoplay]}
                    speed={7000}
                    autoplay={{
                        delay: 0, 
                        disableOnInteraction: false,
                    }}
                    >
                    {posters.map((poster, index) => (
                        <SwiperSlide key={index} className="swiper-card">
                        <Image 
                            src={poster.src}
                            width={200}
                            height={200}
                            alt={poster.alt}
                            className="poster"
                            decoding="async"
                            priority
                        />
                        <a
                            href={poster.href}
                            className="btn-card"
                        >
                            View
                        </a>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Swiper bottom */}
                <Swiper 
                    className="swiper-bottom"
                    spaceBetween={18}
                    slidesPerView={3}
                    loop={true}
                    grabCursor={true}
                    modules={[Autoplay]}
                    speed={7000}
                    autoplay={{
                        delay: 0, 
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    >
                    {posters.map((poster, index) => (
                        <SwiperSlide key={index} className="swiper-card">
                        <Image 
                            src={poster.src}
                            width={200}
                            height={200}
                            alt={poster.alt}
                            className="poster"
                            decoding="async"
                            priority
                        />
                        <a
                            href={poster.href}
                            className="btn-card"
                        >
                            View
                        </a>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </section>
    )
}