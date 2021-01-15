import React from 'react'
import Project from './Project/Project'
import projectStore from '../../utils/projectStore'

const Portfolio = () => {
  const projects1to3 = projectStore.slice(0, 3)
  const projects4to5 = projectStore.slice(3)
  return (
    <div className="container-md my-5">
      <div className="row">
        <div className="col mt-3">
          <h1>My Projects</h1>
          <div className="dropdown-divider"></div>
        </div>
      </div>
      <div className="row">
        <div className="card-deck">
          {projects1to3.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="card-deck">
          {projects4to5.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
