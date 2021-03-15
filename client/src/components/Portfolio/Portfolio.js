import React from 'react'
import Project from './Project/Project'
import projectStore from '../../utils/projectStore'
import './Portfolio.css'
import Typical from 'react-typical'

const Portfolio = () => {
  return (
    <>
      <h1 id="myProjects">
        <Typical
          steps={['Projects.render()', 1500]}
          loop={Infinity}
          wrapper="b"
        />
      </h1>
      <hr className="solidDividerWithMargin"></hr>
      <span className="projectContainer">
        {projectStore.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </span>
      <div className="stickyFooter"> © 2021 Nikolay Butnik</div>
    </>
  )
}

export default Portfolio
