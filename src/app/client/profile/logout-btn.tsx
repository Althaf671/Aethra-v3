
//========= LOGOUT BUTTON ==========//
'use client';

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Underline } from "lucide-react";

export default function LogoutBtn() {
    return (
        <LogoutLink style={{ color: 'white', textDecoration: 'underline' }}>
            Log out
        </LogoutLink>
    )
}