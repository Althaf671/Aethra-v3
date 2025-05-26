
//=========== NAVIGATION BAR COMPONENT ==========//

import LeftNavbar from "./leftNavbar";
import RightNavbar from "./rightNavbar";

export default function Navbar() {
    
  return (
    <nav className="navbar-container">
      <LeftNavbar />
      <RightNavbar />
    </nav>
  );
}