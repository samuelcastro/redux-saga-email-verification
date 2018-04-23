// import * as ActionTypes from '../actions';
import { combineReducers } from 'redux';
import email from './email';


// Updates error message to notify about the failed fetches.
// const errorMessage = (state = null, action: any) => {
//   const { type, error } = action
//
//   if (type === ActionTypes.RESET_ERROR_MESSAGE) {
//     return null
//   } else if (error) {
//     return action.error
//   }
//
//   return state
// }

const rootReducer = combineReducers({
  email
})

export default rootReducer
