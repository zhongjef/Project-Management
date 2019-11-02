import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { uid } from "react-uid";

class AllUsersTable extends Component {
  state = {
    users: [
      {
        profile_pic: "http://i.imgur.com/kjfLsHw.png",
        email: "jeff0@mail.com",
        username: "Jefferson0",
        phone: "0123456789"
      },
      {
        profile_pic: "http://i.imgur.com/kjfLsHw.png",
        email: "jeff1@mail.com",
        username: "Jefferson1",
        phone: "0123456789"
      },
      {
        profile_pic: "http://i.imgur.com/kjfLsHw.png",
        email: "jeff2@mail.com",
        username: "Jefferson2",
        phone: "0123456789"
      },
      {
        profile_pic: "http://i.imgur.com/kjfLsHw.png",
        email: "jeff3@mail.com",
        username: "Jefferson3",
        phone: "0123456789"
      },
      {
        profile_pic: "http://i.imgur.com/kjfLsHw.png",
        email: "jeff4@mail.com",
        username: "Jefferson4",
        phone: "0123456789"
      },
      {
        profile_pic: "http://i.imgur.com/kjfLsHw.png",
        email: "jeff5@mail.com",
        username: "Jefferson5",
        phone: "0123456789"
      },
      {
        profile_pic: "http://i.imgur.com/kjfLsHw.png",
        email: "jeff6@mail.com",
        username: "Jefferson6",
        phone: "0123456789"
      },
      {
        profile_pic: "http://i.imgur.com/kjfLsHw.png",
        email: "jeff7@mail.com",
        username: "Jefferson7",
        phone: "0123456789"
      },
      {
        profile_pic: "http://i.imgur.com/kjfLsHw.png",
        email: "jeff8@mail.com",
        username: "Jefferson8",
        phone: "0123456789"
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
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map(user => (
            <tr key={uid(user)}>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
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
    const users = this.state.users.filter(user => user.email !== userEmail);
    this.setState({ users });
  };
}

export default AllUsersTable;
