const initialState = {
  message: "Welcome!"
}

export function messageReducer(state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_MESSAGE':
      return {
        message: action.message
      }
    default:
      return state
  }
}
