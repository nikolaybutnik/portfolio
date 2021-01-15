import React from 'react'
import './Project.css'

const Project = ({
  project: { title, img, alt, description, link, github },
}) => {
  return (
    <div className="card expand my-3">
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
        </a>
      </div>
    </div>
  )
}

export default Project

/* style="width: 18rem" */
