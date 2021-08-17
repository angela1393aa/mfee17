import React, { Component } from 'react'

class CC extends Component {
  constructor() {
    super()
    this.state = { total: 1 }
    console.log('constructor')
  }

  componentDidMount() {
    const newTotal = +localStorage.getItem('total')
    this.setState({ total: newTotal })
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      'componentDidUpdate',
      'prevProps=',
      prevProps,
      'prevState=',
      prevState
    )
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default CC
