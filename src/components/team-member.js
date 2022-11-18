import React, { useState } from 'react';
import axios from 'axios';
import authHeader from '../services/auth-header';

const TeamMember = () => {
  //const [data, setData] = useState(null);
  const onClick = async () => {
    

  fetch("/api/members", 
  {mode: 'cors',  credentials: 'include'})
  .then(function(response) {
    console.log(response);
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
  }
  return (
    <div>
      <div>
        <button onClick={onClick}>all members 불러오기</button>
        
      </div>
      
    </div>
  );
};




export default TeamMember;