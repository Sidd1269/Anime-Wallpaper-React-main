import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
      <div className='py-10 flex gap-20 items-center bg-gradient-to-b from-stone-100 via-slate-300 to-gray-400'>

        <LeftContent /> 
        <RightContent />   
        
    </div>
  )
}

export default Page1Content