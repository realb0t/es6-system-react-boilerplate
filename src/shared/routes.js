import React from "react";
import { Router, Route, Link, browserHistory } from 'react-router'

import Application from "./components/Application";

export default (  
  <Router history={browserHistory}>
    <Route path="/" component={Application} />
  </Router>
);