import React,{Component} from "react";
class Number extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return (
            <div>
                <i>
                    {this.props.n}sdaas
                </i>
            </div>
        );
    }
}
export default Number ;