import React from 'react';
import { Provider } from 'react-redux';
import store from '../app/store';
  
const TestProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default TestProvider;
