import React from 'react'
import './Project.css'

const Project = ({
  project: { title, img, alt, description, link, github },
}) => {
  // style={{ backgroundImage: `url(${img}`, backgroundSize: 'cover' }}
  return (
    <div class="jumbotron">
      <div class="container">
        <img className="appImg" src={img} alt={alt} />

        <h1 className="title">{title}</h1>
        <h4>{description}</h4>
        <p>
          <a
            class="btn btn-lg btn-clear-light soft-transition"
            href={link}
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-location-arrow">Deployed project</i>
          </a>
          <a
            class="btn btn-lg btn-clear-light soft-transition"
            href={github}
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-github-square"> Github</i>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Project
