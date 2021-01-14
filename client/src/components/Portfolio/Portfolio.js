import React from 'react'

const Portfolio = () => {
  return (
    <main>
      {/* Main content of the page. A list of projects using the 'card' element of Bootstrap */}
      <section className="container-md my-5 main-content">
        <div className="row">
          <div className="col mt-3">
            <h1>My Projects</h1>
            <div className="dropdown-divider"></div>
          </div>
        </div>
        {/* style="width: 18rem" */}
        <div className="row">
          <div className="card-group">
            <div className="card expand">
              <img
                src="assets/images/stokbuddy-img.png"
                className="card-img-top"
                alt="Stockbuddy"
              />
              <div className="card-body">
                <h5 className="card-title">STOCKBUDDY</h5>
                <p className="card-text">
                  Stockbuddy is a web application that helps beginners enter the
                  world of stock trading.
                </p>
                <a
                  href="https://nikolaybutnik.github.io/stock-buddy/"
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Link to application <i className="fa fa-chevron-right"></i>
                </a>
                <a
                  href="https://github.com/nikolaybutnik/stock-buddy"
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  See on GitHub <i className="fa fa-chevron-right"></i>
                </a>
              </div>
            </div>
            {/* style="width: 18rem" */}
            <div className="card expand">
              <img
                src="assets/images/weather-dashboard-img.png"
                className="card-img-top"
                alt="Weather Dashboard"
              />
              <div className="card-body">
                <h5 className="card-title">WEATHER DASHBOARD</h5>
                <p className="card-text">
                  Search for immediate and future weather conditions around the
                  world.
                </p>
                <a
                  href="https://nikolaybutnik.github.io/weather-dashboard/"
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Link to application <i className="fa fa-chevron-right"></i>
                </a>
                <a
                  href="https://github.com/nikolaybutnik/weather-dashboard"
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  See on GitHub <i className="fa fa-chevron-right"></i>
                </a>
              </div>
            </div>
            {/* style="width: 18rem" */}
            <div className="card expand">
              <img
                src="assets/images/work-day-scheduler-img.png"
                className="card-img-top"
                alt="Work day Scheduler"
              />
              <div className="card-body">
                <h5 className="card-title">WORK DAY SCHEDULER</h5>
                <p className="card-text">
                  A simple calendar tool to organize the current work day.
                </p>
                <a
                  href="https://nikolaybutnik.github.io/work-day-scheduler/"
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Link to application <i className="fa fa-chevron-right"></i>
                </a>
                <a
                  href="https://github.com/nikolaybutnik/work-day-scheduler"
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  See on GitHub <i className="fa fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* style="width: 18rem" for card expand */}
        <div className="row">
          <div className="card-group">
            <div className="card expand">
              <img
                src="assets/images/eat-da-burger-img.png"
                className="card-img-top"
                alt="Stockbuddy"
              />
              <div className="card-body">
                <h5 className="card-title">Eat-Da-Burger!</h5>
                <p className="card-text">
                  A web application that keeps track of the burgers you want to
                  eat, and those you have eaten!
                </p>
                <a
                  href="https://still-beach-47184.herokuapp.com/"
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Link to application <i className="fa fa-chevron-right"></i>
                </a>
                <a
                  href="https://github.com/nikolaybutnik/burger"
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  See on GitHub <i className="fa fa-chevron-right"></i>
                </a>
              </div>
            </div>
            {/* style="width: 18rem" */}
            <div className="card expand">
              <img
                src="assets/images/oop-general-hospital-img.png"
                className="card-img-top"
                alt="OOP General Hospital"
              />
              <div className="card-body">
                <h5 className="card-title">OOP General Hospital</h5>
                <p className="card-text">
                  A web application that utilizes databases to simulate a
                  light-hearted hospital scenario.
                </p>
                <a
                  href="https://mysterious-brushlands-46606.herokuapp.com/"
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Link to application <i className="fa fa-chevron-right"></i>
                </a>
                <a
                  href="https://github.com/nikolaybutnik/oop-general-hospital"
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  See on GitHub <i className="fa fa-chevron-right"></i>
                </a>
              </div>
            </div>

            {/* <div className="card expand" style="width: 18rem">
            <img
              src="https://placehold.it/1289x929"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">COMING SOON</h5>
              <p className="card-text">Coming soon.</p>
              <a href="#" target="_blank" className="btn btn-primary"
                >Link to application <i className="fa fa-chevron-right"></i
              ></a>
              <a href="#" target="_blank" className="btn btn-primary"
                >See on GitHub <i className="fa fa-chevron-right"></i
              ></a>
            </div>
          </div> */}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Portfolio
