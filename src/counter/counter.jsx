import React, { Component } from 'react';
import CounterOutput from '../counter-output/counterOutput';
import CounterAction from '../counter-actions/counter-action';
import { connect } from 'react-redux';


class Count extends Component {

    state = {
        counterValue: 0
    }


   

    render() {
        return(
            <div>
                <CounterOutput counterValue={this.props.counter}/>
                <CounterAction clicked={this.props.incrementCounter} title="increment"/>
                <CounterAction clicked={this.props.decrementCounter} title="decrement"/>  
                <CounterAction clicked={this.props.addByFive} title="Add 5"/>
                <CounterAction clicked={this.props.subtractbyFive} title="Sub 5"/> 
                <CounterAction clicked={this.props.takeSnapshot} title="Take Snap Shot"/>
                <CounterAction clicked={()=>{console.log(this.props.snapshots)}} title="Show Snap Shots"/>     
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        snapshots: state.snapshots
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: () => dispatch({type:'INCREMENT'}),
        decrementCounter: () => dispatch({type:'DECREMENT'}),
        addByFive: () => dispatch({type:'INCREMENT', value: 5}),
        subtractbyFive: () => dispatch({type:'DECREMENT', value:5}),
        takeSnapshot: () => dispatch({type:'TAKE_SNAPSHOT'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Count);