import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import rootReducer from './reducers/countReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
    