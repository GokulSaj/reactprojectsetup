import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
// import { offline } from 'redux-offline';
// import offlineConfig from 'redux-offline/lib/defaults';

// Saga
import {
    watchAuth,
} from "./sagas";

// Reducers
import authReducer from './reducers/auth';

const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

const rootReducer = combineReducers({
    auth: authReducer
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export function configureStore() {

    const store = createStore(
        rootReducer,
        // compose(
        //     applyMiddleware(...middlewares),
        //     process.env.NODE_ENV === "development"
        //         ?  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        //         : null,
        //     offline(offlineConfig)
        // )
        composeEnhancers(
            applyMiddleware(...middlewares),
        )
    );

    sagaMiddleware.run(watchAuth);

    return store;
}
