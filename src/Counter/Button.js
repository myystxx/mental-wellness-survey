import React from 'react';

function Button(props) {
  return <div className="container">
      <button className="btn btn-lg btn-info" onClick={()=>props.incrementCount(Number(props.number))}> Increment + {props.number} </button>
  </div>
}

export default Button;
