
//=========== NAVIGATION BAR LEFT COMPONENT  ==========//

import Link from "next/link";
import DropdownNav from "./dropdownNav";

export default function LeftNavbar() {

    return (
        <>
            <div className="left-navbar" aria-label="main navigation">
            <Link href='/client/about'>
                <h2>
                    <span className="golden-a">A</span>
                    ethra
                </h2>
            </Link>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li className="pricing-navbar"><Link href='/#pricing'>Pricing</Link></li>
                <li><Link href='/#whyus'>Instruction</Link></li>
                <li><Link href='/client/about'>About</Link></li>
            </ul>

            </div>
            {/* Dropdown Nav */}
            <DropdownNav />
        </>
    )
}