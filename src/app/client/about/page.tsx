
//=========== ABOUT PAGE ===========//

import ProfileBanner from "@/components/aboutComponent/profileBanner";
import "../../../styles/stylesHome/main.scss"
import Navbar from "@/components/layout/navbar/navbar";

export default function About() {
    return (
        <main>
            <Navbar />
            <ProfileBanner />
        </main>
    )
}