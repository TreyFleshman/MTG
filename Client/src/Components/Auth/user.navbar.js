import React from "react";
import MTG from '../../Assets/Images/mtg.png';
import { NavLink } from "react-router-dom";

class UserNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: this.props.auth,
      user: this.props.user
    }
    this.userLogOut = this.userLogOut.bind(this);
  }

  userLogOut() {
    sessionStorage.setItem("auth", false);
    sessionStorage.setItem("user", null);
    window.location.href = "/";
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark mb-4">
        <div className="container-fluid">
          <img className="d-flex align-items-center" id="nav-icon" src={MTG} alt="icon" style={{ height: '75px', width: '175px', padding: '5px' }} />
          <a className="navbar-brand" href="/">OSA MTG</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="search-cards">Search Cards</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/decks">Decks</a>
              </li>
            </ul>
          </div>
          <NavLink className="nav-link" to="/">
            <button type="button" className="btn btn-warning" onClick={this.userLogOut}>Log Out</button>
          </NavLink>
        </div>
      </nav >
    );
  }
}

export default UserNavbar;