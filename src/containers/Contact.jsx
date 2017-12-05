import React from 'react';
import ContactComponent from '../components/contact/ContactComponent.jsx';
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return {
        content: state.content
    }
}

function mapDispatchToProps() {
    return {}
}

//connect
const Contact = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactComponent);

export default Contact;