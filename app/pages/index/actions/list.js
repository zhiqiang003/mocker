import projects from './data/project';
import versions from './data/version';
import request from 'app/vendor/request';

export function fetchProjectList() {
  return dispatch => {
    request.get('/end/project/list')
      .promiseify()
      .then((res) => {
        dispatch({
          type: 'GET_PROJECT_LIST',
          data: JSON.parse(res.text).data
        });
      }, (err) => {
        console.log(err);
      })
  }
}

export function fetchVersionList(projectId) {
  return dispatch => {
    dispatch({
      type: 'GET_VERSION_LIST',
      data: versions
    });
  }
}

export function fetchProjectInfo(id) {
  // 此处也要异步
  return dispatch => {
    dispatch({
      type: 'GET_ACTIVE',
      data: {
        name: 'project',
        value: {
          id: id,
          name: '测试',
          desc: '测试',
          api: 'google.com'
        }
      }
    });
  }
}
