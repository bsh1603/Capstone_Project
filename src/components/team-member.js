import React from "react";
import Toggle from "./Toggle.component";

export default class TeamMember  extends React.Component {
  state = {
    team_name: ""
    
  };

  handleChange = (e) => {
    this.setState({ team_name: e.target.checked });
  };

  

  render() {
    return (
      <>
        <h1> Team Name</h1>
      </>
    );
  }
}


