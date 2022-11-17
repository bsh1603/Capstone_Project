import React, { useState } from 'react';
import axios from 'axios';


const TeamMember = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    //axios.get() { }
    

    fetch("http://localhost:8080/api/members ")
  .then(function(response) {
    return response.text();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
  }
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {/* {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />} */}
    </div>
  );
};




export default TeamMember;