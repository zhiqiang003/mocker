import projects from './data/project';

export function fetchProjectList() {
  return dispatch => {
    dispatch({
      type: 'GET_PROJECT_LIST',
      data: projects
    })
  }
}
