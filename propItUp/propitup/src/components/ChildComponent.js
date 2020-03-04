import React, { Component } from 'react';
class ChildComponent extends Component{
    render(){
        return(
            <div>
                <h1>
                    {this.props.header}
                </h1>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
export default ChildComponent;