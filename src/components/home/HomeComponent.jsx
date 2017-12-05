import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';

const HomeComponent = props => {
    const {content} = props;
    return (
        <div>
            {content}
        </div>
    )
}
export default HomeComponent;
