import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import {Link, NavLink} from 'react-router-dom';

class Navigator extends Component{
    render() {
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
                                <li className="active"><NavLink to="/">首页</NavLink></li>
                                <li><NavLink to="/about">关于</NavLink></li>
                                <li><NavLink to="/contact">联系</NavLink></li>
                                <li><NavLink to="/rredux">rredux</NavLink></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right" >
                                <li> <a  className="dropdown-toggle"
                                         data-toggle="dropdown"> 语言切换
                                    <span className="caret"></span></a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li> <a>英语</a></li>
                                        <li> <a className="active">中文</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navigator;