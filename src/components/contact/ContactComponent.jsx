import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ContactComponent = props => {
    const {content} = props;
        return (
            <div>
                {content}
            </div>
        )
}
export default ContactComponent;
