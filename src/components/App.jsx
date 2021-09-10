import React, {Component} from "react";
import './App.css';
import DisplayName from "./DisplayName/DisplayName";
import NameList from "./NameList/NameList";
import AlertUser from "./AlertUser/AlertUser";
import SuperHeroTable from "./SuperHeroTable/SuperHeroTable";
import SuperHeroForm from "./SuperHeroForm/SuperHeroForm";

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
    this.superheroes = [
      {
          superHeroId: 1,
          name: 'Static Shock',
          primaryAbility: 'Electromagnetism',
          secondaryAbility: 'Electrokinesis'
      },
      {
          superheroId: 2,
          name: 'Superman',
          primaryAbility: 'Super Strength',
          secondaryAbility: 'Empowered by Yellow Sun'
      },
      {
          superheroId: 3,
          name: 'Spiderman',
          primaryAbility: 'Spidey Sense',
          secondaryAbility: 'Websling'
      },
      {
          superheroId:4,
          name: 'Flash',
          primaryAbility: 'Super Speed',
          secondaryAbility: 'TimeTravel'
      }
  ];
  }
  mySuperHeroes=(supers)=>{
    this.superheroes.push(supers);
    this.setState({
      superOne:this.superheroes.length - 1
    })
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
        <SuperHeroTable superheroes={ this.superheroes}/>
        <SuperHeroForm mySuperHeroes={this.mySuperHeroes}/>
        </div>
      )
  }
}

export default App;