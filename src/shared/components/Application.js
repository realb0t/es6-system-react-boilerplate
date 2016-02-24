import React from "react";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

export default class Application extends React.Component {
  render() {
    return <div>
      <h1>Application</h1>
      <div>
        <Link to="/" activeClassName="active">Main</Link>
        <span> | </span>
        <Link to="/second" activeClassName="active">Second</Link>
      </div>
      <div>{this.props.children}</div>
    </div>;
  }
}