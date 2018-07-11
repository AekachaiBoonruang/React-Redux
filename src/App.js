import React, { Component } from 'react';
import TodoComponent from './components/TodoComponent';
import ShowList from './components/ShowlistComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoComponent />
        <ShowList />
      </div>
    );
  }
}

export default App;
