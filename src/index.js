import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

//PWA
import * as serviceWorker from './serviceWorker';

//PROVIDER
import { StateProvider } from './Context/StateProvider';
import reducer, { initialState } from './Context/reducer';

ReactDOM.render(
  <React.StrictMode>

   <StateProvider initialState={initialState} render={reducer}>
      <App />
   </StateProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
