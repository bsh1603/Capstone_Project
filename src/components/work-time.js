import React from "react";
import axios from "axios";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
export default class WorkTime extends React.Component {
  state = {
    checked: false,
    size: "default"
  };

  handleChange = (e) => {
    this.setState({ checked: e.target.checked });
    this.form.validateAll();
    axios
      .get("http://localhost:8080/api/work/today", this.state)
      .then((res) => {
        this.setState({})
        
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  
  };

  

  render() {
    return (
      <>
      근무조회

      <Form
            onSubmit={this.handleChange}
            ref={(c) => {
              this.form = c;
            }}
          >
      <div className="form-group">
              <button
                className="btn btn-primary " 
                type="submit"               
              >
                
                <span>조회</span>
              </button>
            </div>

      </Form>

      <div className='navbar'>
      <li className="nav-item" >
            날짜
        </li>
        <li className="nav-item" >
            시작
        </li>

        
        <li className="nav-item" >
            종료
        </li>

        
        <li className="nav-item" >
            근무시간
        </li>
      </div>

      </>
      
      
        
    );
  }
}


