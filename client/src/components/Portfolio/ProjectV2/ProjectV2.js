import React from 'react'
import './ProjectV2.css'

const ProjectV2 = ({
  project: { title, img, alt, description, link, github },
}) => {
  return (
    <div className="container">
      <div className="projectCard">
        <div className="image">
          <div className="backgroundImage"></div>
          <img src="https://placehold.it/300x300" alt={alt} />
        </div>
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <a className="githubBtn" href={github} target="_blank" rel="noreferrer">
          <button>GitHub</button>
        </a>
        <a className="deployedBtn" href={link} target="_blank" rel="noreferrer">
          <button>Demo</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectV2
