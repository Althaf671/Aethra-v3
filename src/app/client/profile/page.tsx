
//=========== PROFILE PAGE ===========//

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import "../../../styles/stylesHome/main.scss"
import ProfileDashboard from "@/components/profileComponent/profileDashboard";

export default async function ProfilePage() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();

  if (!isAuthenticated || !user) {
    return (
      <main className="main">
        <h2>Please log in to view your profile.</h2>
      </main>
    );
  }

  return (
    <main className="main">
      <ProfileDashboard />
    </main>
  );
}