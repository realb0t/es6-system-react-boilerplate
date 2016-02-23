import React from "react";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import Application from "./components/Application.js";
import Index from "./components/Index.js";
import Second from "./components/Second.js";

export default (  
  <Router history={browserHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={Index} />
      <Route path="second" component={Second} />
    </Route>
  </Router>
);