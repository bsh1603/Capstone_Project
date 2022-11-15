import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/manager-register.component";
import WorkerRegister from "./components/worker-register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";

import BoardAdmin from "./components/board-admin.component";


import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
//import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      
      showAdminBoard: false,
      currentUser: undefined
    };
  }
  
  componentDidMount() {
    const user = getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        
        showAdminBoard: user.roles.includes("ROLE_MANAGER"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;
    
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/home"} className="navbar-brand">
            ALBA v11.13
          </Link>
          

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}

          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                
              </Link>
            </li>
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  my profile
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
                <Link to={"/login"} className="nav-link">
                  Login /Logout
                </Link>
              </li>

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
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Tutorial
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

            <Route path="/user" element={<BoardUser />} />
            
            <Route path="/admin" element={<BoardAdmin />} />

            <Route path="/tutorials" element={<TutorialsList/>} />
            <Route path="/add" element={<AddTutorial/>} />
            {/* <Route path="/tutorials/:id" element={<Tutorial/>} /> */}
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