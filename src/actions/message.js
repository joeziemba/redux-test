export const changeMessage = (newMessage) => {
  return {
    type: 'CHANGE_MESSAGE',
    message: newMessage
  }
}

export const changeForm = (value) => {
  return {
    type: 'CHANGE_FORM',
    value: value
  }
}
