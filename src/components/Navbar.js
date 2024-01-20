import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import "./Navbar.css";
import { NavMenu } from "./NavMenu";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleMenu = () => {
    setNav((prev) => !prev);
  };

  return (
    <nav>
      <div className='logo'>EA</div>

      <div className='menu' onClick={handleMenu}>
        {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
      <NavMenu className='navmenu' nav={nav} />
    </nav>
  );
};

export default Navbar;
