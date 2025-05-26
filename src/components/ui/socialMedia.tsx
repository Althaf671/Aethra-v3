
//=========== SOCIAL MEDIA COMPONENT ==========//
'use client';

import Image from "next/image";

const images = [
  { src: "/images/homeAssets/instagram.svg", alt: "instagram-logo", 
    href: 'https://www.instagram.com/aethrastudio.id?igsh=NHAycWY3aGZmd3c',
  },
  { src: "/images/homeAssets/tiktok.svg", alt: "tiktok-logo", 
    href: 'https://www.tiktok.com/@aethra.studio26?_t=ZS-8vVztYBtQuY&_r=1',
  },
  { src: "/images/homeAssets/youtube.svg", alt: "youtube-logo", 
    href: 'https://youtube.com/@aethrastudio?si=9mrK3X_Xy-jIR9yP',
  }, 
];

export default function SocialMedia() {
    return (
        <div className="social-media">
        {images.map((image, index) => (
            <a
               key={index}
               href={image.href}
               target="_blank"
               rel="noopener noreferrer"
               aria-label={`Visit our ${image.alt.replace('-logo', '')} page`}
            >
                <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={30} 
                    height={30} 
                    className="social-media"
                />
            </a>
        ))} 
        </div>    
    )
};