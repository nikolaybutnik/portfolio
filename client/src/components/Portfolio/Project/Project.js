import React from 'react'
import './Project.css'

const Project = ({
  project: { title, img, alt, description, link, github },
}) => {
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

{
  /* <div className="card expand my-3">
      <img src={img} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a
          href={link}
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
        >
          Link to application <i className="fa fa-chevron-right"></i>
        </a>
        <a
          href={github}
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
        >
          See on GitHub <i className="fa fa-chevron-right"></i>
        </a>{' '}
      </div>
    </div> */
}
