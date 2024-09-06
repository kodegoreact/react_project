import React, {Component} from "react";


let name = "Raymart Rosali";


class SampleClassComponent extends Component{
    constructor(){
        super();
        this.state= {
            name: "Raymart"
        }
    }
    changeName = () => {
        this.setState({name: "Juan Dela Cruz"});
    }
    render(){
        return (
            <>
                <h1>Sample Class Component</h1>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName}>Change the Name</button>
                
            </>
        )
    }
}

export default SampleClassComponent;