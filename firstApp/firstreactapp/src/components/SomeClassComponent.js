import React, { Component } from 'react';
class SomeClassComponent extends Component {
    render() {
        return (
        <div>
            <h1>{this.props.someText}</h1>
            </div>);
    }
}
export default SomeClassComponent;