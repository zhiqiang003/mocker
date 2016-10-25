import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Icon, Popover, Breadcrumb, Modal, Input, Button } from 'antd';

import * as listAction from 'main/actions/list';
import * as modalAction from 'main/actions/modal';
import './Index.scss';
const confirm = Modal.confirm;
const InputGroup = Input.Group;

class Home extends Component {

  handleSearch() {
    console.log(123);
  }

  handleInputChange(event) {
    console.log(event.target.value);
  }

  componentDidMount() {
    this.props.fetchSingleInfo('project', { id: this.props.params.projectId });
    this.props.fetchSingleInfo('version', { projectId: this.props.params.projectId, id: this.props.params.id });
    this.props.fetchList('api', { versionId: this.props.params.id });
  }

  render() {
    let { api, modal, activeInfo } = this.props;

    return (
      <div className="container">
        <div className="version-side">
          <h2>Api List</h2>
          <InputGroup className="ant-search-input">
            <Input value={''} onChange={(ev) => this.handleInputChange(ev)} />
            <div className="ant-input-group-wrap">
              <Button icon="search" onClick={this.handleSearch} className="ant-search-btn" />
            </div>
          </InputGroup>
          <ul>
          {api.list.map((item, index) => {
            return (
              <li key={item.id}>{item.name}</li>
            );
          })}
          </ul>
        </div>
        <div className="version-main">
           <Breadcrumb>
            <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to={`/project/${activeInfo.project.id}`}>{activeInfo.project.name}</Link></Breadcrumb.Item>
            <Breadcrumb.Item>{activeInfo.version.name}</Breadcrumb.Item>
          </Breadcrumb>         
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({api: state.api, activeInfo: state.activeInfo, modal: state.modal}),
  (dispatch) => bindActionCreators({ ...listAction, ...modalAction }, dispatch)
)(Home);
