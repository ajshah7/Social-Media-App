import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import "./App.css";

import SignIn from "../src/componets/Authentication/SignIn";
import SignUp from "../src/componets/Authentication/SignUp";
import Feeds from "../src/componets/FeedsPage/Feeds";

function App() {
  return (
    <div className="App">
      <Router>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/feeds" component={Feeds} />
          </Switch>
        </HashRouter>
      </Router>
    </div>
  );
}

export default App;
