/*  Full Signup component */
// Everything here was previously in the App component.
import React from 'react';
import "./assets/css/signup.css";
import Logo from "./assets/img/logo.png";
import Particles from 'reactparticles.js';

import LoginNavbar from "./components/Navbar/LoginNavbar";

class Signup extends React.Component {
  
  render() {
  	return (
  <div>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
    <Particles id="tile1"/>
  <header className="header-sticky header-light">
    <LoginNavbar />
  </header>


  <div className="container">
    <div className="col-md-6 mx-auto text-center">
       <div className="header-title">
          <h2 className="wv-heading--subtitle">
              Sign up!
          </h2>
       </div>
    </div>
    <div className="row">
       <div className="col-md-4 mx-auto">
          <div className="myform form ">
             <form action="" method="post" name="login">
                <div className="form-group">
                   <input type="text" name="name"  className="form-control my-input" id="name" placeholder="Name"/>
                </div>
                <div className="form-group">
                   <input type="email" name="email"  className="form-control my-input" id="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                   <input type="number" min="0" name="phone" id="phone"  className="form-control my-input" placeholder="Phone"/>
                </div>
                <div className="text-center ">
                   <button type="submit" className=" btn btn-block send-button tx-tfm">Create Your Free Account</button>
                </div>
                
             </form>
          </div>
       </div>
    </div>
 </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
  </div>
  	);
  }
}

export default Signup;