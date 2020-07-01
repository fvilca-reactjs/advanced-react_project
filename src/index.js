import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import ProbandoUseReducer from './probandoUseReducer'
//import UseReducer2 from './useReducer2';
//import UseReducer from './useReducer_';



const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware()
));

//ReactDOM.render(<UseReducer/>, document.getElementById('root'));


ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>,
                document.getElementById('root'));