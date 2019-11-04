import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { uid } from "react-uid";

class AllTeamsTable extends Component {
  state = {
    teams: [
      {
        name: "Red",
        managers: [
          {
            email: "jeff0@mail.com",
            username: "Jefferson0",
            phone: "0123456789"
          },
          {
            email: "jeff1@mail.com",
            username: "Jefferson1",
            phone: "0123456789"
          }
        ],
        members: [
          {
            email: "jeff0@mail.com",
            username: "Jefferson0",
            phone: "0123456789"
          },
          {
            email: "jeff1@mail.com",
            username: "Jefferson1",
            phone: "0123456789"
          }
        ]
      },
      {
        name: "Green",
        managers: [
          {
            email: "jeff4@mail.com",
            username: "Jefferson4",
            phone: "0123456789"
          },
          {
            email: "jeff5@mail.com",
            username: "Jefferson5",
            phone: "0123456789"
          }
        ],
        members: [
          {
            email: "jeff4@mail.com",
            username: "Jefferson4",
            phone: "0123456789"
          },
          {
            email: "jeff5@mail.com",
            username: "Jefferson5",
            phone: "0123456789"
          }
        ]
      },
      {
        name: "Blue",
        managers: [
          {
            email: "jeff7@mail.com",
            username: "Jefferson7",
            phone: "0123456789"
          },
          {
            email: "jeff8@mail.com",
            username: "Jefferson8",
            phone: "0123456789"
          }
        ],
        members: [
          {
            email: "jeff7@mail.com",
            username: "Jefferson7",
            phone: "0123456789"
          },
          {
            email: "jeff8@mail.com",
            username: "Jefferson8",
            phone: "0123456789"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Managers</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {this.state.teams.map(team => (
            <tr key={uid(team)}>
              <td>{team.name}</td>
              <td>
                <ul>
                  {team.managers.map(manager => (
                    <li>{`${manager.email} ${manager.username}`}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {team.members.map(member => (
                    <li>
                      <img src={member.profile_pic}></img>
                      {`${member.email} ${member.username}`}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <button
                  onClick={() => this.handleDelete(team.name)}
                  type="button"
                  className="btn-danger rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  handleDelete = teamName => {
    // TODO: Phase 2 call backend server to update teams
    const teams = this.state.teams.filter(team => team.name !== teamName);
    this.setState({ teams });
  };
}

export default AllTeamsTable;
