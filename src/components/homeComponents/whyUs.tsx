
//=========== WHY US COMPONENT ==========//

'use client';

import { useRef } from 'react';
import { Brain, Camera, Brush, Code2 } from 'lucide-react';
import { motion, useInView, easeOut } from 'framer-motion';
import Image from 'next/image';

const uspData = [
  {
    icon: <Brain size={40} />,
    title: "Visionary Business Consulting",
    desc: "We help shape data-driven digital strategies and branding that resonate."
  },
  {
    icon: <Camera size={40} />,
    title: "Professional Video Editing",
    desc: "Cinematic, engaging, and brand-aligned storytelling in every frame."
  },
  {
    icon: <Brush size={40} />,
    title: "Characterful Graphic Design",
    desc: "Every design tells a story — from logos to your brand's visual identity."
  },
  {
    icon: <Code2 size={40} />,
    title: "Custom Web Development",
    desc: "A blend of aesthetics, performance, and functionality in every project."
  },
];

export default function WhyUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id='whyus' className="why-us">

      {/* Why us backgorund */}
      <div className='whyus-bg'>
        <Image
            src="/images/homeAssets/office-bg.webp"
            fill
            alt='Why us section'
            decoding='async'
        />
      </div>

      {/* Why us Title */}
      <motion.div 
        ref={ref}
        initial={{ y: 10, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: easeOut }}
        className="why-us__header"
      >
        <h2>We Don’t Just Create. We Strategize, Design, and Build for <span className='golden-text'>Impact.</span></h2>
      </motion.div>

      {/* Why us content */}
      <div className="why-us__grid">
        {uspData.map((usp, i) => (
          <motion.div
            ref={ref}
            initial={{ x: -120 , opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: easeOut }}
            className="why-us__card" key={i}
          >
            <div className="why-us__icon">{usp.icon}</div>
            <div className='inner-whyus-card'>
                <h3>{usp.title}</h3>
                <p>{usp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Milestones */}
      <div className="milestone-container-whyus" aria-labelledby="project-handled">

            {/* Card milestone 1 */}
            <div id="project-handled" className="milestone-card-whyus">
                <h3>Year of Experience</h3>
                <div className="inner-milestone-whyus">
                <Image
                    src="/images/misc/timeWhite.svg"
                    width={35}
                    height={35}
                    decoding="async"
                    alt="Year of Experience"
                    className="milestone-image-whyus"
                />
                    <p>0 year</p>
                </div>
            </div>

            {/* Card milestone 2 */}
            <div id="project-handled" className="milestone-card-whyus">
                <h3>Project Handled</h3>
                <div className="inner-milestone-whyus">
                <Image
                    src="/images/misc/chart.svg"
                    width={35}
                    height={35}
                    decoding="async"
                    alt="Project Handled"
                    className="milestone-image-whyus"
                />
                    <p>0 project</p>
                </div>
            </div>
                    
      </div>

      {/* Why us bottom */}
      <div className='whyus-bottom'>
        <p>
            With Aethra Studio, you don’t need to run in circles. 
            We handle all your business and creative needs. With top-tier 
            quality and a shared vision that aligns with your goals.
        </p>
      </div>
     
    </section>
  );
}