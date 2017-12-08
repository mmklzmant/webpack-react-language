//main.js
import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {connect} from 'react-redux'
import Root from './src/components/routing.component.jsx';
import reducer from './src/reducers/index.js';
import { Provider } from 'react-intl-redux'

const store = createStore(reducer);

const render = () => ReactDom.render(
        <Provider store={store}>
            <Root/>
        </Provider>,
    document.getElementById('root')
);

render();

store.subscribe(() => {
        console.log("subscribe: ", store.getState());
    }
)
