import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';

const AboutComponent = props => {
    const { content } = props;
    return (
            <div>
                {content}
            </div>
        )
}
export default AboutComponent;
