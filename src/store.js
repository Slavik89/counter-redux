import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import countReducer from './reducers/reducer'

const store = createStore(countReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
    