'use client'

import React, { useState } from 'react';
import "../../../styles/stylesHome/layout/_footer.scss";
import Link from 'next/link';
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* About */}
        <div className="footer-brand">
          <h2>
            Aethra <span className="highlight">Studio</span>
          </h2>
          <p>
            Empowering your digital presence through modern, minimalist, and powerful web solutions.
          </p>
          <Link href="/client/about" className="about-link">
            Learn more about us &rarr;
          </Link>
        </div>

        {/* Navigation */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><a href="/#why">Why Us</a></li>
            <li><a href="/#catalog">Catalog</a></li>
            <li><a href="/#pricing">Pricing</a></li>
            <li><Link href="/client/about">About</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:aethrastudio26@gmail.com">
                <Mail size={16} /> aethrastudio26@gmail.com
              </a>
            </li>
            <li>
              <a href="https://instagram.com/aethrastudio" target="_blank" rel="noopener noreferrer">
                <Instagram size={16} /> Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/company/aethrastudio" target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/aethrastudio" target="_blank" rel="noopener noreferrer">
                <Github size={16} /> Github
              </a>
            </li>
          </ul>
          <p className="contact-hours">Mon - Fri: 09:00 - 18:00 WIB</p>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Subscribe</h4>
          <form onSubmit={handleSubmit} aria-label="Subscribe to newsletter">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              aria-required="true"
            />
            <button type="submit" aria-label="Subscribe">
              Submit
            </button>
          </form>
          {submitted && (
            <p className="newsletter-note" role="alert" aria-live="polite" style={{color: '#d4a800'}}>
              Thank you for subscribing!
            </p>
          )}
          <p className="newsletter-note">
            Get monthly updates, tips & offers.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="footer-social-cta">
        <p>Let's build something amazing together!</p>
        <Link href="/client/contact" className="cta-button">
          Contact Us
        </Link>
      </div>

      {/* Legal */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aethra Studio. All rights reserved.</p>
        <ul className="legal-links">
          <li><Link href="/terms">Terms of Service</Link></li>
          <li><Link href="/privacy">Privacy Policy</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;