import React from 'react'
import Project from './Project/Project'
import projectStore from '../../utils/projectStore'
import './Portfolio.css'
// import 'react-multi-carousel/lib/styles.css'
import Typical from 'react-typical'

const Portfolio = () => {
  return (
    <>
      <h1 id="myProjects">
        <Typical steps={['My Projects', 1500]} loop={Infinity} wrapper="b" />
      </h1>
      <div className="dropdown-divider"></div>
      <span className="projectContainer">
        {projectStore.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </span>
    </>
  )
}

export default Portfolio
