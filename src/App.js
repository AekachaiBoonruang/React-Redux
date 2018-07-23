import React, { Component } from 'react';
import Result from './contrainers/Result'
import './App.css';
import AppComponent from  './AppComponent';

class App extends Component {
    state = {
        color: 'red'
    };

    handleChange = () => {
      if (this.state.color === 'red'){
          this.setState({color: 'blue'})
      }
      else {
          this.setState({color: 'red'})
      }
    };

  render() {
    return (
      <div className="App">
        <Result />
        <AppComponent color={this.state.color} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
