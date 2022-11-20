import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

import { Link, Routes, Route, } from "react-router-dom";
import EditProfile from "./edit-profile.component";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/login" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        
        <div>
        <header className="jumbotron">
          <h3>
          <strong>{localStorage.getItem('email')}</strong> Profile
          </h3>
        </header>
        
          <strong>user id: </strong>{JSON.parse(localStorage.getItem("user")).id} <br/>

          <strong>name: </strong>{JSON.parse(localStorage.getItem("user")).name} <br/>

        
        <strong>Authorities:</strong> {JSON.parse(localStorage.getItem("user")).admin}
        <ul>
          
          
        </ul>
      </div>

      <Link to={"/home/editprofile"} className="nav-item ">
                프로필 수정
      </Link>

      <Routes>
            
        <Route path="/home/editprofile" element={<EditProfile/>} />
      </Routes>


      </div>
    )
  }
}
