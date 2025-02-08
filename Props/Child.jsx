// import React from "react";
// class Child extends React.Component{
//     reder()
//     {
//         return(
//             <>
//             <h1>My name is {this.props.name}</h1>
//             </>
//         )
//     }
// }
// export default Child

import React, { Children } from 'react'

const Child = (props) => {
  console.log(props);
  console.log(props.children);
  return (
    <>
    {props.children}
    </>
  )
}

export default Child;





