import React, {Component} from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import ChildComponent from './components/ChildComponent';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons:[
        {
          firstName: "Timmy",
          lastName: "John",
          age: 22,
          hairColor: "black"
        },
        {
          firstName: "Josh",
          lastName: "Joshman",
          age: 32,
          hairColor: "black"
        },
        {
          firstName: "Enrique",
          lastName: "idiot",
          age: 24,
          hairColor: "black"
        }
      ]
    }
    this.handleAgeClick = this.handleAgeClick.bind(this);
  }
  handleAgeClick(e, idx){
    e.preventDefault();
    this.setState(prevState => {
      console.log(idx);
      console.log(prevState.persons[idx]);
      return {
        age: prevState.persons[idx].age ++
      }
    })
  }
  render(){
    return (
      <div className="App">
        {
          this.state.persons.map((p, idx) => {
            return <PersonCard
              firstName={p.firstName}
              lastName={p.lastName}
              age = {p.age}
              hairColor= {p.hairColor}
              idx = {idx}
              key = {idx}
              handleClick = {this.handleAgeClick}
            />
          })
        }
        {/* <ChildComponent header={"Header Prop"}>
              <p>This is a child</p>
              <p>This is another child</p>
              <p>This is even another child</p>
        </ChildComponent> */}
      </div>
    );
  }
}

export default App;
