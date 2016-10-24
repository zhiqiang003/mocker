import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Icon, Popover, Breadcrumb, Modal } from 'antd';

import * as listAction from 'main/actions/list';
import * as modalAction from 'main/actions/modal';
import './Index.scss';
const confirm = Modal.confirm;

class Home extends Component {

  componentDidMount() {
    this.props.fetchSingleInfo('project', {id: this.props.params.projectId});
    this.props.fetchSingleInfo('version', {projectId: this.props.params.projectId, id: this.props.params.id});
  }


  render() {
    let { version, modal, activeInfo } = this.props;

    return (
      <div className="container">
        <div className="version-side">123</div>
        <div className="version-main">
           <Breadcrumb>
            <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to={`/project/${activeInfo.project.id}`}>{activeInfo.project.name}</Link></Breadcrumb.Item>
            <Breadcrumb.Item>{activeInfo.version.name}</Breadcrumb.Item>
          </Breadcrumb>         
        </div>
        123
      </div>
    );
  }
}

export default connect(
  (state) => ({version: state.version, activeInfo: state.activeInfo, modal: state.modal}),
  (dispatch) => bindActionCreators({ ...listAction, ...modalAction }, dispatch)
)(Home);
