import React, { useRef } from 'react'
import './ProjectV2.css'

const ProjectV2 = ({
  project: { title, img, alt, description, link, github },
}) => {
  const refCard = useRef()

  const handleMouseMove = (event) => {
    const rect = refCard.current.getBoundingClientRect()

    // console.log(rect.left, rect.top, rect.right, rect.bottom)

    console.log(event.pageX, event.pageY)

    const xAxis = ((rect.left + rect.right) / 2 - event.pageX) / 25
    const yAxis = ((rect.top + rect.bottom) / 2 - event.pageY) / 25

    refCard.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
  }

  const handleMouseEnter = (event) => {
    refCard.current.style.transition = 'none'
  }

  const handleMouseLeave = (event) => {
    refCard.current.style.transition = 'all 0.5s ease'
    refCard.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
  }

  return (
    <div
      className="cardContainer"
      onMouseMove={(event) => handleMouseMove(event)}
      onMouseEnter={(event) => handleMouseEnter(event)}
      onMouseLeave={(event) => handleMouseLeave(event)}
    >
      <div className="projectCard" ref={refCard}>
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
