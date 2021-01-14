import React from 'react'

const Main = () => {
  return (
    <main>
      {/* Main content of the page, first section includes photo and bio */}
      <section className="container-fluid my-5 section-1">
        <div className="row">
          <div className="col-lg-4 mx-3 mb-3 mt-2">
            <img
              className="img-fluid mx-auto d-block"
              id="profile-photo"
              src="assets/images/profile.png"
              alt="Profile headshot"
              //   style="width: 300px; height: 300px"
            />
          </div>
          {/* Intrductory paragraph */}
          <div className="col-md-6">
            <h1>Welcome to my portfolio</h1>
            <hr />
            <p>
              Hi I'm Nik, a back end web developer with a passion for problem
              solving. Currently focused on polishing my Python and JavaScript
              skills. Take a look at my projects and feel free to reach out.
            </p>
            <a
              href="https://drive.google.com/file/d/1PHWpEu6F5LSn0_R7bw6gRFmMTxqpj6Ql/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <h3 id="resume-link">
                <i className="far fa-file-pdf"></i> View my resume
              </h3>
            </a>
            <hr />
            <a href="/portfolio">
              <h3 id="my-projects">
                See my projects <i className="fa fa-chevron-right"></i>
                <i className="fa fa-chevron-right"></i>
              </h3>
            </a>
          </div>
        </div>
      </section>

      {/* Main content of the page, second section includes skill icons */}
      <section className="container-fluid shadow-sm section-2">
        {/* Icons of related skills */}
        <div className="col skills-section-wrapper d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col">
              <img
                className="float-left expand"
                src="assets/images/html-icon.png"
                alt="HTML logo"
                // style="width: 100px; height: 100px"
              />
              <img
                className="float-left expand"
                src="assets/images/css-icon.png"
                alt="CSS logo"
                // style="width: 100px; height: 100px"
              />
              <img
                className="float-left expand"
                src="assets/images/js-icon.png"
                alt="JavaScript logo"
                // style="width: 100px; height: 100px"
              />
              <img
                className="float-left expand"
                src="assets/images/python-icon.png"
                alt="Python logo"
                // style="width: 100px; height: 100px"
              />
              <img
                className="float-left expand"
                src="assets/images/nodejs-icon.png"
                alt="Node.js logo"
                // style="width: 100px; height: 100px"
              />
              <img
                className="float-left expand"
                src="assets/images/github-icon.png"
                alt="Github logo"
                // style="width: 100px; height: 100px"
              />
              <img
                className="float-left expand"
                src="assets/images/bootstrap-icon.png"
                alt="Bootstrap logo"
                // style="width: 100px; height: 100px"
              />
              <img
                className="float-left expand"
                src="assets/images/jquery-icon.png"
                alt="jQuery logo"
                // style="height: 100px"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
