import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.renderAppTwo = (containerId, history) => {
    ReactDOM.render(<App/>, document.getElementById(containerId))
};

window.unmountAppTwo = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
