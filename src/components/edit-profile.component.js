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

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    
    
    

    this.state = {
      email: "",
      name: "",
      pwd: "",
      phone: "",
      //authentication_code: "",
      
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



  handleEdit(e) {
    e.preventDefault();
    e.stopPropagation();

    this.form.validateAll(); // 회원 수정


    axios
      .put("/api/signup/worker", this.state)
      .then((res) => {
              console.log(res);
              console.log("데이터 전송 성공");
              alert("수정 성공");
              this.props.router.navigate("/login");

            })
      .catch((err) => {console.error(err)
        alert("수정 fail")
  });

    
  }

  render() {
    return (
      <div className="col-md-12">
      

          <Form
            onSubmit={this.handleEdit}
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
                  <button className="btn btn-primary btn-block">
                  프로필수정</button>
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
      
    );
  }
}

export default EditProfile;