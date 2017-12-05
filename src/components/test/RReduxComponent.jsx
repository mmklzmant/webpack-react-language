import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const RReduxComponent = props =>{
    const { value, onIncreaseClick, msg } = props
    return (
        <div>
            <span>{value}</span>
            <button onClick={onIncreaseClick}>{msg}</button>
        </div>
    )
}
RReduxComponent.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}


//导出组件
export default RReduxComponent;