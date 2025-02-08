// // import React, { useState } from 'react'

// // export const State = () => {
// //     let[state,setState] = useState("abhi")
// //     console.log(setState);
// //     console.log(state);
// //     let demo = () =>{
// //         setState("rahul")
// //     }
// //   return (
// //    <>
// //   <h1>{state}</h1>
// //   <button onClick={demo}>Click me</button>
// //    </>
// //   )
// // }

// import React, { useState } from "react";
// import img1 from "../image/1.jpg";
// import img2 from "../image/2.jpg";
// const State=()=>{
//     let[img,setImg]=useState(img1)
//     let demo = () => {
//          setImg(img2)
//     }
//     return(
//         <div>
//             <img src={img} alt="" height={"300px"} width={"200px"}/>
//     <button onClick={demo}> click me</button>
//         </div>
//     )
  


// }
// export {State};



//  const State = () => {
//     let[state,useState]=useState(0);
//     let inc =() =>{
//         setState(state+1);
//     }
//     let reset =() =>{
//         setState(0);
//     }
//     let decrement =()=>{
//         setState(state-1);
//     }
//   return (
//     <div>
//         <h1>State</h1>
//         <button onClick={inc}>increment</button>
//         <button onClick={reset}>reset</button>
//         <button onClick={decrement}>decrement</button>
//     </div>
//   )
// }
// export default State;


import React, { useState } from 'react'

const State = () => {
  let[name,setName]= useState('')
  let[password , setPassword]=useState('')
  let demo=(e)=>{
    e.preventDefault()
    console.log({name,password});
    (name === "admin" && password ==="12345") ? window.open("https://www.pixabay.com")
: window.location.reload()    
  }
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"
        onChange={(e)=> {setName(e.target.value)}}/>

        <br/>
        <label htmlFor="password">password</label>
        <input type="password" name="password " id="password"
        onChange={(e)=> {setPassword(e.target.value)}}/>
        <br />
        <button onClick={demo}>submit</button>
      </form>
    
    </div>
  )
}

export default State