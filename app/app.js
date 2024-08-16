import './i18n';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import createReducer from './redux/reducers';
import rootSaga from './redux/rootSaga';
import {
  CalculateNeed,
  CreateKai,
  Financial,
  HowItWorks,
  // EstimateBenefits,
  Landing,
  NotFound,
  PlanDetails,
  Step1,
  // Sidebar,
} from './containers/pageListAsync';
import { Toaster } from 'react-hot-toast';

const sagaMiddleware = createSagaMiddleware();
const reducer = createReducer();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="intro" element={<Step1 />} />
          <Route path="calculate-need" element={<CalculateNeed />} />
          <Route path="create" element={<CreateKai />} />
          <Route path="financial" element={<Financial />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="plan-details" element={<PlanDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </Provider>
  );
}

export default App;
