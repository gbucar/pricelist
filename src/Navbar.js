import React from "react";



export default class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
    render() {
      return(
          <div id = "navbar">
              {
                  this.props.options.map(a => {
                    return (
                    <a className = "options" href = {"#"+a}>
                        <div>{a}</div>
                    </a>);
                  })
              }
          </div>
      );
    }
  }