import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import NewNote from './new_note';
import AllNotes from './all_notes';

const routs = (
  < Router >
     <div>
        <Route exact path="/" component={ App } />
        <Route path="/all_notes" component={ AllNotes } />
        <Route path="/new_note" component={ NewNote } />
     </div>
  </ Router >
);
ReactDOM.render(routs, document.getElementById('root'));
