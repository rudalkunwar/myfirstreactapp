import React from "react";
import FooterCss from './Footer.module.css';

function Footer(){
    return(
        <div className={FooterCss.footer}>
            <ul>
                <li><a>Links</a></li>
                <li><a>Facebook</a></li>
                <li><a>Linkedin</a></li>
                <li><a>X</a></li>
            </ul>
        </div>
    );
}
export default Footer;