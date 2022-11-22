import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";
import axios from "axios";
import { withRouter } from "../common/with-router";
import { Link, Routes, Route, } from "react-router-dom";
import "../App.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

//export const isLogin = () => !!localStorage.getItem('user');

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePwd = this.onChangePwd.bind(this);

    this.state = {
      email: "",
      pwd: "",
      
      // loading: false,
      
    };
  }


  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePwd(e) {
    this.setState({
      pwd: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();
    e.stopPropagation();

    // this.setState({
    //   message: "",
    //   loading: true,
    // });
    //AuthService.login(this.state.email, this.state.pwd)
    this.form.validateAll();
    
    axios
      .post("/api/login", this.state)
      .then((res) => {
        
        this.props.router.navigate("/home");
        localStorage.setItem('email', this.state.email);                
        localStorage.setItem("user", JSON.stringify(res.data));

        
        const json = localStorage.getItem("user");
        console.log(JSON.parse(json));

        const member_id = JSON.parse(localStorage.getItem("user")).id
  
        const id = JSON.stringify(member_id);
  
  axios.get(`/api/member/${id}`)
  
  .then(function(response) {
    console.log(typeof response.data);
    console.log(response.data)
    localStorage.setItem("team_member", JSON.stringify(response.data));
    
  })
      })
      .catch((err) => {console.error(err)
        alert("로그인실패");
      });
      
    
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.pwd}
                onChange={this.onChangePwd}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            <div className="nav">           
                                              
                <Link to={"/signup/manager"} >
                매니저 회원가입  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Link>
                              
                
            <Link to={"/signup/worker"} className="nav-item ">
                알바생 회원가입
            </Link>
            
            </div>
            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);