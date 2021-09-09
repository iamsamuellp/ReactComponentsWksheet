import React from "react";


const DisplayName = (props)=> {
  return(
    <div className='displayName'> 
      <div className='fullName' >
        <h1 className='firstName'> {props.person.firstName} </h1>
        <h1 className='lastName'> {props.person.lastName} </h1>
      </div>
    </div>
  )
}

export default DisplayName;