import React, { useRef } from 'react'
import './ProjectV2.css'

const ProjectV2 = ({
  project: { title, imgDesktop, imgMobile, alt, description, link, github },
}) => {
  return (
    <div className="projectContainer">
      <div className="projectLeftSide">
        <div className="projectTitle">{title}</div>
        <p className="projectDescription">{description}</p>
        <div className="projectLinks">
          <a href={github} target="_blank" rel="noreferrer">
            <button>GitHub</button>
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <button>Demo</button>
          </a>
        </div>
      </div>

      <div className="projectRightSide">
        <div className="laptopContainer">
          <div className="laptopImage">
            <img src={imgDesktop} alt={alt} />
          </div>
        </div>
        <div className="mobileContainer">
          <div className="mobileImage">
            <img src={imgMobile} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectV2
