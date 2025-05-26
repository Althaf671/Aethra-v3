
//=========== PRICING COMPONENT ==========//
'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {

    // Parallax Title
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    <section id="pricing" className="pricing-section">
        

        {/* Pricing headeer */}
        <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <header>
                    <h2>Choose a <span className="golden-text-pricing">Plan </span> that's right for you.</h2>
                    <p>Prices shown are base estimates. Final costs may vary depending on project scope.</p>
            </header>
        </motion.div>

        {/* banner wrapper */}
        <div className="banner-wrapper">

            {/* banner Planet */}
            <div className="banner-planet">

                {/* upper banner */}
                <div className="upper-banner">
                    <div className='discount'>5%</div>
                    <p className='price-start'>Start from</p>
                    <p className='plan-price'>$300</p>
                    <p className='plan-price-desc'>Perfect for beginners starting their digital journey. </p>
                    <p className='consult-btn-desc'>Need help?</p>

                    {/* pricing action button */}
                    <div className='pricing-btn'>
                        <a href="https://web.whatsapp.com/?locale=id_ID" target="_blank" rel="noopener noreferrer" className='pricing-select-btn'>Select</a>
                        <Link href="https://web.whatsapp.com/?locale=id_ID" className='pricing-consult-btn'>Consult</Link>
                    </div>

                    <p className='plan-benefit'>Benefits</p>
                </div>

                {/* bottom banner */}
                <div className="bottom-banner">
                    <div className='benefit-bottom-banner'>
                        <div className='inner-benefit-banner'>
                            <Check className="icon-check" />
                            <p className='benefit-list'>Free business consultation</p>
                        </div>
                        <div className='inner-benefit-banner'>
                            <Check className="icon-check" />
                            <p className='benefit-list'>4 Custom graphic designs</p>
                        </div>
                        <div className='inner-benefit-banner'>
                            <Check className="icon-check" />
                            <p className='benefit-list'>3 Fully customize videos</p>
                        </div>
                        <div className='inner-benefit-banner'>
                            <Check className="icon-check" />
                            <p className='benefit-list'>Landing page website</p>
                        </div>
                        <div className='inner-benefit-banner'>
                            <Check className="icon-check" />
                            <p className='benefit-list'>Free revision for a week</p>
                        </div>
                    </div>

                    {/* Title */}
                    <h3><span className='plan-gradient-text-planet'>Planet</span> Plan</h3>
                </div>

            </div>

            {/* banner Nebula */}
            <div className="banner-nebula">
                {/* upper banner */}
                <div className="upper-banner">
                    <div className='discount'>5%</div>
                    <p className='price-start'>Start from</p>
                    <p className='plan-price'>$1000</p>
                    <p className='plan-price-desc'>Designed for ambitious visions and high-end projects. </p>
                    <p className='consult-btn-desc'>Need help?</p>

                    {/* pricing action button */}
                    <div className='pricing-btn'>
                        <a href="https://web.whatsapp.com/?locale=id_ID" target="_blank" rel="noopener noreferrer" className='pricing-select-btn'>Select</a>
                        <Link href="https://web.whatsapp.com/?locale=id_ID" className='pricing-consult-btn'>Consult</Link>
                    </div>

                    <p className='plan-benefit'>Benefits</p>
                </div>

                {/* bottom banner */}
                <div className="bottom-banner">
                    <div className='benefit-bottom-banner'>
                        <div className='inner-benefit-banner'>
                            <Check className="icon-check" />
                            <p className='benefit-list'>Free business consultation</p>
                        </div>
                        <div className='inner-benefit-banner'>
                            <Check className="icon-check" />
                            <p className='benefit-list'>9 Custom graphic designs</p>
                        </div>
                        <div className='inner-benefit-banner'>
                            <Check className="icon-check" />
                            <p className='benefit-list'>7 Fully customize videos</p>
                        </div>
                        <div className='inner-benefit-banner'>
                            <Check className="icon-check" />
                            <p className='benefit-list'>Premium complex website</p>
                        </div>
                        <div className='inner-benefit-banner'>
                            <Check className="icon-check" />
                            <p className='benefit-list'>Free revision for a month</p>
                        </div>
                    </div>

                    {/* Title */}
                    <h3><span className='plan-gradient-text-nebula'>Nebula</span> Plan</h3>
                </div>
            </div>

            {/* banner Star */}
            <div className="banner-star">
                {/* upper banner */}
                <div className="upper-banner">
                    <div className='discount'>5%</div>
                    <p className='price-start'>Start from</p>
                    <p className='plan-price'>$500</p>
                    <p className='plan-price-desc'>Ideal for growing creators needing more features and faster performance.</p>
                    <p className='consult-btn-desc'>Need help?</p>

                    {/* pricing action button */}
                    <div className='pricing-btn'>
                        <a href="https://web.whatsapp.com/?locale=id_ID" target="_blank" rel="noopener noreferrer" className='pricing-select-btn'>Select</a>
                        <Link href="https://web.whatsapp.com/?locale=id_ID" className='pricing-consult-btn'>Consult</Link>
                    </div>

                    <p className='plan-benefit'>Benefits</p>
                </div>

                {/* bottom banner */}
                <div className="bottom-banner">
                    <div className='benefit-bottom-banner'>
                        <div className='inner-benefit-banner'>
                            <Check className="icon-check" />
                            <p className='benefit-list'>Free business consultation</p>
                        </div>
                        <div className='inner-benefit-banner'>
                            <Check className="icon-check" />
                            <p className='benefit-list'>6 Custom graphic designs</p>
                        </div>
                        <div className='inner-benefit-banner'>
                            <Check className="icon-check" />
                            <p className='benefit-list'>5 Fully customize videos</p>
                        </div>
                        <div className='inner-benefit-banner'>
                            <Check className="icon-check" />
                            <p className='benefit-list'>Standard Complex website</p>
                        </div>
                        <div className='inner-benefit-banner'>
                            <Check className="icon-check" />
                            <p className='benefit-list'>Free revision for 2 weeks</p>
                        </div>
                    </div>

                    {/* Title */}
                    <h3><span className='plan-gradient-text-star'>Star</span> Plan</h3>
                </div>
            </div>

        </div>

        {/* Bottom Home */}
        <div className='disclaimer'>
            Disclaimer: Aethra Studio is a university project developed solely for academic purposes and is not intended for real commercial use. 
            However, if you are interested in creating a similar website or exploring collaboration opportunities, please feel free to contact
            our <a href='https://wa.me/6282260902732' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }} >web developer</a> directly.
        </div>

        

    </section>
  )
}
