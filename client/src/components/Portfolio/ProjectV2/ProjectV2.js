import React, { useRef } from 'react'
import './ProjectV2.css'

const ProjectV2 = ({
  project: { title, img, alt, description, link, github },
}) => {
  const refCard = useRef()

  const handleMouseMove = (event) => {
    const cumulativeOffset = (element) => {
      const width = element.offsetWidth
      const height = element.offsetHeight
      let top = 0,
        left = 0

      do {
        left += element.offsetLeft || 0
        top += element.offsetTop || 0
        element = element.offsetParent
      } while (element)

      return {
        top: top,
        left: left,
        right: left + width,
        bottom: top + height,
      }
    }

    const xAxis =
      ((cumulativeOffset(refCard.current).left +
        cumulativeOffset(refCard.current).right) /
        2 -
        event.pageX) /
      25
    const yAxis =
      ((cumulativeOffset(refCard.current).top +
        cumulativeOffset(refCard.current).bottom) /
        2 -
        event.pageY) /
      25

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
