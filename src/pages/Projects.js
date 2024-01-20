import "./Projects.css";
import { projects } from "../data";
import * as IoIcons from "react-icons/io";

const iconstyle = { fontSize: 24 };

const Projects = () => {
  return (
    <div className='projects'>
      <h1>projects.</h1>
      <div className='projects-container'>
        {projects.map((item, index) => {
          return (
            <div className='box' key={index}>
              <img src={item.preview} alt='' />

              <div className='text'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>

              <div className='links'>
                <a href={item.link} target='_blank' rel='noreferrer'>
                  View Live Project
                  <IoIcons.IoMdOpen style={iconstyle} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
