import { Component } from "react";

class Form extends Component{

    state = {
        firstname: "",
        lastname: "",
    };

    handleChange = (event) => {
        this.setState({
            firstname: event.target.value,
        })
        // console.log(this.state.firstname)
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value,
        })
        //  console.log(this.state.lastname)
    }

    handleSubmit = (event) => {
        event.preventDefault()
       console.log(this.state)
    }
    
    render(){
        return(<div>Form
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" value={this.state.firstname} placeholder="firstname"></input>

                <input onChange={this.handleLastNameChange} type="text" value={this.state.lastname} placeholder="lastname"></input>

                <button>Submit</button>
            </form>
        </div>)
    }
}

export default Form;