import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createSagaMonitor } from 'redux-saga-devtools';
import rootReducer from '../reducers'

const sagaMonitor = createSagaMonitor()

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run,
  }
}
