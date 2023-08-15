import { Component } from "react";

class Counter extends Component{
    constructor() {
        super();
        this.state={
            counter: 0,
        };
    }
    
    // increment() {
    //     this.setState({
    //         counter: this.state.counter + 1,
    //     })
    // }

    increment = () => {
        this.setState({
               counter: this.state.counter + 1,
        })
    }
    
    decrement() {
        this.setState({
            counter: this.state.counter - 1,
        })
    }

    multiply(){
        this.setState({
            counter: this.state.counter * 2,
        })
    }
    render(){
        return (
            <div>
                <h3>Count value is: {this.state.counter}</h3>
                {/* <button onClick={() => this.increment()} >Increment</button> */}
                <button onClick={this.increment} >Increment</button>

                <button onClick={() => this.decrement()} >Decrement</button>
                <button onClick={() => this.multiply() }>Multiply</button>
            </div>
        )

    }
}

export default Counter;