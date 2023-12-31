// import { compose, createStore, applyMiddleware } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";

// import { rootReducer } from "./root-reducer";

// const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

// const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(persistedReducer, undefined, composedEnhancers);

// export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { loggerMiddleware } from "./middleware/logger";

const middleWares = [process.env.NODE_ENV === "development" && loggerMiddleware].filter(Boolean);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // whatever I ecome from the firebase User is not a clean object, I can Pick the parts of the user or just disable this middleware
    }).concat(middleWares),
});
