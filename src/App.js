import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Jotto from "./components/Jotto";
import Calculator from "./components/Calculator";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/counter" component={Counter} />
        <Route path="/jotto" component={Jotto} />
        <Route path="/calculator" component={Calculator} />
      </Switch>
    </Router>
  );
}

export default App;
