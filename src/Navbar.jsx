import React from 'react'
import { Link } from 'react-router-dom'
import pdf from './karan.Resume.pdf'
import "./HomeStyle.css"

const Navbar = () => {
  return (
    <div className="navHead">
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" id='Homebtn'>
    <Link className="navbar-brand" to="/">Karan Kushwah</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" target='none' href={pdf}>Resume</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Project">Project</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
      </ul>
    </div>
    {/* <div className="form-check form-switch">
      <input style={{ width: "50px", height: "30px" }} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={changeTheme} />
    </div> */}
  </div>
</nav>
    </div>
  )
}

export default Navbar
