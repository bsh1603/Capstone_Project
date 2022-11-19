import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import axios from "axios";
import AuthService from "../services/auth.service";
import { withRouter } from "../common/with-router";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};



const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class WorkerRegister extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeTeamName = this.onChangeTeamName.bind(this);
    
    this.onChangeAuthenticationCode =  this.onChangeAuthenticationCode.bind(this);

    this.state = {
      email: "",
      name: "",
      pwd: "",
      phone: "",
      authentication_code: "",
      
      // successful: false,
      // message: "",
    };
  }

  onChangePassword(e) {
    this.setState({
      pwd: e.target.value,
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePhoneNumber(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangeTeamName(e) {
    this.setState({
      team_name: e.target.value,
    });
  }

  onChangeAuthenticationCode(e) {
    this.setState({
      authentication_code: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();
    e.stopPropagation();

    // this.setState({
    //   message: "",
    //   successful: false,
    // });

    this.form.validateAll(); // 예외처리 로직 ?

    axios
      .post("/api/signup/worker", this.state)
      .then((res) => {
              console.log(res);
              console.log("데이터 전송 성공");
              alert("회원가입 성공");
              this.props.router.navigate("/login");

            })
      .catch((err) => {console.error(err)
        alert("회원가입 fail")
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
            onSubmit={this.handleRegister}
            ref={(c) => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.pwd}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">이름</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeName}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phonenumber">전화번호</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="phonenumber"
                    value={this.state.phone}
                    onChange={this.onChangePhoneNumber}
                  />
                </div>

                                

                <div className="form-group">
                  <label> 인증코드 </label>
                  <Input
                    type="text"
                    className="form-control"
                    name="authentication_code"
                    value={this.state.authentication_code}
                    onChange={this.onChangeAuthenticationCode}
                  />
                </div>

                
                <div className="form-group">
                  <button className="btn btn-primary btn-block">
                    알바생 회원가입</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
              type="submit"
            />
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(WorkerRegister);