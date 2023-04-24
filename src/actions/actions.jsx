const login = (data) => {
  return {
    type: 'CoachLogin',
    coachDetails: data,
    isAuthed: true
  }
}

const loginValidate = (data) => {
  return dispatch => {
    dispatch(login(data))
  }
}

export { login, loginValidate }