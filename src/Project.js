import React from 'react';
import Capture7 from './Capture7.JPG';
import Capture6 from './Capture6.JPG';
import Capture3 from './Capture3.JPG';
import Capture4 from './Capture4.JPG';

const imageMap = {
  Capture7,
  Capture6,
  Capture3,
  Capture4,
};

const projectsData = [
  {
    title: 'To-Do-List',
    image: 'Capture7', // Use the key from imageMap
    link: 'https://htethtethlaing99.github.io/Simpletodolist/',
    description: 'The To-Do-List employs HTML for structure and CSS for styling, while its core functionality and interactivity are powered by JavaScript.'
  },
  {
    title: 'Change Background Color',
    image: 'Capture6',
    link: 'https://htethtethlaing99.github.io/change-bg-color/',
    description: 'The Change background color is built with HTML for structure, CSS for styling, and JavaScript for both functionality and interactivity.'
  },
  {
    title: 'Plannco Home Decoration',
    image: 'Capture3',
    link: 'https://spiffy-cascaron-1bb038.netlify.app/',
    description: 'Plannco Home Decoration project- HTML for structure, CSS for style, Bootstrap for responsiveness, and JavaScript for dynamic interactions, user-friendly website for home decoration.'
  },
  {
    title: 'Vegonia University Website',
    image: 'Capture4',
    link: 'https://inquisitive-belekoy-5a481f.netlify.app/',
    description: 'Vegonia University website seamlessly integrates HTML for structure, CSS for style, Bootstrap for responsiveness, and JavaScript for interactive elements.'
  }
];

const Project = () => (
  <div id="project-title">
    <h2>Projects</h2>
    <div id="projects">
      {projectsData.map((project, index) => (
        <div className="project-card" key={index}>
          <h2>{project.title}</h2>
          <img src={imageMap[project.image]} alt={project.title} />
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" id="link">
            View Project
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Project;
