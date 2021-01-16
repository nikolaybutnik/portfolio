import React from 'react'
import Project from './Project/Project'
import projectStore from '../../utils/projectStore'
import './Portfolio.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Typical from 'react-typical'

const Portfolio = () => {
  return (
    <>
      <h1 id="myProjects">
        <Typical steps={['My Projects', 1500]} loop={Infinity} wrapper="b" />
      </h1>
      <div className="dropdown-divider"></div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {projectStore.map((project) => (
          <Project project={project} />
        ))}
      </Carousel>
    </>
  )
}

export default Portfolio
