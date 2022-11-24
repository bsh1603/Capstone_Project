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
import Stock from './stock';
import './main.css';
import ChatRoom from './ChatRoom';

function Cal() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

function SplitPane(props){
  return(
    <div className='SplitPane'>
      <div className='SplitPane-left'>
        {props.left}
      </div>
      <div className='SplitPane-right'>
        {props.right}
      </div>
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
      <div className='tong'>
        
        
      
      
      
      {/* 여기에 실험시작 */}
      <div className='Mains'>
        {/* <div id='Mains-left'>
          <h3> Left Side </h3>
        </div> */}

        <div>
        <h2> This is Main layout </h2>
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
        <div>

        </div>
       
        </div>
        <Routes>
            <Route path="work" element={ <WorkTime/>} />
            <Route path="members" element={<TeamMember></TeamMember>} />
            <Route path="item" element={<Stock/>} />
            <Route path="profile" element={<Profile />} /> 
      </Routes>

        
      </div>
      
      <div className='Mains2'>
          <h3> 
            Right Side 
          </h3>
          
          <ChatRoom/>
        </div>
      
 
      </div>
      

    );
  }
}

