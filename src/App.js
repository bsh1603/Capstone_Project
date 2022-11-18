import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import { isLogin } from "./components/login.component";
import Register from "./components/manager-register.component";
import WorkerRegister from "./components/worker-register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";

import AddItem from "./components/add-inventory.component";
import ItemsList from "./components/inventory-list.component";
import Item from "./components/inventory.component";
//import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import WorkTime from "./components/work-time";
//import TeamMember from "./components/team-member";

//const IsLogin = () => !!localStorage.getItem('email');

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      
      showAdminBoard: false,
    
    };
  }
  
  

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    localStorage.clear();
    this.setState({
      
      showAdminBoard: false,
      currentUser: undefined,
      
      
    });
  }

  render(props) {
    let currentUser = localStorage.getItem("user");
    //let currentUser = true;
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            ALBA24
          </Link>
          

                    

          {currentUser? (

            
            <div className="navbar-nav ml-auto">
              
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                home
              </Link>
            </li>
          
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  myprofile
                </Link>
              </li>
              
              <li className="nav-item">
              <Link to={"/work"} className="nav-link">
                근무조회
              </Link>
            </li>
          
              <li className="nav-item">
              <Link to={"/item"} className="nav-link">
                재고관리
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/additem"} className="nav-link">
                Add 재고
              </Link>
            </li>
            
            <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>


            </div>

            
          ) : (
            <div className="navbar-nav ml-auto">
              

              <li className="nav-item">
                <Link to={"/signup/manager"} className="nav-link">
                  매니저 가입
                </Link>
                
              </li>


              <li className="nav-item">
                <Link to={"/signup/worker"} className="nav-link">
                  알바생  가입
                </Link>
                
              </li>

              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login 
                </Link>
              </li>

                            


            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup/manager" element={<Register />} />
            <Route path="/signup/worker" element={<WorkerRegister />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/work" element={<WorkTime />} />
            {/* <Route path="/members" element={<TeamMember />} /> */}

            <Route path="/item" element={<ItemsList/>} />
            <Route path="/additem" element={<AddItem/>}/>
            <Route path="/item/:id" element={<Item/>}  /> 
          </Routes>
        </div>

        {/* <AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default App;

//import React, {useEffect, useState} from 'react';
//import axios from 'axios';
//
//function App() {
//   const [user, setUser] = useState('')
//
//    useEffect(() => {
//        axios.get('/api/home')
//        .then(res => {
//          console.log(typeof res.data);
//          setUser(res.data);
//        })
//        .catch(error => console.log(error))
//    }, []);
//
//    return (
//        <div>
//            백엔드에서 가져온 데이터입니다
//            <h1>{user.id}</h1>
//            <h1>{user.username}</h1>
//        </div>
//    );
//}
//
//export default App;