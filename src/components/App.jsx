import React, {Component} from "react";
import './App.css';
import DisplayName from "./DisplayName/DisplayName";
import NameList from "./NameList/NameList";

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

  render() {
    return(
        <div className="container-fluid">
          <DisplayName person={this.person[this.state.personalNumber]}/>
          <NameList names={this.listNames}/>
        </div>
      )
  }
}

export default App;