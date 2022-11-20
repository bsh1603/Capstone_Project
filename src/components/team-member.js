import React, { Component } from 'react';
import axios from 'axios';
import authHeader from '../services/auth-header';

export default class TeamMember extends Component {
  //const [data, setData] = useState(null);
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
        

    this.state = {
      
      teammember : undefined,            
      
    };
  }
  
  onClick (e) {
  const member_id = JSON.parse(localStorage.getItem("user")).id
  
  const id = JSON.stringify(member_id);
  
  axios.get(`/api/member/${id}`)
  
  .then(function(response) {
    console.log(typeof response.data);
    console.log(response.data)
    localStorage.setItem("team_member", JSON.stringify(response.data));
    
  })
  
  }
  render(){
  return (
    <div>
      <div>
        {/* <button onClick={this.onClick}>같은 팀 members 조회</button> */}
        <button className='btn-primary' onClick={()=>{
          const member_id = JSON.parse(localStorage.getItem("user")).id
  
          const id = JSON.stringify(member_id);
          
          axios.get(`/api/member/${id}`)
          
          .then(function(response) {
            console.log(typeof response.data);
            console.log(response.data)
            localStorage.setItem("team_member", JSON.stringify(response.data));
            
          })
          this.setState({teammember:JSON.parse(localStorage.getItem("team_member"))}) 
          console.log('local storage',JSON.parse(localStorage.getItem("team_member")))
        }}>팀원 조회하기</button> 
        {this.state.teammember &&
        <ul>
          {this.state.teammember.map(item => 
          
          <li> <button onClick={()=>{ //추방
            const member_id = JSON.parse(localStorage.getItem("user")).id
  
            const id = JSON.stringify(member_id);
          
            
            axios.post(`/api/member/${id}`)
            
            .then(function(response) {
              console.log(typeof response.data);
              console.log(response.data)
              // localStorage.setItem("team_member", JSON.stringify(response.data));
              
            })
            //this.setState({teammember:JSON.parse(localStorage.getItem("team_member"))}) 
            //console.log('local storage',JSON.parse(localStorage.getItem("team_member")))
          }}
          className='btn-danger'>추방</button>
          
 

          <strong>이름</strong>  {item.name} 전화번호 {item.phone} email {item.email} 직책 {item.admin} 
          </li> )}
        </ul>}

      </div>
      
      

    </div>


    );
  };

  

}




