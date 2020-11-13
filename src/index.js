import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Board from "views/Board/Boardlist.js";
import Event from "views/Board/Event.js";
import Important_Notices from "views/Board/Important_Notices.js"
import shop from "views/shop/shop.js";
import suchsitter from "views/sitter/suchsitter.js";
import Reservation from "views/sitter/Reservation.js";
import Register from "views/LoginPage/Register.js";
import SitterRegister from "views/sitter/SitterRegister.js";
import PetRegister from "views/sitter/PetRegister.js";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/PetRegister" component={PetRegister} />
      <Route path="/SitterRegister" component={SitterRegister} />
      <Route path="/Register" component={Register} />
      <Route path="/Reservation" component={Reservation} />
      <Route path="/shop" component={shop} />
      <Route path="/suchsitter" component={suchsitter} />
      <Route path="/Event" component={Event} />
      <Route path="/Boardlist" component={Board} />
      <Route path="/Important_Notices" component={Important_Notices} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
