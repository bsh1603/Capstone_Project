import React, { Component } from 'react';
import axios from 'axios';
import authHeader from '../services/auth-header';
import moment from 'moment';
import 'moment/locale/ko';	//대한민국


class WorkTime extends Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd= this.handleEnd.bind(this);   

    this.state = {
      work_start_time : "",
      work_end_time : "",
      work_time:""     
    };
  }

  handleStart(e) {
    
    
    this.setState({work_start_time : Date.now()});
      
    return axios
      .post("/api/work/start", {work_start_time : Date.now()} )
      .then((res) => {
        
                // localStorage.setItem("user", JSON.stringify(res.data));
        console.log(res.data);
      })
      .catch((err) => {console.error(err)
        alert("실패");
      });}
    
  
  handleEnd(e) {
    
    
        this.setState({work_end_time : Date.now()});
          
        return axios
          .post("/api/work/end", {work_end_time : Date.now()}  )
          .then((res) => {
            
            
            localStorage.setItem("user", JSON.stringify(res.data));
            console.log(res.data);
          })
          .catch((err) => {console.error(err)
            alert("실패");
          });}
  


  render(){
    const { work_start_time } = this.state;
    const { work_end_time } = this.state;
    return(
    <div>
      <div>
        <label>근무시작</label>
        <button className="btn btn-success" onClick={this.handleStart}>work start
        </button>
        {work_start_time}
      </div>
    
      <div>

      <label>근무종료</label>
        <button className="btn btn-danger" onClick={this.handleEnd}>work end</button>
        {work_end_time}
      </div>


    </div>
  );
};
}



export default WorkTime;