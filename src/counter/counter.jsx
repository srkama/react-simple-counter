import React, { Component } from 'react';
import CounterOutput from '../counter-output/counterOutput';
import CounterAction from '../counter-actions/counter-action';
import { connect } from 'react-redux';


class Count extends Component {

    state = {
        counterValue: 0
    }

    incrementCounter = (incrementValue=1) =>{
        let newCounterValue = this.state.counterValue + incrementValue;
        this.setState({counterValue:newCounterValue})
    }
    decrementCounter = (decrementCounterValue=1) =>{
        let newCounterValue = this.state.counterValue - decrementCounterValue;
        this.setState({counterValue:newCounterValue})
    }
   

    render() {
        return(
            <div>
                <CounterOutput counterValue={this.props.counter}/>
                <CounterAction clicked={this.props.incrementCounter} title="increment"/>
                <CounterAction clicked={this.props.decrementCounter} title="decrement"/>  
                <CounterAction clicked={this.props.addByFive} title="Add 5"/>
                <CounterAction clicked={this.props.subtractbyFive} title="Sub 5"/>       
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: () => dispatch({type:'INCREMENT'}),
        decrementCounter: () => dispatch({type:'DECREMENT'}),
        addByFive: () => dispatch({type:'INCREMENT', value: 5}),
        subtractbyFive: () => dispatch({type:'DECREMENT', value:5}),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Count);