import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';


function GetCustomersWeight(props){
 return <span>{props.current - props.weight}</span>
}

function LoseAPound(props){
  return <span>{props.current * 3500}</span>
}

function GetTimeToLose(props){
  return <span>{7/((500 * 7)/3500) * props.time}</span>
}
function GetTimeToLoseMax(props){
  return <span>{7/((1000 * 7)/3500) * props.time}</span>
}

function GetTimeToLoseMonth(props){
  return <span>{Math.floor((7/((500 * 7)/3500) * props.time)/7)}</span>
}
function GetTimeToLoseMaxMonth(props){
  return <span>{Math.floor(  (  (7/((1000 * 7)/3500) * props.time)/7 ))}</span>
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      weight: '10',
      current: '190',
      goal: ''
    };

    this.getWeight = this.getWeight.bind(this);
    this.getCurrent = this.getCurrent.bind(this);


    
  }




  getWeight(e){
    this.setState({
      weight: e.target.value
    })
  }

  getCurrent(e){
    
    this.setState({
      current: e.target.value
    })
  }



  render() {
    return (
      <React.Fragment>
          <div>
            <h1>ReactJS Weight ProtoType</h1>
            <hr />
            <label>Current Weight: </label><br />
              <input type = "range" value = {this.state.current} max = "500" onChange = {this.getCurrent} />
              <br />
            <label>Weight To Lose: </label><br />
              <input type = "range" value = {this.state.weight} onChange = {this.getWeight} max = "500"/>
            
          </div>
          
          <div>
          <ul>
            <li><b>Current Weight: </b>{this.state.current} lbs</li>
            <li><b>Amount To Lose: </b>{this.state.weight} lbs</li>
          </ul>
          <p>You current goal would be to lose is <b>{this.state.weight} lbs.</b></p>    
          <p>That would put you current goal weight to be <b><GetCustomersWeight current = {this.state.current} weight = {this.state.weight} /> lbs.</b> </p> 
          <p>It takes around 3500 calories to lose 1 pound.  That would mean you would need to lose <b><LoseAPound current = {this.state.weight} /></b> calories to reach your goal.</p>
             <p>Cutting <b>500</b> calories a day it would take around <b><GetTimeToLose time = {this.state.weight} /> days</b> or <b><GetTimeToLoseMonth time = {this.state.weight} /> weeks</b> to hit your goal.</p>  
            <p>Cutting <b>1000</b> calories a day it would take around <b><GetTimeToLoseMax time = {this.state.weight} /> days</b> or <b><GetTimeToLoseMaxMonth time = {this.state.weight} /> weeks</b> to hit your goal.</p>
          <p>This will present the healthiest choice to losing weight.</p>
          </div>
  </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
