import React from 'react'

const Div_click = (image1,image2) => {
  return (
    <div className='bg-marron flex flex-col'>
     <img className='h-12 w-12' src={image1} alt="" />
     <img className='h-12 w-12' src={image2} alt="" />
    </div>
  )
}

export default Div_click