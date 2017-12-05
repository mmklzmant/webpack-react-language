//main.js
import React from 'react';
import ReactDom from 'react-dom';
import { Provider, connect } from 'react-redux'
import counter from './src/reducers/rreduxTest.js';
import Routing from './src/components/routing.component.jsx';

import { createStore } from 'redux';

const render = () => ReactDom.render(
        <Routing/>,
    document.getElementById('root')
);

render();

