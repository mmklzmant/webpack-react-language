import React from 'react';
import {connect} from 'react-redux';
import NavigatorComponent from "../components/navigator/NavigatorComponent.jsx";

function mapStateToProps(state) {
    console.log("navigator mapToProps", state);
    return {
        language: state.lang.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onZhClick: () => dispatch({type: "zh"}),
        onEnClick: () => dispatch({type: 'en'})
    }
}

//connect
const Navigator = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigatorComponent);

export default Navigator;