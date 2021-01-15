import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation()

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/about"
          className={
            location.pathname === '/about' ? 'nav-link active' : 'nav-link'
          }
        >
          About
        </Link>
      </li> */}
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={
            location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link'
          }
        >
          Portfolio
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/contact"
          className={
            location.pathname === '/contact' ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </Link>
      </li> */}
      {/* <li className="nav-item">
        <Link
          to="/contact/learn"
          className={
            location.pathname === '/contact/learn'
              ? 'nav-link active'
              : 'nav-link'
          }
        >
          Learn
        </Link>
      </li> */}
    </ul>
  )
}

export default Header

// const Header = () => {
//   return (
//     <header>
//       <nav
//         className="navbar navbar-expand-md navbar-dark"
//         // style={'background-color: rgb(88, 170, 238)'}
//       >
//         <a className="navbar-brand" href="index.html" id="name">
//           Nikolay Butnik
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <div className="navbar-nav ml-auto">
//             <a className="nav-link active" href="#">
//               About <span className="sr-only">(current)</span>
//             </a>
//             <a className="nav-link" href="portfolio.html">
//               Portfolio
//             </a>
//             <a className="nav-link" href="contact.html">
//               Contact
//             </a>
//           </div>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Header
