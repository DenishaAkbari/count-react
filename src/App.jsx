import React, { useState } from 'react'
import Count  from './components/count/count'


function App() {
  
  const [count, setCount] = useState(0)

  const handleInc = () => {
        
    setCount (count + 1) 
    
}
const handleDsc = () => {
    
    if (count > 0) {
        setCount (count - 1)
    }
    
}

const resent = () => {
  setCount(0)
        alert('count is 0')
}


  return (
    <>
        <Count count={count} handleInc={handleInc} handleDsc={handleDsc} resent={resent}/>
        
    </>
  )
}

export default App
