import React from "react";


const DisplayName= (props)=> {
  return(
    <div className='displayName'  > 
      <div className='fullName' >
        <h1 className='firstName'> {props.person.firstname} </h1>
        <h1 className='lastName'> {props.person.firstname} </h1>
      </div>
    </div>
    )
}

export default DisplayName