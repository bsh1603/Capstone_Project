import React, { Component } from 'react';
import axios from 'axios';
import authHeader from '../services/auth-header';

import styled from "styled-components";

const Table=styled.table`
  
  
`;

export default class TeamMember extends Component {
  
  constructor(props) {
    super(props);
    //this.onClick = this.onClick.bind(this);
        

    this.state = {
      
      teammember:JSON.parse(localStorage.getItem("team_member"))           
      
    };
  }
  

  render(){
  return (
    <div>
      <div>
      <h3>팀 조회</h3>
      
        

        <Table>
        {this.state.teammember && 
        <table border="1" >
          {this.state.teammember.map(item => 
          <ul >
          {item.admin === "ROLE_WORKER" &&
          <li > {JSON.parse(localStorage.getItem("user")).admin === "ROLE_MANAGER" &&
          <button onClick={()=>{ // 팀에서 해당 멤버 삭제button
            const member_id = JSON.stringify(JSON.parse(localStorage.getItem("user")).id)          
            
            axios.post(`/api/member/${member_id}/delete`)
            
            .then(function(response) {

              console.log(response.data)
            
              
            })
            
            
          }}
          className='btn-danger'>추방</button>
          }
  
  
	<tr>
		<th><h5>이름</h5></th>
		<th><h5>이메일</h5></th>
    <th><h5>전화번호</h5></th>
	</tr>
	<tr>
		<td><h5> {item.name}</h5> </td>
		<td><h5> {item.email}</h5>   </td>
    <td><h5> {item.phone}</h5></td>
	</tr>

          
          </li> }</ul> )}
        </table>}
        </Table>

      </div>
      
      

    </div>


    );
  };

  

}


