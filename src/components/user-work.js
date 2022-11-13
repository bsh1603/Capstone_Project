import React from "react";
import Toggle from "./Toggle.component";

export default class Work extends React.Component {
  state = {
    checked: true,
    size: "default"
  };

  handleChange = (e) => {
    this.setState({ checked: e.target.checked });
  };

  

  render() {
    return (
      <form>
        
      </form>
    );
  }
}


