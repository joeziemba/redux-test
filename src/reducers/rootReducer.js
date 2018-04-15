import { combineReducers } from 'redux';
import { formReducer } from './formReducer';
import { messageReducer } from './messageReducer';

export default combineReducers({
  messageReducer,
  formReducer
})

// Namespaces in the global state object are created by the names of reducers in this function.
// To access values within the initialState objects of each reducer, you'll use this.[reducerName].[value] like this.messageReducer.message
