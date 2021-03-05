import React from 'react'
import './Project.css'

const Project = ({
  project: { title, img, alt, description, link, github },
}) => {
  return (
    <div className="jumbotron">
      <div className="container">
        <img className="appImg" src={img} alt={alt} />

        <h1 className="title">{title}</h1>
        <h4 className="description">{description}</h4>
        <div className="links">
          <a
            className="btn btn-lg btn-clear-light soft-transition"
            href={link}
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-location-arrow">Deployed project</i>
          </a>
        </div>
        <div className="links">
          <a
            className="btn btn-lg btn-clear-light soft-transition"
            href={github}
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github-square"> Github</i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
