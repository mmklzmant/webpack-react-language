import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link
} from 'react-router-dom';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import counter from '../reducers/rreduxTest.js';
import about from '../reducers/about.js';
import home from '../reducers/home.js';
import contact from '../reducers/contact.js';

import Navigator from './navigator/Navigator.jsx';
import RRedux from '../containers/RRedux.jsx';
import About from '../containers/About.jsx';
import Home from '../containers/Home.jsx';
import Contact from '../containers/Contact.jsx';

const rreduxStore = createStore(counter);
const aboutStore = createStore(about);
const homeStore = createStore(home);
const contactStore = createStore(contact);


class Routing extends Component {
    render() {
        return(
            <HashRouter>
                <div>
                    <Navigator/>
                    <main>
                        <Provider store={rreduxStore}>
                            <Route path="/rredux" component={RRedux} />
                        </Provider>
                        <Provider store={homeStore}>
                            <Route exact path="/" component={Home} />
                        </Provider>
                        <Provider store={aboutStore}>
                            <Route path="/about" component={About} />
                        </Provider>
                        <Provider store={contactStore}>
                             <Route path="/contact" component={Contact} />
                        </Provider>
                    </main>
                </div>
            </HashRouter>
        )
    }
}
export default Routing