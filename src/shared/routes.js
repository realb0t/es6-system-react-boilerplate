import React from "react";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import Application from "./components/Application.jsx!";
import Index from "./components/Index.jsx!";
import Second from "./components/Second.jsx!";

export default (  
  <Router history={browserHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={Index} />
      <Route path="second" component={Second} />
    </Route>
  </Router>
);