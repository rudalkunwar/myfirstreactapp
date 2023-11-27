import React,{Component} from "react";
class Number extends Component{
    constructor(props){
        super(props);
        this.props = props;

        this.state={
            name:"Rudal Kunwar",
            age:22
        }
    }
    // statechange(){
    //     this.setState({
    //         name:"Aakash",
    //         age:20
    //     })
    // }

    render(){
        return (
            <div>
                <i>
                    HI ! {this.state.name} and my age is {this.state.age}
                </i>
                <br/>
                {/* <button onClick={()=>this.statechange()}>Click</button> */}
            </div>
        );
    }
}
export default Number ;