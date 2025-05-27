
//=========== DROPDOWN NAVIGATION COMPONENT  ==========//
'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function DropdownNav() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef}>
            <div className="small-left-nav">
                <Link href='/client/about'>
                    <h2>
                        <span className="golden-a">A</span>
                        ethra
                    </h2>
                </Link>
                <Image
                    src='/images/misc/arrowDropdownWhite.png'
                    width={30}
                    height={30}
                    alt="Dropdown button"
                    className="dropdown-btn"
                    onClick={toggleDropdown}
                    priority
                />
            </div>

            <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li className="pricing-navbar-dropdown"><Link href='/#whyus'>Pricing</Link></li>
                    <li><Link href='/#catalog'>Catalog</Link></li>
                    <li><Link href='/client/about'>About</Link></li>
                </ul>
            </div>
        </div>
    );
}