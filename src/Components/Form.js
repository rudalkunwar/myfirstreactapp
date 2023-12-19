import React,{Component} from 'react';
class Form extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     message:"",
        // }
    }
    // formhandeller = (event) =>{
    //     console.log("Oldddd",this.state);
    //     const message = event.target.value;
    //     this.setState({message},()=>console.log("Newwww",this.state));

    // }
render(){
    return(
        <div>
            <form>
                <label>Message:</label>
                <input type="text" name='name' onChange={this.formhandeller} ></input>
            </form>
        </div>

    );
}
}
export default Form;