//=========== NAVIGATION BAR RIGHT COMPONENT ==========//
'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const mainRoutes = [
  { path: "/" },
  {
    path: "/client/profile",
    requiresAuth: true,
  },
];

export default function RightNavbar() {
  const pathname = usePathname();
  const { user, isAuthenticated } = useKindeBrowserClient();

  return (
    <div className="right-navbar">
      <div className="lang">
        <p>🇬🇧 Eng</p>
      </div>

      <ul>
        {mainRoutes.map(({ path, requiresAuth }) => {

          if (requiresAuth && !isAuthenticated) {
            return (
              <li key={path}>
                <LoginLink>
                  <Image
                    src="/images/misc/profile.svg"
                    width={35}
                    height={35}
                    alt="Profile Dashboard"
                    decoding="async"
                    priority
                    className="profile-navbar"
                  />
                </LoginLink>
              </li>
            );
          }
        })}

        {/* Change user avatar if they authenticated */}
        {isAuthenticated && user?.picture && (
          <li>
            <Link href="/client/profile">
              <Image
                src={user.picture}
                width={35}
                height={35}
                alt="User Avatar"
                className="profile-navbar"
                style={{ borderRadius: '50%' }}
                decoding="async"
                priority
              />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}