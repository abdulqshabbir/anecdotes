import { combineReducers } from 'redux'
import anecdoteReducer from './anecdoteReducer'
import notificationVisibilityReducer from './notificationVisibilityReducer'
import queryReducer from './queryReducer'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notificationVisibility: notificationVisibilityReducer,
    query: queryReducer
})

export default reducer