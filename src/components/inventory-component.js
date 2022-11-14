import React from "react";


export default class Inventory  extends React.Component {
  state = {
    team_name: ""
    
  };

  handleChange = (e) => {
    this.setState({ team_name: e.target.checked });
  };

  

  render() {
    return (
      <>
        <h2>Inventory</h2>
      </>
    );
  }
}
