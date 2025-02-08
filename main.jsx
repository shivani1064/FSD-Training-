import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

// import State from './state/State'
// import Inline from './styles/Inline'
import Comp1 from './styles/Comp1.jsx'
import"../src/styles/globally.css"
import External from './styles/External.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 {/* <State/> */}
 {/* <Inline/> */}
 {/* <Comp1/> */}
 <External/>
  </StrictMode>,
)