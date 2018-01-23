import { combinerReducers } from 'redux'
import usersReducer from './usersReducer'

export default combinerReducers({
  users: usersReducer
})
