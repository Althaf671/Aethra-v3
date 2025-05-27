'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

// Whatsapp message helper
const getWhatsAppLink = (plan: string) => {
  const baseURL = 'https://wa.me/6282260902732';
  const messages: Record<string, string> = {
    Planet: "Halo, saya tertarik dengan Planet Plan dari Aethra Studio. Bisa dijelaskan lebih lanjut?",
    Star: "Halo, saya tertarik dengan Star Plan dari Aethra Studio. Mohon bantuannya untuk konsultasi.",
    Nebula: "Halo, saya ingin tahu lebih banyak tentang Nebula Plan dari Aethra Studio. Bisa dibantu?",
  };
  const message = encodeURIComponent(messages[plan] || '');
  return `${baseURL}?text=${message}`;
};

const plans = [
  {
    name: 'Planet',
    price: '$300',
    desc: 'Perfect for beginners starting their digital journey.',
    benefits: [
      'Free business consultation',
      '4 Custom graphic designs',
      '3 Fully customize videos',
      'Landing page website',
      'Free revision for a week',
    ],
  },
  {
    name: 'Star',
    price: '$500',
    desc: 'Ideal for growing creators needing more features and faster performance.',
    benefits: [
      'Free business consultation',
      '6 Custom graphic designs',
      '5 Fully customize videos',
      'Standard Complex website',
      'Free revision for 2 weeks',
    ],
  },
  {
    name: 'Nebula',
    price: '$1000',
    desc: 'Designed for ambitious visions and high-end projects.',
    benefits: [
      'Free business consultation',
      '9 Custom graphic designs',
      '7 Fully customize videos',
      'Premium complex website',
      'Free revision for a month',
    ],
  },
];

export default function Pricing() {
  const { isAuthenticated } = useKindeBrowserClient();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="pricing" className="pricing-section">
      <motion.div
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <header>
          <h2>Choose a <span className="golden-text-pricing">Plan</span> that&apos;s right for you.</h2>
          <p>Prices shown are base estimates. Final costs may vary depending on project scope.</p>
        </header>
      </motion.div>

      <div className="banner-wrapper">
        {plans.map((plan, index) => (
          <div key={plan.name} className={`banner-${plan.name.toLowerCase()}`}>
            <div className="upper-banner">
              {plan.name === 'Nebula' && <div className='best-plan'>Best deal!</div>}
              <p className='price-start'>Start from</p>
              <p className='plan-price'>{plan.price}</p>
              <p className='plan-price-desc'>{plan.desc}</p>
              <p className='consult-btn-desc'>Need help?</p>

              <div className='pricing-btn'>
                {isAuthenticated ? (
                  <a
                    href={getWhatsAppLink(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pricing-select-btn"
                  >
                    Select
                  </a>
                ) : (
                  <Link
                    href="/auth/login"
                    className="pricing-select-btn"
                    style={{ opacity: 0.7 }}
                  >
                    Login to Select
                  </Link>
                )}
                <a
                  href={getWhatsAppLink(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pricing-consult-btn"
                >
                  Consult
                </a>
              </div>

              <p className='plan-benefit'>Benefits</p>
            </div>

            <div className="bottom-banner">
              <div className='benefit-bottom-banner'>
                {plan.benefits.map((benefit) => (
                  <div key={benefit} className='inner-benefit-banner'>
                    <Check className="icon-check" />
                    <p className='benefit-list'>{benefit}</p>
                  </div>
                ))}
              </div>
              <h3><span className={`plan-gradient-text-${plan.name.toLowerCase()}`}>{plan.name}</span> Plan</h3>
            </div>
          </div>
        ))}
      </div>

      <div className='disclaimer'>
        Disclaimer: Aethra Studio is a university project developed solely for academic purposes and is not intended for real commercial use.
        However, if you are interested in creating a similar website or exploring collaboration opportunities, please feel free to contact
        our <a href='https://wa.me/6282260902732' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }} >web developer</a> directly.
      </div>
    </section>
  );
}