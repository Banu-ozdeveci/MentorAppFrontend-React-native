import { createStore, combineReducers, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { persistStore, persistReducer } from "redux-persist"; // app kapatılınca verileri tutar

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./auth";
import { mentorsReducer } from "./mentors";
//import { usersReducer } from "./user";

const rootReducer = combineReducers({
  auth: authReducer,
  mentors: mentorsReducer,
  // user: usersReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
export default store;
