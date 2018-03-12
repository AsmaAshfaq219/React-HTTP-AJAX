import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//for executing something on request globally
let interceptor = axios.interceptors.request.use(request => {
    console.log(request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
//Removing the interceptor
// axios.interceptors.request.eject(interceptor);

//Defining Base URL globally
axios.defaults.baseURL='https://jsonplaceholder.typicode.com';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
