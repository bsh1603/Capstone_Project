import React, { Component } from 'react';
import axios from 'axios';
import authHeader from '../services/auth-header';

export default class TeamMember extends Component {
  //const [data, setData] = useState(null);
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
        

    this.state = {
      
      member_id : null,
      
      // loading: false,
      
    };
  }
  
  onClick (e) {
  const member_id = JSON.parse(localStorage.getItem("user")).id
  
  const id = JSON.stringify(member_id);
  
  axios.get(`/api/member/${id}`)
  
  .then(function(response) {
    console.log(response.data);
  })
  // .then(function(Json) {
  //   console.log(JSON.stringify(Json));
  // });
  }
  render(){
  return (
    <div>
      <div>
        <button onClick={this.onClick}>같은 팀 members 조회</button>
        
        {}
        
        
      </div>
      
    </div>
  );
};

}




