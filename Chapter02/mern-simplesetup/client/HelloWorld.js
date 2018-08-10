import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class HelloWorld extends Component {
  render() {
    return (
        <div>
          <h1>Success!</h1>
          <h2>Success!</h2>
          <h3>Success!</h3>
          <h4>Success!</h4>
          <h5>Success!</h5>
          <h6>Success!</h6>
        </div>
      )
  }
}

export default hot(module)(HelloWorld)
