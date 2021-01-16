import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
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
    </ul>
  )
}

export default Header
