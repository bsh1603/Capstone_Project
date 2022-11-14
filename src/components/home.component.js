import React, { Component , useState } from 'react';
import Toggle from "./Toggle.component";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "./Toggle.css"
import AuthService from "../services/auth.service";
import EditProfile from './edit-profile.component';
import Work from './user-work';
import Inventory from './inventory-component';
import TeamMember from './team-member';

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
    checked: false,
    size: "large"
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



  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          
        
        <div className='navbar'>

        <li className="nav-item" >
                <Link to={"/home/work"} className="nav-link">
                  근무조회
                </Link>
        </li>

        <li className="nav-item" >
                <Link to={"/home/members"} className="nsav-link">
                  팀원조회
                </Link>
        </li>

        <li className="nav-item" >
                <Link to={"/home/inventory"} className="nav-link">
                  재고관리
                </Link>
        </li>
        <li className="nav-item" >
                <Link to={"/home/editprofile"} className="nav-link">
                  정보수정
                </Link>
        </li>

        </div>
        
        </header>
      
      <Routes>
            <Route path="/work" element={ <Work/>} />
            <Route path="/members" element={<TeamMember></TeamMember>} />
            <Route path="/inventory" element={<Inventory/>} />
            <Route path="/editprofile" element={<EditProfile />} /> 
        </Routes>
      <div>        <ToggleForm></ToggleForm> <br/>    </div>
      </div>

    );
  }
}
