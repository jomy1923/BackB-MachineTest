import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
import ProSlider from "./Components/Slider/ProSlider";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/signUp";
import Map from './Components/Map/Map'
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <SignUp />
          </Route>
          <Route path="/Home" exact>
            <NavBar />
            <Banner />
            <Products />
            <ProSlider />
          </Route>
          <Route path="/Login" exact>
            <Login />
          </Route>
          <Route path="/map" exact>
            <Map/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
