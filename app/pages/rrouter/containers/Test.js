import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as testAction from '../actions/test';

class Test extends Component {
    componentDidMount() {
      this.props.dataFetch();
    }

    render() {
      let { testData } = this.props;
      console.log(this.props.params);

      return (
        <div>
          <h2>{testData.count}</h2>
          <Link to="/">首页</Link>
          <Link to="/test1">test1</Link>
          <Link to="/test2/31">test2</Link>
          <h3>{this.props.params.toString()}</h3>
        </div>
      );
    }
}

export default connect(
  (state) => ({testData: state.testData}),
  (dispatch) => bindActionCreators({ ...testAction }, dispatch)
)(Test);
