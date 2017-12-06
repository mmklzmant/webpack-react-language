//main.js
import React from 'react';
import ReactDom from 'react-dom';
import RReduxComponent from '../components/test/RReduxComponent.jsx';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.counter.count,
        msg: state.counter.msg
    }
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch({type: 'increase'})
    }
}
// Connected Component
const RRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(RReduxComponent);

export default RRedux;