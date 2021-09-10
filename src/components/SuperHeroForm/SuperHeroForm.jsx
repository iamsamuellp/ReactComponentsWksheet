import React,{Component} from "react";

class SuperHeroForm extends Component{
  constructor (props){
      super(props);
      this.state = {
          name: "",
          primaryAbility: "",
          secondaryAbility: "",
      }
  }

  handleChange= (event) => {
      this.setState ({
          [event.target.name]: event.target.value,
      });
 }

 handleSubmit = (event) => {
     event.preventDefault();
     this.props.mySuperHeroes(this.state);
 }


 render() { 
     debugger
     return ( 
         <form onSubmit= {this.handleSubmit}>
             <label>SuperHero Name</label>
             <input name="name" onChange={this.handleChange} value={this.state.name}/>
             <label>Primary Ability</label>
             <input name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility}/>
             <label>Secondary Ability</label>
             <input name="secondaryAbility" onChange={this.handleChange} value={this.state.secondaryAbility}/>
             <button type="submit">Input Superhero</button>
         </form>
      );
 }
}

export default SuperHeroForm;