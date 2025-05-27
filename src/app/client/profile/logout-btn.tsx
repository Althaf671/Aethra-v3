
//========= LOGOUT BUTTON ==========//
'use client';

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export default function LogoutBtn() {
    return (
        <LogoutLink style={{ color: 'black' }}>
            Log out
        </LogoutLink>
    )
}