import React from 'react';
import AboutComponent from '../components/about/AboutComponent.jsx';
import { Provider, connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        content: state.content
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {}
}

//connect
const About = connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutComponent);

export default About;