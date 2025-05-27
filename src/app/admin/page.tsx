
//========= ADMIN PAGE ========//

import Dashboard from "@/components/adminComponents/dashboard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export default async function Admin() {
    const { isAuthenticated } = getKindeServerSession();
    const isLoggedIn = await isAuthenticated();
    if (!isLoggedIn) {
        redirect('/')
    }

    return (
        <main>
            <Dashboard />
        </main>
    )
}