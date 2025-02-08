import React, { useRef } from 'react'

const Ref = () => {
    let demo=useRef()
    console.log(demo.current);
    demo.current
  return (
    <div>
    <h1 ref={demo}>hello-world</h1>
    </div>
  )
}

export default Ref