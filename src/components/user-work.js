import React from "react";


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
      <h2>
        근무조회
      </h2>
        
    );
  }
}


