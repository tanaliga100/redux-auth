import {connect} from "react-redux"
import React from 'react'
import classes from './Counter.module.css'

class Counter2 extends React.Component {


    incHandler () {
        this.props.increment()
    }
    decHandler () {
        this.props.increment()
    }
    toggleCounterHandler () {

    }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incHandler.bind(this)}>INC</button>
          <button onClick={this.decHandler.bind(this)}>DEC</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}
const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'INC'}),
        decrement: () => dispatch({type: 'DEC'}),
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Counter2)