import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import  {createLogger} from 'redux-logger';
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reduser/reducer'



export const mystore = createStore(reducer,applyMiddleware(createLogger()))
console.log(mystore.getState())

const Myentrypoint = () =>     
<Provider store={mystore}><App/></Provider>;

AppRegistry.registerComponent(appName, () => Myentrypoint);

