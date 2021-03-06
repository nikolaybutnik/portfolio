import React, { useRef } from 'react'
import './ProjectV2.css'

const ProjectV2 = ({
  project: { title, img, alt, description, link, github },
}) => {
  const refCard = useRef()
  const refImage = useRef()
  const refTitle = useRef()
  const refDescription = useRef()
  const refLinks = useRef()

  // Card animation as mouse hovers over the container
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

  // Animations as mouse enters the container
  const handleMouseEnter = (event) => {
    refCard.current.style.transition = 'none'
    refImage.current.style.transform = 'translateZ(75px)'
    refTitle.current.style.transform = 'translateZ(75px)'
    refDescription.current.style.transform = 'translateZ(75px)'
    refLinks.current.style.transform = 'translateZ(75px)'
  }

  // Animations as mouse leaves the container
  const handleMouseLeave = (event) => {
    refCard.current.style.transition = 'all 0.5s ease'
    refCard.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
    refImage.current.style.transform = 'translateZ(0)'
    refTitle.current.style.transform = 'translateZ(0)'
    refDescription.current.style.transform = 'translateZ(0)'
    refLinks.current.style.transform = 'translateZ(0)'
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
            ref={refImage}
          />
        </div>
        <h3 className="title" ref={refTitle}>
          {title}
        </h3>
        <p className="description" ref={refDescription}>
          {description}
        </p>
        <div className="links" ref={refLinks}>
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
