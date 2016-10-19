import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Icon, Popover } from 'antd';


import './Home.scss';
import * as listAction from '../actions/list';

const content =(
  <div className="edit-pop">
    <Icon type="edit" />
    <Icon type="delete" />
  </div>
);

class Home extends Component {
    componentDidMount() {
      this.props.fetchProjectList();
    }

    render() {
      let { project } = this.props;

      return (
        <div className="container">
          <ul className="clearfix block-list project-list">
            <li>
              <a className="block-item-plus"><Icon type="plus" /></a>
            </li>
            {project.list.map((item, index) => {
              return (
                <li key={item.id}>
                  <h2>{item.name}</h2>
                  <p>{item.dest}</p>
                  <p>{item.api}</p>
                  <Popover content={content} trigger="hover">
                    <Icon type="setting" />
                  </Popover>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
}

export default connect(
  (state) => ({project: state.project}),
  (dispatch) => bindActionCreators({ ...listAction }, dispatch)
)(Home);
