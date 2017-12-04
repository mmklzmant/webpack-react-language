//main.js
import React from 'react';
import ReactDom from 'react-dom';
import TestComponent from './src/components/test/TestComponent.jsx';

ReactDom.render(
    <TestComponent />,
    document.getElementById('root')
);