import React, { Component } from 'react'

export class Cat extends Component {
    render() {

        return (
            <i className = {`fa-solid fa-cat fa-${this.props.size}x fa-flip-${this.props.direction}`}/>
        )
    }
}

export default Cat