import React from "react";
import styled from "styled-components";
function Styledcomponent (){
  const Sbtn = styled.button
  `
  background-color:${(props)=>props.bg};
  color:white;
  padding:20px 40px 20px 40px;
  border-radius:10px;
  box-shadow:0px 0px 5px 2px ;
//   transform: translateY(-50%);
  transform: translateX(50%);
  top:50%;

  `;
  const Sdiv = styled.div`
  width:400px;
  height :400px;
  background-color:lightblue;
  @media (max-width:600px)
  {
    width:40%;
  }
  `;
return(
    <div className="h-screen flex justify-center items-center bg-cyan-200">
        <h1>
           <Sdiv>
           <Sbtn>Click</Sbtn> 
           <Sbtn bg="orange">Blink</Sbtn>
           </Sdiv>
        </h1>
    </div>
);
}
export default Styledcomponent;