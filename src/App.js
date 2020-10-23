import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Jotto from "./components/Jotto"
import Navigation from "./components/Navigation"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/counter" component={Counter} />
        <Route path="/jotto" component={Jotto} />
      </Switch>
    </Router>
  );
}

export default App;
