import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import {Link, NavLink} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';


const NavigatorComponent = props => {
    const {onZhClick, onEnClick, language} = props;
    console.log("Nav props", props);
    return (
        <header>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <NavLink to="/">
                                    <FormattedMessage
                                        id="intl.home"
                                        defaultMessage='Home'
                                    />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">
                                    <FormattedMessage
                                        id="intl.about"
                                        defaultMessage='About'
                                    />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">
                                    <FormattedMessage
                                        id="intl.contact"
                                        defaultMessage='Contact'
                                    />
                                </NavLink>
                            </li>
                            <li><NavLink to="/rredux">rredux</NavLink></li>
                            <li><NavLink to="/language">language</NavLink></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a className="dropdown-toggle"
                                   data-toggle="dropdown"> {language}
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li onClick={onEnClick}><a>英语</a></li>
                                    <li onClick={onZhClick}><a className="active">中文</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavigatorComponent;