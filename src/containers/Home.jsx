import React from 'react';
import HomeComponent from '../components/home/HomeComponent.jsx';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        content: state.content
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

//connect
const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);

export default Home;