import React, { Component } from "react";
import axios from "axios";

class HopDetails extends Component {
  state = {
    hop: null,
    error: null,
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get("http://localhost:8000/api/hops/" + id)
      .then(response => {
        this.setState({
          hop: response.data.data,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  }
  deleteHop = (e) => {
    let id = this.props.match.params.id;
    axios
      .delete("http://localhost:8000/api/hops/" + id)
      .then(response => {
        this.props.history.push('/hops');
      })
      .catch(error => {
        this.setState({
          error
        });
      });
    }
  render() {
    const hopFound = this.state.hop ? (
      <tr key={this.state.hop.id}>
        <td>{this.state.hop.id}</td>
        <td>{this.state.hop.user_id}</td>
        <td>{this.state.hop.name}</td>
        <td>{this.state.hop.origin}</td>
        <td>{this.state.hop.characteristics}</td>
        <td>{this.state.hop.price}</td>
        <td>{this.state.hop.type}</td>
        <td>{this.state.hop.form}</td>
        <td>{this.state.hop.alpha}</td>
        <td>{this.state.hop.beta}</td>
        <td>
          <a
            onClick={this.deleteHop}
            className="waves-effect waves-light btn red"
          >
            Delete
          </a>
        </td>
      </tr>
    ) : (
      <tr>
        <td colSpan="11" className="center">{this.state.error ? this.state.error.message : 'No hop found :('}</td>
      </tr>
    );
    return (
      <div className="container">
        <table className="highlight">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Name</th>
              <th>Origin</th>
              <th>Characteristics</th>
              <th>Price</th>
              <th>Type</th>
              <th>Form</th>
              <th>Alpha</th>
              <th>Beta</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{hopFound}</tbody>
        </table>
      </div>
    );
  }
}

export default HopDetails;
