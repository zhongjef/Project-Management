import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import LoginNavbar from "./components/Navbar/LoginNavbar";
import LeftPanel from "./components/Account/LeftPanel";
import { Helmet } from "react-helmet";
import Profile from "./components/Account/Profile";

class Account extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Account Page</title>
          <meta name="User Account Page" content="Nested component" />
          <style>{"body { background-color: white; }"}</style>
        </Helmet>
        <div className="container-fluid p-0">
          <container className="row-fluid">
            <LoginNavbar />
          </container>
          <container className="row">
            <container className="col-2 mw-100">
              <LeftPanel />
            </container>
            <container className="col">
              <Profile />
            </container>
          </container>
        </div>
      </div>
    );
  }
}
export default Account;
