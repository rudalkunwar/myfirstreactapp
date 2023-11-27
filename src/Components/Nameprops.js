import React,{Component} from "react";
class Namee extends Component{
    constructor(props){
        super(props);
        this.props=props;
    }
render(){
    return(
        <div>
            Hi my name is {this.props.name}.
        </div>
    );
}
}
export default Namee;