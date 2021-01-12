import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { tourReducer } from "./reducers/tourReducers";

const allReducer = combineReducers({
	tour: tourReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
