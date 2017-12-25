import 'babel-polyfill';
import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom';
import tunk from 'tunk';
import tunkReact from 'tunk-react';
import tunkDebug from 'tunk-debug';

tunk.config({debug: true}).use([tunkReact, tunkDebug]);

render(
    <Router>
        <Route path='/' component={require('./pages/Index').default} />
    </Router>
, document.getElementById('root'));
