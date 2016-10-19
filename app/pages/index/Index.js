import React from 'react';
import { Router, Route, Redirect, Link, hashHistory } from 'react-router';
import Layout from 'app/core/Layout';
import RedBase from 'app/core/Layout/RedBase';
import reducers from './reducers';

import Test from './containers/Test';

class Lay extends Layout {
  renderContent() {
    return <div>{this.props.children}</div>;
  }
}

const Index = (props) => (
  <Router history={hashHistory}>
    <Route component={Lay}>
      <Route path="/" component={Test} />
      <Route path="/project/:id" component={Test} />
      <Route path="/version/:id" component={Test} />
      <Route path="/docs/:file" component={Test} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
);

RedBase(Index, {
  reducers
});
