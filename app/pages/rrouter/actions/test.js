export function dataFetch() {
  return dispatch => {
    dispatch({
      type: 'INIT',
      count: 10
    })
  }
}
