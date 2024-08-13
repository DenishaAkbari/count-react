import React, { useState } from 'react'
import '../count/count.css'
const Count = ({count, handleInc, handleDsc , resent}) => {



    
    return (
        <div className='mainbox'>
            <p>
                {count}
            </p>
            <div className='btn'>
            <button type = "button" onClick={handleInc} >Increment</button>
            <button type = "button" onClick={handleDsc} >Decrement</button>
            <button type = "button" onClick={resent}>resent</button>
            </div>


        </div>
    )
}

export default Count