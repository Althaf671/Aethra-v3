
//=========== HERO COMPONENT ==========//
'use client';

import React, { useRef } from 'react'
import Image from "next/image";
import { motion, useInView } from 'framer-motion';

const catalog = [
  {
    title: "Web Development",
    src: '/images/homeAssets/poster/webDev.webp',
    alt: 'View Web dev plan and pricing',
    desc: "As a web developer, I specialize in building fast, scalable, and modern web applications using cutting-edge technologies like Next.js, PostgreSQL, Prisma, and advanced SCSS architecture. With a strong focus on performance, maintainability, and user experience, I deliver professional-grade solutions tailored to your needs.",
  },
  {
    title: "Bussines Consultant",
    src: '/images/homeAssets/poster/consultant.webp',
    alt: 'View Consultant services',
    desc: "Our business consultants help you craft winning strategies, optimize operations, and scale sustainably through market-driven insights and tailored guidance.",
  },
  {
    title: "Graphic Designer",
    src: '/images/homeAssets/poster/graphicDesigner.webp',
    alt: 'View Graphic Design services',
    desc: "Our graphic designers bring your brand to life with visually stunning designs, ensuring every asset—from logos to marketing materials—captures attention and communicates clearly.",
  },
  {
    title: "Video Editing",
    src: '/images/homeAssets/poster/videoEditing.webp',
    alt: 'View Video Editing services',
    desc: "Our video editors transform raw footage into compelling visual stories, combining technical precision with creative flair to elevate your message across all platforms.",
  },
]

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
                    <h2>Our<span className='golden-text'>Services</span> Catalog</h2>
                </motion.div>

                <div className="pagination">.Abd . .</div>

            </header>
        </div> 
        
        <div className="catalog-inner-container">

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
                        <div className="catalog-card" key={i}>
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

    </section>
  )
}
