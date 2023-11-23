import React , {Component} from "react";
import './navbar.css';
class Navbar extends Component{
    render(){
        return(
            <div>
                <nav>
                    <div className="logo">
                        <span>logo</span>
                    </div>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Services</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Navbar;