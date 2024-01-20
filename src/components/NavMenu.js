import React from "react";
import { NavLink } from "react-router-dom";
import { BsDownload } from "react-icons/bs";

export const NavMenu = ({ nav }) => {
  return (
    <>
      <ul className={nav ? "open" : ""}>
        <li>
          <NavLink to='/' end>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to='/projects'>projects</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>contact</NavLink>
        </li>

        <a href='./resume.pdf' target='_blank' className='resume nav-resume'>
          resume <BsDownload />
        </a>
      </ul>
      <a href='./resume.pdf' target='_blank' className='resume'>
        resume <BsDownload />
      </a>
    </>
  );
};
