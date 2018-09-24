import React, { Component} from 'react';
import { connect } from 'react-redux';
import {INCREMENT, DECREMENT} from './actions/types';

const Counter = (props) => {
  return(
    <div className="counter">
      <button onClick={props.increment}>increment</button>
      <button  onClick={props.decrement}>decrement</button>
      <div class="results">{props.count}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
  	count: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	increment: () => dispatch({type: INCREMENT}),
  	decrement: () => dispatch({type: DECREMENT})
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Counter)