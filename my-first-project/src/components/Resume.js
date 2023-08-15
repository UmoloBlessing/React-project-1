import {Component} from "react";

class Resume extends Component {
    
    render(){
        const { name } = this.props;
        return <h1>This is a Class component {name}</h1>
    }
}

export default Resume;