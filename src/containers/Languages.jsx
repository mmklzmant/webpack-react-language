import React from 'react';
import LanguageComponent from '../components/language/LanguageComponent.jsx';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        name: state.language.name
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

//connect
const Language = connect(
    mapStateToProps,
    mapDispatchToProps
)(LanguageComponent);

export default Language;