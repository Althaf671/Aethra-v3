
//=========== PROFILE PAGE ===========//

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import LogoutBtn from "./logout-btn";

export default async function ProfilePage() {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    redirect('/');
  }

  return (
    <main>
        <LogoutBtn />
    </main>
  );
}