import { Component } from "react";

class ClassEvent extends Component{

    handleClick() {
        console.log('Class base event handling')
    }
    render (){
        return(
            <div>
                This is class base component
                <button onClick={this.handleClick}>Click here</button>
            </div>
        )
    }
}


export default ClassEvent;