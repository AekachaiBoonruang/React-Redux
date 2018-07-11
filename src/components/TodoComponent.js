import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <p> Todo list</p>
        <div>
          <form>
          <label>
            Username
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    );
  }
}

export default App;
