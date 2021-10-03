import React from "react";
import "./Content.css";

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {

        return (
            <div id="content">
                {
                    Object.keys(this.props.items).map(key => {
                        return (
                            <div className = "content-block">
                                <div id = {key} className = "content-block-title">{key}</div>
                                <div className = "content-block-items">
                                    {
                                        this.props.items[key].map(value => {
                                            return(
                                                <div key = {value} className = "content-block-item">
                                                    <div className = "product">{value[0]}</div>
                                                    <div className = "cost">{String(value[1]).replace(".", ",") + " €"}</div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                    
                }
            </div>
        );
    }
}