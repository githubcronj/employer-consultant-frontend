import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import rootReducer from './reducer';
import modalReducer from 'store/slices/modalSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    modal: modalReducer,
    rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
