import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Link } from 'react-router-dom';

class App extends React.Component {
   render() {
      return (
         <div className='main'>
            <h1>NOTES</h1>
            <Link to='/all_notes' className='btn btn-secondary'>All Notes</Link>
            <Link to='/new_note'  className='btn btn-secondary'>New Note</Link>
         </div>
      )
   }
}
export default App;