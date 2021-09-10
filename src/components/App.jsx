import React, {Component} from "react";
import './App.css';
import DisplayName from "./DisplayName/DisplayName";
import NameList from "./NameList/NameList";
import AlertUser from "./AlertUser/AlertUser";

class App extends Component {
  constructor(props){
    super(props);
    this.person = [
      {firstName: 'Samuel', lastName: 'McKnight' },
    ];

    this.state={
      personalNumber:0,
    };
    
    this.listNames=[
      'Johnny Bravo' , 'Goku', 'Killua', 'Riley Freeman', 'Huey Freeman', 'Granddad'
    ]
  }
  AlertUser(){
    alert("devCodeCamp" );
  }

  render() {
    return(
        <div className="container-fluid">
          <DisplayName person={this.person[this.state.personalNumber]}/>
          <NameList names={this.listNames}/>
          <AlertUser alert={ ()=> this.AlertUser()} />
        </div>
      )
  }
}

export default App;