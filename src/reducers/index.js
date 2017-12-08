import {combineReducers} from 'redux';
import { intlReducer } from 'react-intl-redux'

import about from './about.js';
import counter from './rreduxTest.js';
import lang from './alterLang.js';
import home from './home.js';
import contact from './contact.js';
import language from './language.js';
import navigator from './navigator.js';
import locales from './localesReducer.js';

const reducer =  combineReducers({
    lang,
    counter,
    about,
    home,
    contact,
    language,
    navigator,
    intl: intlReducer,
    locales: localesReducer
});
export default reducer;