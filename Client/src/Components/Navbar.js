import React from "react";
import { NavLink } from "react-router-dom";
import MTG from '../Assets/Images/mtg.png';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark mb-4">
        <div className="container-fluid">
          <img className="d-flex align-items-center" id="nav-icon" src={MTG} alt="icon" style={{height: '75px', width: '175px', padding: '5px'}}/>
          <a className="navbar-brand" href="/">OSA MTG</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="search-cards">Search Cards</a>
              </li>
            </ul>
            <NavLink className="nav-link" to="/log-in">
              <button type="button" className="btn btn-success me-2">Login</button>
            </NavLink>
            <NavLink className="nav-link" to="/sign-up">
              <button type="button" className="btn btn-warning">Sign Up</button>
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;