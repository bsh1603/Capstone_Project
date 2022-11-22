import React, { Component , useState } from 'react';
import Toggle from "./Toggle.component";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "./Toggle.css"
import AuthService from "../services/auth.service";
import EditProfile from './edit-profile.component';
import WorkTime from './work-time';

import TeamMember from './team-member';
import Profile from './profile.component';
import Item from './item';


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



  render() {
    return (
      <div >
        
        <header className="jumbotron">          
        
        <div className='navbar'>

        <li className="nav-item" >
                <Link to={"work"} className="nav-link">
                  근무조회
                </Link>
        </li>

        <li className="nav-item" >
                <Link to={"members"} className="nav-link">
                  팀원조회
                </Link>
        </li>

        <li className="nav-item" >
                <Link to={"item"} className="nav-link">
                  재고관리
                </Link>
        </li>
        <li className="nav-item" >
                <Link to={"profile"} className="nav-link">
                  마이프로필
                </Link>
        </li>

        </div>
        
        </header>
      
      <Routes>
            <Route path="work" element={ <WorkTime/>} />
            <Route path="members" element={<TeamMember></TeamMember>} />
            <Route path="item" element={<Item/>} />
            <Route path="profile" element={<Profile />} /> 
        </Routes>
      <div>        <br/>    </div>
      </div>

    );
  }
}