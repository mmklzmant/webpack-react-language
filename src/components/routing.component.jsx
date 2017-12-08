import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link
} from 'react-router-dom';
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import {addLocaleData} from 'react-intl';
import { IntlProvider, intlReducer, updateIntl } from 'react-intl-redux'
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zh_CN from "../locale/zh_CN";
import en_US from "../locale/en_US";
import reducer from '../reducers/index.js';

import Navigator from '../containers/Navigator.jsx';
import RRedux from '../containers/RRedux.jsx';
import About from '../containers/About.jsx';
import Home from '../containers/Home.jsx';
import Contact from '../containers/Contact.jsx';
import Language from '../containers/Languages.jsx';

addLocaleData([...en, ...zh]);
const UPDATE_LOCALES = 'UPDATE_LOCALES';

const store = createStore(reducer);

function getLang(props) {
    switch (props.language) {
        case "en":
            return en_US;
        case "English":
            return en_US;
        case "中文":
            return zh_CN
        default:
            return zh_CN;
    }
}

const Routing = props => {
    return (
        <IntlProvider locale='en' messages={getLang(props)}>
        <HashRouter>
            <div>
                <Navigator/>
                <main>
                    <Route path="/rredux" component={RRedux}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/language" component={Language}/>
                </main>
            </div>
        </HashRouter>
        </IntlProvider>
    )
}

function mapStateToProps(state) {
    console.log("Routing State", state);
    return {
        aboutMsg: state.about.content,
        contactMsg: state.contact.content,
        homeMsg: state.home.content,
        value: state.counter.count,
        msg: state.counter.msg,
        language: state.lang.language,
        name: state.language.name,
        alterLang: state.navigator.lang
    }

}

function mapDispatchToProps(dispatch) {
    return {}
}

//connect
const Root = connect(
    mapStateToProps,
    mapDispatchToProps
)(Routing);

export default Root