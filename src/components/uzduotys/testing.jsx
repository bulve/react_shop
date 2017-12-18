import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count:10,
      colorState:false,
    } 
  }  
  buttonHandler = () => {
    this.setState({ count: this.state.count + 1})
    
  }
  chnageColorHandler = () =>{
    this.setState({
      colorState: !this.state.colorState
    })
  }

  count(){
    if(this.state.count === 0){
      this.setState({
        colorState: true
      })
      clearInterval(this.interval);
      return null;
    }
    this.setState({
      count: this.state.count - 1
    })
  }


  
  
  componentWillMount(){
    console.log('Component Will mount...');
  }

  componentDidMount(){
    this.interval = setInterval(
      () => this.count(), 1000)
    console.log('Component Did mount...')
  }

  componentWillUpdate(){
    console.log('COmponent will update...')
  }
  componentDidUpdate(){
    console.log('Component did update...')
  }

  
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
        <h2>{this.state.colorState}</h2>
          <SelfDestructTimerComponent red={this.state.colorState} />
          <h2>{this.state.count}</h2>
          <button onClick={this.buttonHandler} >Start counting...</button>
       </div>
      </div>
    );
  }
}


var style = {
  red:{
    backgroundColor:'red',
    width:'200px',
    height:'200px'
  },
  normal:{
    backgroundColor:'white',
    height:'200px',
    width:'200px'
  }
}

var SelfDestructTimerComponent = (props) => {
  if(!props.red){
  return (<div style={style.normal}></div>)
  }else{
    return (<div style={style.red}></div>)
  }
}


export default Appppppp;
