import React from "react";
export default function Welcome(props){
    return(
        <div className="h-screen bg-cyan-200 flex justify-center items-center">
          <div>
            <p>Thank you Mr.{props.name} for joining us.</p>
            <p>Email verification is sent to {props.email}</p>
          </div>
        </div>
    );
}