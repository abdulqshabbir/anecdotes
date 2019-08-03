import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logger } from 'redux-logger'

const middleware = applyMiddleware(thunk, logger)

const store = createStore(reducer, composeWithDevTools(middleware))

export default store