import React from 'react';

const projectsData = [
    {
        title:'Guess Number Game',
        image:'./Capture1.JPG',
        link:'https://gorgeous-figolla-27710f.netlify.app/',
        description:
        'The Guess Number Game employs HTML for structure and CSS for styling, while its core functionality and interactivity are powered by JavaScript. '
    },

    {
        title:'Add To Cart',
        image:'./Capture2.JPG',
        link:'https://gorgeous-figolla-27710f.netlify.app/',
        description:
        'Add to Cart Simple app is built with HTML for structure, CSS for styling, and JavaScript for both functionality and interactivity.'
    },

    {
        title:'Plannco Home Decoration',
        image:'./Capture3.JPG',
        link:'https://gorgeous-figolla-27710f.netlify.app/',
        description:
        'Plannco Hoem Decoration project- HTML for structure, CSS for style, Bootstrap for responsiveness, and JavaScript for dynamic interactions, user-friendly website for home decoration.'
    },

    {
        title:'Vegonia University Website',
        image:'./Capture4.JPG',
        link:'https://gorgeous-figolla-27710f.netlify.app/',
        description:
        'Vegonia University website seamlessly integrates HTML for structure, CSS for style, Bootstrap for responsiveness, and JavaScript for interactive elements.'
    }
];

const Project = () => (
   <div id="project-title">
     <h2>Projects</h2>
    <div id="projects">
      {projectsData.map((project, index) => (
        <div className="project-card" key={index}>
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
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