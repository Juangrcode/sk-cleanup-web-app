import thunk from "redux-thunk";
import reducer from "@reducers/index";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import auth from "@store/auth";

// Redux store with initialState
const initialState = {
  ...auth,
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
