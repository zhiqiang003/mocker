export function openEditor(info) {
  return dispatch => {
    dispatch({
      type: 'OPEN_EDITOR',
      data: {
        editInfo: info,
        show: true
      }
    })
  }
}

export function closeEditor(info) {
  return dispatch => {
    dispatch({
      type: 'OPEN_EDITOR',
      data: {
        editInfo: {},
        show: false
      }
    });
  }
}

export function updateEditor(info) {
  return dispatch => {
    dispatch({
      type: 'UPDATE_EDITOR',
      data: info
    });
  }
}

export function confirmEditor() {
  console.log('目前空方法');
  return dispatch => {
    dispatch({
      type: 'CONFIRM_EDITOR',
      data:{
        show: false
      }
    });
  }
}
