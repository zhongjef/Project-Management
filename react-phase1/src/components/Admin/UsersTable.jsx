import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { uid } from "react-uid";

class AllUsersTable extends Component {
  state = {
    users: [
      {
        email: "jeff0@mail.com",
        username: "Jefferson0",
        password: "0123456789"
      },
      {
        email: "jeff1@mail.com",
        username: "Jefferson1",
        password: "0123456789"
      },
      {
        email: "jeff2@mail.com",
        username: "Jefferson2",
        password: "0123456789"
      },
      {
        email: "jeff3@mail.com",
        username: "Jefferson3",
        password: "0123456789"
      },
      {
        email: "jeff4@mail.com",
        username: "Jefferson4",
        password: "0123456789"
      },
      {
        email: "jeff5@mail.com",
        username: "Jefferson5",
        password: "0123456789"
      },
      {
        email: "jeff6@mail.com",
        username: "Jefferson6",
        password: "0123456789"
      },
      {
        email: "jeff7@mail.com",
        username: "Jefferson7",
        password: "0123456789"
      },
      {
        email: "jeff8@mail.com",
        username: "Jefferson8",
        password: "0123456789"
      }
    ]
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Username</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map(user => (
            <tr key={uid(user)}>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <button
                  onClick={() => this.handleDelete(user.email)}
                  type="button"
                  className="btn-danger rounded"
                >
                  Bye
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  handleDelete = userEmail => {
    // TODO: Phase 2 call backend server to update users

    const users = this.state.users.filter(user => user.email !== userEmail);
    this.setState({ users });
  };
}

export default AllUsersTable;
