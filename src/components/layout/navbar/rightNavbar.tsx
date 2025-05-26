
//=========== NAVIGATION BAR RIGHT COMPONENT ==========//
'use client';

import Image from "next/image";
import Link from "next/link";

export default function RightNavbar() {
    return (
        <div className="right-navbar">
             <div className="lang">
                <p>🇬🇧 Eng</p>
            </div>
            <Link href='/client/about'>
                <Image 
                    src='/images/misc/profile.svg'
                    width={35}
                    height={35}
                    alt="Profile Dashboard"
                    decoding="async"
                    priority
                    className="profile-navbar"
                />
            </Link>
        </div>
    )
}