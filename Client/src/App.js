import React from 'react';
import '../src/Styles/App.css';
import { Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar';
import UserNavbar from './Components/Auth/user.navbar';
import SignUp from './Components/Auth/SignUp';
import LogIn from './Components/Auth/LogIn';
import Homepage from './Components/Home/Homepage';
import SearchCards from './Components/Pages/SearchCards';
import Decks from './Components/Pages/Decks';
import EditDeck from './Components/Pages/EditDeck';

class App extends React.Component {

  constructor() {
    super();
    let auth = sessionStorage.getItem("auth");
    let user = sessionStorage.getItem("user");
    user = JSON.parse(user);
    if (sessionStorage.getItem("user") === null) {
      sessionStorage.setItem("user", null);
    }
    if (auth === 'true') { auth = true } else if (auth === 'false') { auth = false };
    this.state = { auth: auth, user: user};
  }

  render() {
    return (
      <main>
        {this.state.auth ?
          <UserNavbar auth={this.state.auth} user={this.state.user} /> : <Navbar />
        }
      <section style={{ margin: 20 }}>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/log-in" element={<LogIn />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/search-cards" element={<SearchCards />} />
            <Route exact path="/decks" element={<Decks />} />
            <Route exact path="/edit-deck" element={<EditDeck />} />
            <Route exact path="/edit-deck/:id" element={<EditDeck />} />
          </Routes>
        </section>
      </main>
    )
  }
}

export default App;
