import React from 'react'
import Project from './Project/Project'
import projectStore from '../../utils/projectStore'
import './Portfolio.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Portfolio = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <Carousel responsive={responsive}>
      {projectStore.map((project) => (
        <Project project={project} />
      ))}
    </Carousel>
  )
}

export default Portfolio
