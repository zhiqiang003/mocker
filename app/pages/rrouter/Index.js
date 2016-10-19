import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import Layout from 'app/core/Layout';
import RedBase from 'app/core/Layout/RedBase';
import reducers from './reducers';

import Test from './containers/Test';

let Lay = function(props) {
  return <div>{props.children}</div>;
}

const Index = (props) => (
  <Router history={hashHistory}>
    <Route component={Lay}>
      <Route path="/" component={Test} />
      <Route path="test1" component={Test} />
      <Route path="test2/:id" component={Test} />
    </Route>
  </Router>
);

RedBase(Index, {
  reducers
});
