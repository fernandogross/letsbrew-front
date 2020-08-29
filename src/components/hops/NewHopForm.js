import React, { Component } from 'react';
import axios from 'axios';

class NewHopForm extends Component {
  state = {
    name: '',
    origin: '',
    characteristics: '',
    type: '',
    form: '',
    price: '',
    alpha: '',
    beta: '',
    user_id: '',
    error: null
  }
  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/hops', this.state)
      .then(response => {
      })
      .catch(error => {
        this.setState({
          error: error.response.data
        });
      });
  }
  render() {
    return (
      <div className="row">
        <h5 className="center">NEW HOP</h5>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input id="name" type="text" className="validate" onChange={this.handleOnChange} required/>
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s6">
              <input id="origin" type="text" className="validate" onChange={this.handleOnChange}/>
              <label htmlFor="origin">Origin</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="characteristics" type="text" className="validate" onChange={this.handleOnChange}/>
              <label htmlFor="characteristics">Characteristics</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s2">
            <select id="type" className="browser-default" onChange={this.handleOnChange} defaultValue={'DEFAULT'} required>
                <option value="DEFAULT" disabled>Choose a type</option>
                <option value="1">Bittering</option>
                <option value="2">Aroma</option>
              </select>
            </div>
            <div className="input-field col s2">
              <select id="form" className="browser-default" onChange={this.handleOnChange} defaultValue={'DEFAULT'} required>
                <option value="DEFAULT" disabled>Choose a form</option>
                <option value="1">Pellet</option>
                <option value="2">Whole</option>
                <option value="3">Plug</option>
              </select>
            </div>
            <div className="input-field col s2">
              <input id="price" type="number" className="validate" onChange={this.handleOnChange}/>
              <label htmlFor="price">Price</label>
            </div>
            <div className="input-field col s2">
              <input id="alpha" type="number" className="validate" onChange={this.handleOnChange} required/>
              <label htmlFor="alpha">Alpha</label>
            </div>
            <div className="input-field col s2">
              <input id="beta" type="number" className="validate" onChange={this.handleOnChange} required/>
              <label htmlFor="beta">Beta</label>
            </div>
            <div className="input-field col s2">
              <input id="user_id" type="number" className="validate" onChange={this.handleOnChange}/>
              <label htmlFor="user_id">User</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light right">Create</button>
        </form>
      </div>
    )
  }
}

export default NewHopForm;
