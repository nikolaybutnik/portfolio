import React, { useRef } from 'react'
import './ProjectV2.css'

const ProjectV2 = ({
  project: { title, img, alt, description, link, github },
}) => {
  return (
    <div className="projectContainer">
      <div className="projectLeftSide">
        <div className="projectTitle">{title}</div>
        {/* <img src={img} alt={alt} /> */}
        <p className="projectDescription">{description}</p>
      </div>

      <div className="projectRightSide">
        <div className="projectLinks">
          <a href={github} target="_blank" rel="noreferrer">
            <button>GitHub</button>
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <button>Demo</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectV2
