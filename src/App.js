import React from 'react';
import './App.css';
import Content from './Content';
import Navbar from './Navbar';
import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data,
      options: Object.keys(data)

    };
  }
  render() {
    return (
      <div id ="wrapper">
        <Navbar options = {this.state.options}></Navbar>
        <Content items = {this.state.items} ></Content>

      </div>
    );
  }
}

export default App;
