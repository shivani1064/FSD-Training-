// import React from "react"
// import Child from "./Parent"
// class Parent extends React.Component{
//     state={
//         username:"abhi"
//     }
//     render()
//     {
//         return(
//         <>
//          <Child  name={this.state.username}/>
//         </>
//         )
//     }
// }
// export default Parent

//import React, { Children } from 'react'
//import Child from './Child'

//const Parent = () => {
 // return (
   //<>
//<Child>
 ////   <Children>am child component</Children> 
   //</Child>
   //</>
  //)
//}

//export default Parent
import React from 'react';
import Child from './Child';

const Parent = () => {
  return (
    <>
      <Child>
        <p>am child component</p> 
      </Child>
    </>
  );
};

export default Parent;

