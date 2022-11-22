import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import Login from "./components/login.component";
//import { isLogin } from "./components/login.component";
import Register from "./components/manager-register.component";
import WorkerRegister from "./components/worker-register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
//import BoardUser from "./components/board-user.component";
//import BoardAdmin from "./components/board-admin.component";


//import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import WorkTime from "./components/work-time";
import { Chart } from "./components/chart";
import EditProfile from "./components/edit-profile.component";
import TeamMember from "./components/team-member";


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
    this.props.router.navigate("/login");
    this.setState({
      
      showAdminBoard: false,
      currentUser: undefined,      
      
    });
  }

  render(props) {
    let currentUser = localStorage.getItem("user");
    
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          {/* <Link to={"/"} className="navbar-brand"></Link> */}
          <div className="navbar-brand">ALBA24</div>
          
                          

          {currentUser? (

            
            <div className="navbar-nav ml-auto">
              
            <li className="nav-item">
              <Link to={"home"} className="nav-link">
                home
              </Link>
            </li>
          
                        
            <li className="nav-item">
                <a href="login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>


            </div>

            
          ) : (
            <div className="navbar-nav ml-auto">
              

              <li className="nav-item">
                <Link to={"signup/manager"} className="nav-link">
                  매니저 가입
                </Link>
                
              </li>


              <li className="nav-item">
                <Link to={"signup/worker"} className="nav-link">
                  알바생  가입
                </Link>
                
              </li>

              
              <li className="nav-item">
                <Link to={"login"} className="nav-link">
                  Login 
                </Link>
              </li>

            


            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home/*" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup/manager" element={<Register />} />
            <Route path="signup/worker" element={<WorkerRegister />} />
            
            
            <Route path="chart" element={<Chart />} />
            {/*    */}

                  
            
        
        <Route path="/home/profile/editprofile" element={<EditProfile/>} />
      </Routes>



        </div>

        {/* <AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default App;
