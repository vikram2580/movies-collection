// ** Redux, Thunk & Root Reducer Imports
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";

// ** Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// ** Create store
const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);
export const getState = () => {
  return store.getState();
};
const persistor = persistStore(store);
export const dispatchAction = store.dispatch;
export { store, persistor };
