import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
      .then(users => this.setState({ users }));
  }

  render() {
    if (this.state.users.length === 0) {
      return (
        <div>
          <h1>CHARGEMENT</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>users</h1>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              {user.title}
              {user.body}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
