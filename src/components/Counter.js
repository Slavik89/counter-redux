import React from 'react'
import { increment, decrement } from '../actions/counterActions'
import { connect } from 'react-redux'

function Counter(props) {
  return (
    <p>
      Clicked: {props.value} times
        {' '}
        <button onClick={props.increment}>
          +
        </button>
        {' '}
        <button onClick={props.decrement}>
          -
        </button>
        {' '}        
      </p>
  )
}

const mapStateToProps = state => {
  return {
    value: state.value,
    increment: state.increment,
    decrement: state.decrement
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
