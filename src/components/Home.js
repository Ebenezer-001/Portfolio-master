import "./Home.css";
import { BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <p>Hi, my name is</p>
      <h1>Ebenezer Ehimen Asibor.</h1>
      <h1>I'm a Frontend Developer.</h1>
      <p>
        Using HTML, CSS, Javascript, and React, I develop interactive and
        responsive websites and web applications.
      </p>
      <Link to='/projects' className='project-btn'>
        View Projects <BsArrowRight className='arrow' />
      </Link>
      <IconContext.Provider value={{ className: "social-icons" }}>
        <ul className='social'>
          <li>
            <a
              href='https://twitter.com/asibor_'
              target='_blank'
              rel='noreferrer'
            >
              <FiIcons.FiTwitter />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/ebenezer-asibor-72402327a/'
              target='_blank'
              rel='noreferrer'
            >
              <FiIcons.FiLinkedin />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/Ebenezer-001'
              target='_blank'
              rel='noreferrer'
            >
              <FiIcons.FiGithub />
            </a>
          </li>
          <li>
            <a href='mailto:asiborebenezer67@gmail.com'>
              <FiIcons.FiMail />
            </a>
          </li>
        </ul>
      </IconContext.Provider>
    </main>
  );
};

export default Main;
