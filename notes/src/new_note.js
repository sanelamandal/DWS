import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class NewNote extends Component {
	constructor(props){
		super(props)
		this.state = { name:'', note:''}
		
	  }

	  handleSubmit = (event) => {
		const { name, note } = this.state
		event.preventDefault()
		axios.post('http://localhost:3001/app/new', {
			name,
			note
		})
		.then(response => {
			this.setState({note: '', name: ''});
		})
		.catch(err => {
			console.log(err);
		})
	  }

	  handleChange = (event) => {
		this.setState({

		  [event.target.name] : event.target.value
		})
	  }

	  render(){
		return (
			<div>
            <Button variant="secondary" onClick={() => window.history.back()}> Back </Button>

            <div className='NewNote'>
		    <form onSubmit={this.handleSubmit} >
			<div>
			  <input name='name' placeholder='Enter Note Name' className="n" value = {this.state.name} onChange={this.handleChange} />
			</div>
			<div>
			  <input name='note' placeholder='Enter Your Note' className="n" value={this.state.note} onChange={this.handleChange} />
			</div>
			<div>
			  <Button variant="secondary" className="b" type="submit">Submit</Button>
			</div>
		  </form>      
        </div>
		</div>
		)
	  }
	}
	  
	
export default NewNote;