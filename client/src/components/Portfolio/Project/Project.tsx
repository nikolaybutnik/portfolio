import React, { useRef } from 'react'
import '../../../css/Project.css'

interface Props {
  project: {
    title: string
    imgDesktop: string
    imgMobile: string
    alt: string
    description: string
    link: string
    github: string
  }
}

const ProjectV2: React.FC<Props> = ({
  project: { title, imgDesktop, imgMobile, alt, description, link, github },
}) => {
  const refLaptop = useRef<HTMLDivElement | null>(null)
  const refMobile = useRef<HTMLDivElement | null>(null)

  // Card animation as mouse hovers over the container
  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ref: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    const cumulativeOffset = (element: HTMLDivElement | null) => {
      const width = element!.offsetWidth
      const height = element!.offsetHeight
      let top = 0,
        left = 0

      do {
        left += element!.offsetLeft || 0
        top += element!.offsetTop || 0
        element = element!.offsetParent as HTMLDivElement
      } while (element)

      return {
        top: top,
        left: left,
        right: left + width,
        bottom: top + height,
      }
    }

    const xAxis =
      ((cumulativeOffset(ref.current).left +
        cumulativeOffset(ref.current).right) /
        2 -
        event.pageX) /
      15
    const yAxis =
      ((cumulativeOffset(ref.current).top +
        cumulativeOffset(ref.current).bottom) /
        2 -
        event.pageY) /
      15

    ref.current!.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
  }

  // Animations as mouse enters the container
  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ref: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    ref.current!.style.transition = 'none'
    // ref.current.style.transform = 'translateZ(75px)'
  }

  // Animations as mouse leaves the container
  const handleMouseLeave = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ref: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    ref.current!.style.transition = 'all 0.5s ease'
    ref.current!.style.transform = 'rotateY(0deg) rotateX(0deg)'
    // ref.current.style.transform = 'translateZ(0)'
  }

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
        <div
          className="laptopContainer"
          onMouseMove={(event) => handleMouseMove(event, refLaptop)}
          onMouseEnter={(event) => handleMouseEnter(event, refLaptop)}
          onMouseLeave={(event) => handleMouseLeave(event, refLaptop)}
        >
          <div ref={refLaptop} className="laptopImage">
            <img src={imgDesktop} alt={alt} />
          </div>
        </div>
        <div
          className="mobileContainer"
          onMouseMove={(event) => handleMouseMove(event, refMobile)}
          onMouseEnter={(event) => handleMouseEnter(event, refMobile)}
          onMouseLeave={(event) => handleMouseLeave(event, refMobile)}
        >
          <div ref={refMobile} className="mobileImage">
            <img src={imgMobile} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectV2
