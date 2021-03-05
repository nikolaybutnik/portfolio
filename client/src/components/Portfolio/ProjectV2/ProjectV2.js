import React from 'react'
import './ProjectV2.css'

const ProjectV2 = ({
  project: { title, img, alt, description, link, github },
}) => {
  return (
    <div className="cardContainer">
      <div className="projectCard">
        <div className="image">
          <img
            className="appImage"
            src="https://placehold.it/250x250"
            alt={alt}
          />
        </div>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <div className="links">
          <a
            className="githubBtn"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
          <a
            className="deployedBtn"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <button>Demo</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectV2
