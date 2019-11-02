import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
class Profile extends Component {
  state = {
    user: {
      profile_pic: "",
      email: "jeff@mail.com",
      username: "Jefferson Zhong",
      phone: "0123456789",
      about: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.`
    }
  };
  render() {
    return (
      <ul class="list-group list-group-flush">
        <li class="list-group-item  d-flex justify-content-between align-items-center">
          <p className="text-muted m-0 d-inline">Username</p>
          <p class="text-dark d-inline m-0">{this.state.user.username}</p>
          <a href="#">Change Username</a>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <p className="text-muted m-0 d-inline">Email</p>
          <p class="text-dark d-inline m-0">{this.state.user.email}</p>
          <a href="#">Change Email</a>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <p className="text-muted m-0">Password</p>
          <a href="#">Change Password</a>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <p className="text-muted m-0">Phone</p>
          <p class="text-dark d-inline m-0">{this.state.user.phone}</p>
          <a href="#">Change Phone</a>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <p className="text-muted m-0">About</p>
          <p class="text-dark d-inline m-2">{this.state.user.about}</p>
          <a href="#">Change About</a>
        </li>
      </ul>
    );
  }
}

export default Profile;
