import React, { useState } from 'react';
import axios from 'axios';
import authHeader from '../services/auth-header';

const API_URL = "http://localhost:8080/";
const WorkTime = () => {
  //const [data, setData] = useState(null);
  
  const onStart = async () => {
    
    const work_start_time = Date.now();
    
    fetch("/api/work/start",  
    {method: 'POST', work_start_time: {work_start_time}})
    .then(function(response) {
    return response.text();
    })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    });
}
  const onEnd = async () => {
        
  const work_end_time = Date.now();
  console.log(work_end_time);
  fetch("/api/work/start",
  {method: 'POST', work_end_time: {work_end_time}})
  .then(function(response) {
    return response.text();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
  }

  


  return (
    <div>
      <div>
        <button className="btn btn-success" onClick={onStart}>work start</button>
      </div>

      <div>
        <button className="btn btn-danger" onClick={onEnd}>work end</button>
      </div>


    
      {/* {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />} */}
    </div>
  );
};




export default WorkTime;