import versions from './data/version';
import request from 'app/vendor/request';
import { message } from 'antd';

/**
 *  获取各种列表
 */
export function fetchList(modelType, info) {
  let url = '/end/project/';
  let type = '';
  switch (modelType) {
    case 'project':
      url += 'list';
      type = 'GET_PROJECT_LIST';
      break;
    case 'version':
      url += `${info.projectId}/version/list`;
      type = 'GET_VERSION_LIST';
      break;
  }

  return dispatch => {
    request.get(url)
      .promiseify()
      .then((res) => {
        dispatch({
          type,
          data: JSON.parse(res.text).data
        });
      }, (err) => {
        console.log(err);
      })
  }
}


/**
 *  获取单个条目信息
 */
export function fetchSingleInfo(modelType, info) {
  let url = '/end/project/';
  switch (modelType) {
    case 'project':
      url += info.id;
      break;
    case 'version':
      url += `${info.projectId}/version/${info.id}`;
      break;
  }

  return dispatch => {
    request.get(url)
      .promiseify()
      .then((res) => {
        dispatch({
          type: 'GET_ACTIVE',
          data: {
            name: modelType,
            value: JSON.parse(res.text).data
          }
        });
      }, (err) => {
        console.log(err);
      });
  }
}


/**
 *  删除单个条目
 */
export function deleteItem(modelType, info) {
  let url = `/end/project`;
  switch (modelType) {
    case 'project':
      url = `${url}/${info.id}`;
      break;
    case 'version':
      url = `${url}/${info.projectId}/version/${info.id}`;
      break;
  }
  return dispatch => {
    request.del(url)
      .promiseify()
      .then((res) => {
        if (res.body.errors) {
          message.warning(res.body.message);
          return;
        }
        fetchList(modelType, info)(dispatch);
      }, (err) => {
        console.log(err);
      });
  }
}
