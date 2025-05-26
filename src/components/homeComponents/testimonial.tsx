
//=========== TESTIMONIALS COMPONENT ==========//
'use client';

import React, { useRef } from 'react'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useInView } from 'framer-motion';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";

const testimonials = [
  {
    name: 'Kashy',
    review: 'The site looks great and works flawlessly. Delivered on time with everything I asked for. Super happy!',
    avatar: '/images/homeAssets/introduction/avatar2.png',
    project: 'Web Fullstack',
    date: '27/02/2025',
    id: '2'
  },
  {
    name: 'Chann',
    review: 'Smooth and clean edits. The video turned out great and really boosted my content. Definitely coming back.',
    avatar: '/images/homeAssets/introduction/avatar3.png',
    project: 'Video Editing',
    date: '01/03/2025',
    id: '3'
  },
  {
    name: 'Enn',
    review: 'Clean, creative, and exactly what I needed. Great communication and fast turnaround. Loved the result!',
    avatar: '/images/homeAssets/introduction/avatar4.png',
    project: 'Graphic Design',
    date: '05/03/2025',
    id: '4'
  },
];

const companyTop = [
  {
    src: '/images/homeAssets/companies/fake1.svg',
    alt: 'View Web dev plan and pricing',
  },
  {
    src: '/images/homeAssets/companies/fake2.svg',
    alt: 'View Web dev plan and pricing',
  },
  {
    src: '/images/homeAssets/companies/fake3.png',
    alt: 'View Web dev plan and pricing',
  },
  {
    src: '/images/homeAssets/companies/fake4.png',
    alt: 'View Consultant services',
  },
  {
    src: '/images/homeAssets/companies/fake5.png',
    alt: 'View Graphic Design services',
  },
];

const companyBottom = [
  {
    src: '/images/homeAssets/companies/fake6.png',
    alt: 'View Video Editing services',
  },
  {
    src: '/images/homeAssets/companies/fake7.png',
    alt: 'View Video Editing services',
  },
  {
    src: '/images/homeAssets/companies/logo.png',
    alt: 'View Video Editing services',
  },
];

export default function Testimonial() {

  // Parallax Title
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Swiper ref
  const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="testimonial">

            {/* Testimonial Header */}
            <header>
                <motion.div
                    ref={ref}
                    className="mb-7 flex justify-center items-center"
                    initial={{ x: -120, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h2><span className='golden-text'>Trusted</span> by Top Companies</h2>
                </motion.div>

                    {/* Fake companies top */}
                     <div 
                        className="company-list-top"
                      >
                        {companyTop.map((companyTop, index) => (
                            <div key={index} className="company-card">
                                <Image 
                                    src={companyTop.src}
                                    width={200}
                                    height={200}
                                    alt={companyTop.alt}
                                    className="company"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Fake companies bottom */}
                     <div 
                            className="company-list-bottom"
                      >
                        {companyBottom.map((companyBottom, index) => (
                            <div key={index} className="company-card">
                                <Image 
                                    src={companyBottom.src}
                                    width={200}
                                    height={200}
                                    alt={companyBottom.alt}
                                    className="company"
                                />
                            </div>
                        ))}
                    </div>
                    <p className='testimonial-center-text'>Our client are satisfied!</p>
            </header>

            {/* Navigation button*/}
            <div className='testimonial-navigation-btn'>
                <Image 
                    src="/images/misc/arrowBack.png" 
                    width={35} 
                    height={35} 
                    onClick={() => swiperRef.current?.slidePrev()} 
                    className='btn-back' 
                    alt='arrow-back' />
                <Image 
                    src="/images/misc/arrowForward.png" 
                    width={35} 
                    height={35} 
                    onClick={() => swiperRef.current?.slideNext()} 
                    className='btn-forward' 
                    alt='arrow-forward' />
            </div>

            {/* Testimonial Slider */}
            <Swiper
                speed={600}
                modules={[Navigation]}
                loop={true}
                spaceBetween={25}
                slidesPerView={3}
                className='swiper-testimonial' 
                onSwiper={(swiper) => (swiperRef.current = swiper)} 
                breakpoints={{
                360: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1536: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                }}              
            >
                {/* Testimonial card */}
                {testimonials.map((testimonials, index) => (
                    <SwiperSlide 
                        key={index}
                        className="swiper-testimonial-card"
                    >
                        {/* Upper card} */}
                        <div className="upper-card-text">
                            <p>Reviewed on {testimonials.date}</p>
                        </div>

                        {/* Middle card */}
                        <p className='middle-card-text'>"{testimonials.review}"</p>

                        {/* Bottom card */}
                        <div className="bottom-card">
                            <Image
                                src={testimonials.avatar} 
                                width={45} 
                                height={45}
                                className='testimonial-profile' 
                                alt='customer-avatar'
                            />
                            <div className='profile-info'>
                                <p>{testimonials.name}</p>
                                <p className='profile-info-bottom-text'>Project: {testimonials.project}</p>
                            </div>
                        </div>

                    </SwiperSlide> 
                ))}
            </Swiper>

        </section>
    )
}