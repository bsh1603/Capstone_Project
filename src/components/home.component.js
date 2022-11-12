import React, { Component , useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import UserService from "../services/user.service";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import AuthService from "../services/auth.service";
import EditProfile from './edit-profile.component';


function Cal() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
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
        <div className="navbar">

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
            <Route path="/work" element={ <div>근무조회 </div>} />
            <Route path="/member" element={<Cal />} />
            <Route path="/inventory" element={<Cal />} />
            <Route path="/edit" element={<EditProfile />} />
        </Routes>
      
      </div>

    );
  }
}
