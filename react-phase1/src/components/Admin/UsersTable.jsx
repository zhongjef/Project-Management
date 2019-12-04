import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { uid } from "react-uid";
import { adminGetUsers, deleteUsers } from "../../actions/admin";
class AllUsersTable extends Component {
	state = {
		users: []
	};
	render() {
		return (
			<div>
				{this.getUsers()}
				<table className="table">
					<thead>
						<tr>
							<th>Email</th>
							<th>Username</th>
							<th>User Id</th>
						</tr>
					</thead>
					<tbody>
						{this.state.users.map((user) => (
							<tr key={uid(user)}>
								<td>{user.email}</td>
								<td>{user.username}</td>
								<td>{user._id}</td>
								<td>
									<button
										onClick={() => this.handleDelete(user._id)}
										type="button"
										className="btn-danger rounded">
										Bye
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}

	getUsers = () => {
		const users = adminGetUsers();
		// console.log(users);
		// this.setState({ users: users });
	};
	handleDelete = (userId) => {
		// TODO: Phase 2 call backend server to update users
		deleteUsers(userId);
		const users = this.state.users.filter((user) => user._id !== userId);
		this.setState({ users });
	};
}

export default AllUsersTable;
