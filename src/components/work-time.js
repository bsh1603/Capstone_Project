import React, { Component } from 'react';
import axios from 'axios';
import dayjs from "dayjs";
import { Chart } from './chart';




class WorkTime extends Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd= this.handleEnd.bind(this);   
    this.handleTime= this.handleTime.bind(this);   

    this.state = {
      work_start_time : undefined,
      work_end_time : undefined,
      work_today: undefined     
    };
  }

  handleStart(e) {
    
    
    this.setState({work_start_time : Date()});
    
    return axios
      .post("/api/work/start", {work_start_time : Date.now()} )
      .then((res) => {
        
        
        console.log(res.data);
      })
      .catch((err) => {console.error(err)
        alert("실패");
      });}
    
  
  handleEnd(e) {
    
    
        this.setState({work_end_time : Date()});
          
        return axios
          .post("/api/work/end", {work_end_time : Date.now()}  )
          .then((res) => {
            
            
            //localStorage.setItem("worktime", JSON.stringify(res.data));
            console.log(res.data);
          })
          .catch((err) => {console.error(err)
            //alert("실패");
          });}

    handleTime(e) {
    
    
        this.setState({work_today : this.work_end_time-this.work_start_time});
          
        axios
          .get("/api/work/today" )
          .then((res) => {
            
            
            //localStorage.setItem("todaywork", JSON.stringify(res.data));
            console.log(res.data);
          })
          .catch((err) => {console.error(err)
            //alert("실패");
          });}
  


  render(){
    const { work_start_time } = this.state;
    const { work_end_time } = this.state;
    const { work_today } = this.state;
    return(
    <div>
      <h3>근무</h3>
      <div>
        <label>근무시작</label>
        <button className="btn btn-success" onClick={this.handleStart}>work start
        </button>
        {work_start_time}
      
          

      <label>근무종료</label>
        <button className="btn btn-danger" onClick={this.handleEnd}>work end</button>
        {work_end_time}
      
        <label>오늘근무시간 </label>
        <button className="btn btn-primary" onClick={this.handleTime}>work time</button>
        {work_today}
      </div>

      <Chart></Chart>

    </div>
  );
};
}



export default WorkTime;