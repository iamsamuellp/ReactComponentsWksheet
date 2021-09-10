import React from "react";

const NameList = (props)=>{
  return (
    <React.Fragment>
      <h3> Favorite Characters </h3>
      <hr/>
            <ul className='list'>
                {props.names.map((name)=>{
                    return <li> {name} </li>
                })}
            </ul>
    </React.Fragment>
  )
}
export default NameList;