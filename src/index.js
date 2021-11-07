import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import {StateProvider} from "../src/ContextHook/StateProvider"
import reducer, { initialState } from "../src/ContextHook/reducer"

ReactDOM.render(
  <React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
    	<App />
		</StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);