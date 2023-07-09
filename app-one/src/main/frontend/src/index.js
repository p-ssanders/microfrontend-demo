import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.renderAppOne = (containerId, history) => {
    ReactDOM.render(<App/>, document.getElementById(containerId))
};

window.unmountAppOne = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
