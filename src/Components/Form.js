import React,{Component} from 'react';
class Form extends Component {
render(){
    return(
        <div>
            <form>
                <label>Name:</label>
                <input type="text" name='name' ></input>
            </form>
        </div>

    );
}
}
export default Form;