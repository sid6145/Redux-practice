import React, { Component } from 'react'

class HelloWorld extends Component {

    render(props) {
        return (
            <div>
                <h1>Hello world {this.props.tech}</h1>
            </div>
        )
    }
}

export default HelloWorld
