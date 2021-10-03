import React from "react";



export default class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(title) {
        this.props.setCurrent(title);
    }

    render() {
      return(
          <div id = "navbar">
              {
                  this.props.options.map(title => {
                    return (
                    <div className = "options" onClick={() => this.handleClick(title)}>
                        <div>{title}</div>
                    </div>);
                  })
              }
          </div>
      );
    }
  }