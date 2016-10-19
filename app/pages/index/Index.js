import React from 'react';
import { Router, Route, Redirect, Link, hashHistory } from 'react-router';
import Layout from 'app/core/Layout';
import RedBase from 'app/core/Layout/RedBase';
import reducers from './reducers';

import Test from './containers/Test';
import Home from './containers/Home';
import Project from './containers/Project';
import Docs from './containers/Docs';

class Lay extends Layout {
  renderContent() {
    return <div>{this.props.children}</div>;
  }
}

const Index = (props) => (
  <Router history={hashHistory}>
    <Route component={Lay}>
      <Route path="/" component={Home} />
      <Route path="/project/:id" component={Project} />
      <Route path="/version/:id" component={Test} />
      <Route path="/docs/:file" component={Docs} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
);

RedBase(Index, {
  reducers
});
