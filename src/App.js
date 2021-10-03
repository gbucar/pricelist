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
      options: Object.keys(data),
      current: ""
    };
    this.setCurrent = this.setCurrent.bind(this)
  }

  setCurrent(title) {
    this.setState({
      current: title
    });
  }

  render() {
    return (
      <div id ="wrapper">
        <Navbar options = {this.state.options} setCurrent = {this.setCurrent}></Navbar>
        <Content items = {this.state.items} current = {this.state.current}></Content>

      </div>
    );
  }
}

export default App;
