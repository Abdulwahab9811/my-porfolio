import React, { useState } from 'react';
import '../Project.css';

const Project = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div>
      <h1>My Projects</h1>
      <button onClick={() => setShowProjects(!showProjects)}>Show Projects</button>
      <div className={`project-container ${showProjects ? 'show' : ''}`}>
        <div className="screenshot-item">
          <img className="screenshot-image" src={require('../images/project1.png')} alt="Project 1" />
        </div>
        <div className="screenshot-item">
          <img className="screenshot-image" src={require('../images/project2.png')} alt="Project 2" />
        </div>
        <div className="screenshot-item">
          <img className="screenshot-image" src={require('../images/project3.png')} alt="Project 3" />
        </div>
       
      </div>
    </div>
  );
};


export default Project;
