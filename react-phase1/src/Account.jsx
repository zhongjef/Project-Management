import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import LoginNavbar from "./components/Navbar/LoginNavbar";
import LeftPanel from "./components/Account/AccountLeftPanel";
import { Helmet } from "react-helmet";
import Profile from "./components/Account/AccountProfile";

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
          <div className=" container-row row-fluid">
            <LoginNavbar />
          </div>
          <div className="container-row row">
            <div className="col-2 mw-100">
              <LeftPanel />
            </div>
            <div className="col">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Account;
