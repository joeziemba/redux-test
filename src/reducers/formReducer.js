const initialState = {
  value: 'h'
}

export function formReducer(state = initialState, action) {
  switch(action.type) {
    case "CHANGE_FORM":
      return {
        value: action.value
      }
    default:
      return state
  }
}
