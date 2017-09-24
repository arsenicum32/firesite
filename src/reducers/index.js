import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import setup from './setup'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  setup
})

export default todoApp
