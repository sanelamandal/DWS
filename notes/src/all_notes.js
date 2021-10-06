import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class AllNotes extends Component {
	constructor(props){
		super(props)
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/app/all_notes')
        .then(res => {
            const notes = res.data;
            this.setState({notes});
        })
        
	}

    handleDelete = (id) => {
        console.log(id);
        axios.delete('http://localhost:3001/app/delete/' + id)
        .then(res => {
            let new_state = this.state.notes.filter(note => note.id != id);
            this.setState({notes: new_state});
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
            <Button variant="secondary" onClick={() => window.history.back()}> Back </Button>

            <div className="AllNotes">
            <table>
             <tr>
               <th>Name</th>
               <th>Note</th>
               <th>Delete</th>               
             </tr>
             { this.state.notes.map((note, index) => 
                <tr key={index}>
                 <td>{note.name}</td>
                 <td>{note.note}</td>
                 <td><button onClick={() => this.handleDelete(note.id) }>Delete</button></td>
                </tr>
               )}
            </table>
           </div>    
        </div>
        )
    }
}

export default AllNotes;