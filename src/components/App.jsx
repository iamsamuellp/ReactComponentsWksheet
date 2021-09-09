import React, {Component} from "react";
import './App.css';
import DisplayName from "./DisplayName/DisplayName";

class App extends Component {
  constructor(props){
    super(props);
    this.person = [
      {firstName: 'Samuel', lastName: 'McKnight' },
    ];
    this.state={
      personalNumber:0,
    };

  }

  render() {
    return(
        <div className="container-fluid">
          <DisplayName person={this.person[this.state.personalNumber]}/>
        </div>
      )
  }
}

export default App;