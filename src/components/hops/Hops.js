import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NewHopForm from './NewHopForm';

class Hops extends Component {
  state = {
    hops: [],
    error: null,
    loading: true
  };
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/hops")
      .then(response => {
        this.setState({
          hops: response.data.data,
        });
      })
      .catch(error => {
        this.setState({
          error,
        });
      })
      .finally(() => {
        console.log('ITS DONE!');
      });
  }
  render() {
    const { hops } = this.state;
    const hopList = hops.length ? (
      hops.map((hop) => {
        return (
          <tr key={hop.id}>
            <td>{hop.id}</td>
            <td>{hop.user_id}</td>
            <td>{hop.name}</td>
            <td>{hop.origin}</td>
            <td>{hop.characteristics}</td>
            <td>{hop.price}</td>
            <td>{hop.type}</td>
            <td>{hop.form}</td>
            <td>{hop.alpha}</td>
            <td>{hop.beta}</td>
            <td>
              <Link
                to={"/hops/" + hop.id}
                className="waves-effect waves-light btn blue"
              >
                Details
              </Link>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td colSpan="11" className="center">
          {this.state.error ? this.state.error.message : "No hops found"}
        </td>
      </tr>
    );
    return (
      <div className="container">
        <NewHopForm />
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
          <tbody>{hopList}</tbody>
        </table>
      </div>
    );
  }
}

export default Hops;
