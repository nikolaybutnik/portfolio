import React from 'react'
import Typical from 'react-typical'
import './Home.css'

const Main = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <img
            className="img-fluid mx-auto d-block"
            id="profilePhoto"
            src="assets/images/profile.png"
            alt="Profile headshot"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="text-center" id="greeting">
            // Hello world, I'm Nik
          </h1>
          <h2 className="text-center" id="tags">
            // I'm a
            <Typical
              steps={[
                ' full stack web developer',
                1500,
                ' tech enthusiast',
                1500,
                ' lifelong learner',
                1500,
                ' creative problem solver',
                1500,
                'n unshakable optimist',
                1500,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-center">
            <a
              href="https://www.linkedin.com/in/nikolay-b-2887971b7/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon d-block"
                src="assets/images/linkedinIcon.png"
                alt="linkedin link"
              />
            </a>
            <a
              href="https://github.com/nikolaybutnik"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon d-block"
                src="assets/images/githubIcon.png"
                alt="github link"
              />
            </a>

            <a href="mailto: btnk.nik@gmail.com">
              <img
                className="icon d-block"
                src="assets/images/emailIcon.png"
                alt="email link"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col text-center">
          <a
            id="resume"
            href="https://drive.google.com/file/d/1PHWpEu6F5LSn0_R7bw6gRFmMTxqpj6Ql/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            getResume(){' '}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Main
