import React, { Component } from 'react'
import Header from './BootStrap/Header';

class App extends Component {
  render() {
    return (
      <div className = "App">
        {/* <Header>MoneyAlloc</Header> */}
        <Header dark={true} headerClassName='justify-content-center'>MoneyAlloc</Header>
      </div>
    )
  }
}

export default App;