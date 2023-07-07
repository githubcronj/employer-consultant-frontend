import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import rootSaga from "./saga";
import rootReducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, loggerMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
