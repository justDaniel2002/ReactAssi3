import React, { useState } from 'react'

export default function Perfumes() {
    const [prefumes, setPrefumes] = useState([])
  return (
    <div>
        <div id='prefumeList'>
            {prefumes.map(prefume => 
                <>
                    <div id='prefumeContainer'></div>
                </>
            )}
        </div>
    </div>
  )
}
