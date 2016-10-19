import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testAction from '../actions/test';

class Test extends Component {
    componentDidMount() {
      this.props.dataFetch();
    }

    render() {
      let { testData } = this.props;

      return (
        <div>{testData.count}</div>
      );
    }
}

export default connect(
  (state) => ({testData: state.testData}),
  (dispatch) => bindActionCreators({ ...testAction }, dispatch)
)(Test);
