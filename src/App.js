import React, { Component } from "react";
import Table from "react-bootstrap/Table";


class Api extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {

    const { data } = this.props
    return (

      <div>

        <h1> API FETCH </h1>
        <Table striped bordered hover variant="dark"></Table>
        <table>
          
          <th>ID</th>
          <th>TITLE</th>
          <th>BODY</th>

          {this.state.data.map((data, index) => (
            <tr>
              <td>{data.Sl_No}</td>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.body}</td>
            </tr>
          )
          )})
          </table>
      </div>);
  }
}


export default Api;
