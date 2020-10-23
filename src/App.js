import React from "react";
import "./App.css";
import Counter from "./pages/Counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/counter" component={Counter} />
      </Switch>
    </Router>
  );
}

export default App;
