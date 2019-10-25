

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from '../redux/reducers';
import rootSaga from '../redux/sagas';

const createHistory = require('history').createBrowserHistory;
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// if you want to use it only in production
// https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f
// https://github.com/zalmoxisus/redux-devtools-extension#14-using-in-production



const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeEnhancers(compose(applyMiddleware(...middlewares)))
);

sagaMiddleware.run(rootSaga);
export { store, history };