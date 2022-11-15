import React from "react";
import axios from "axios";
import Form from "react-validation/build/form";
import TeamService from "../services/team.service";
import CheckButton from "react-validation/build/button";

export default class TeamMember  extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      team_name: "",
      members: ""
    };
  }
  

  handleChange = (e) => {
    this.setState({ team_name: e.target.checked });
    
  };

  retrieveMembers() {
    TeamService.getTeamMembers()
      .then(response => {
        this.setState({
          members: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  

  render() {
    return (
      <>
        <h2>TeamMember</h2>

        <Form>
        <div className="form-group">
                  <button onClick={this.retrieveMembers} className="btn btn-success">
                  회원조회
                  </button>
        </div>

            
          </Form>
        </>
    );
  }
}


