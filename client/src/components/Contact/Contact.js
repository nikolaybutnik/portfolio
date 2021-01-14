import React from 'react'

const Contact = () => {
  return (
    <main>
      {/* Main content of the page. A form to be filled out and submitted by user */}
      <section className="container-sm p-3 my-5 main-content">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <h1>Let's get in touch</h1>
                <div className="dropdown-divider"></div>
              </div>
            </div>
            <form>
              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                  <label for="inputFirstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputLastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="form-group">
                    <label for="inputEmail">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="form-group">
                    <label for="inputMessage">Message</label>
                    <textarea
                      className="form-control"
                      id="inputMessage"
                      rows="7"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <button type="submit" className="btn btn-primary mb-3">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-4">
            <div
              className="card float-left mx-1 contact-me"
              //   style="width: 18rem;"
            >
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a href="mailto: btnk.nik@gmail.com">
                    <i className="fa fa-envelope"></i> Send me an email
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="https://www.linkedin.com/in/nikolay-b-2887971b7/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-linkedin"></i> Find me on LinkedIn
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="https://github.com/nikolaybutnik"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-github-square"></i> Find me on GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
