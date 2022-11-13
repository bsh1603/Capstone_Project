import React, { Component , useState } from 'react';
import Toggle from "./Toggle.component";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import UserService from "../services/user.service";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "./Toggle.css"
import AuthService from "../services/auth.service";
import EditProfile from './edit-profile.component';
import Work from './user-work';

function Cal() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

class ToggleForm extends React.Component {
  state = {
    checked: true,
    size: "default"
  };

  handleChange = (e) => {
    this.setState({ checked: e.target.checked });
  };

  setSize(e) {
    this.setState((prevState) => ({
      size: prevState.size === "default" ? "large" : "default"
    }));
  }

  setDisable(e) {
    this.setState((prevState) => ({
      disabled: !prevState.disabled
    }));
  }

  render() {
    return (
      <form>
        
        
        
        <Toggle
          checked={this.state.checked}
          text="근무시작"
          size={this.state.size}
          
          onChange={this.handleChange}
          offstyle="btn-danger"
          onstyle="btn-success"
        />
      </form>
    );
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
        <div >

        <li className="nav-item" >
                <Link to={"/work"} className="nav-link">
                  근무조회
                </Link>
        </li>

        <li className="nav-item" >
                <Link to={"/member"} className="nav-link">
                  팀원조회
                </Link>
        </li>

        <li className="nav-item" >
                <Link to={"/inventory"} className="nav-link">
                  재고관리
                </Link>
        </li>
        <li className="nav-item" >
                <Link to={"/editprofile"} className="nav-link">
                  정보수정
                </Link>
        </li>

        </div>
        <Routes>
            <Route path="/work" element={ <Work></Work>} />
            <Route path="/member" element={<Cal />} />
            <Route path="/inventory" element={<Cal />} />
            <Route path="/edit" element={<EditProfile />} />
        </Routes>
      <div>

        <ToggleForm></ToggleForm>
      </div>

      </div>

    );
  }
}
