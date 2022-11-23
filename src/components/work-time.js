import React, { Component } from 'react';
import axios from 'axios';
import dayjs from "dayjs";
import { Chart } from './chart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function Chart2() {
  return <Doughnut data={data} />;
}

class WorkTime extends Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd= this.handleEnd.bind(this);   
    this.handleTime= this.handleTime.bind(this);   

    this.state = {
      work_start_time : undefined,
      work_end_time : undefined,
      work_today: undefined,
      start_cal : undefined,
      end_cal : undefined,
      total_second : undefined     
    };
  }
  
  handleStart(e) {
    
    
    this.setState({work_start_time : Date()});
    this.setState({start_cal : Date.now()});
    console.log(Date.now())
    console.log(this.state.work_start_time)
    console.log(this.state.work_start_time.split(" "))
    
    axios
      .post("/api/work/start", {work_start_time : Date.now()} )
      .then((res) => {
        
        
        console.log(res.data);
      })
      .catch((err) => {console.error(err)
        alert("실패");
      });}
    
  
  handleEnd(e) {
    
    
        this.setState({work_end_time : Date()});
        this.setState({end_cal : Date.now()});
        console.log(typeof Date())
        axios
          .post("/api/work/end", {work_end_time : Date.now()}  )
          .then((res) => {
            
            
            //localStorage.setItem("worktime", JSON.stringify(res.data));
            console.log(res.data);
          })
          .catch((err) => {console.error(err)
            //alert("실패");
          });}

    handleTime(e) {

        var a = this.state.end_cal - this.state.start_cal;
        
        var hour_a , minute_a, second_a;
        hour_a=0;
        minute_a=0;
        second_a = a/1000;
        while(second_a/3600 >=1){
          hour_a=hour_a+1;
          second_a=second_a-3600;
        }
        while(second_a/60 >=1){
          minute_a=minute_a+1;
          second_a=second_a-60;
        }
        var total_time;
        total_time = String(hour_a) + '시간 '+ String(minute_a) + '분 ' + String(second_a)+ '초';
        this.setState({work_today : total_time});
        this.setState({total_second : String(second_a)});  
        
        console.log(data.datasets[0].data[0])
        data.datasets[0].data[0]=2;
        data.datasets[0].data[1]=22;
        
        //이 버튼을 누르면 차트 뛰울거임

        axios
          .get("/api/work/today" )
          .then((res) => {
            
            
            //localStorage.setItem("todaywork", JSON.stringify(res.data));
            console.log(res.data);
          })
          .catch((err) => {console.error(err)
            //alert("실패");
          });
        
          
          return(<>일간 근무 <Pie data={data} /></>); 
        
        }
  
          


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
        
      <Chart data={data} />
      
    </div>
  );
};
}



export default WorkTime;