import React, { useState } from 'react'

export default function Perfumes() {
    const [prefumes, setPrefumes] = useState([])
  return (
    <div>
        <div id='prefumeList' className='flex flex-wrap gap-4'>
            {prefumes.map(prefume => 
                <>
                    <div id='prefumeContainer' className='w-1/5 rounded-xl border py-10 px-5'>
                        <div>{prefume?.perfumeName}</div>
                        <div>{prefume?.price}</div>
                        <div>{prefume?.description}</div>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}
