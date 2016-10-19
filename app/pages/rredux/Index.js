import React from 'react';
import Layout from 'app/core/Layout';
import RedBase from 'app/core/Layout/RedBase';
import reducers from './reducers';

import Test from './containers/Test';

class Index extends Layout {
    renderMain() {
      return (
        <div>
          <p>使用 redux 的基础界面</p>
          <Test />
        </div>
      );
    }
}

RedBase(Index, {
  reducers
});
