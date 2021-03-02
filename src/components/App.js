import React from "react"
import '../App.css';
import About from "./About"
import Portfolio from "./Portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Contact from "./Contact";



function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
