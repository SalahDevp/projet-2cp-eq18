import React from 'react'

const Etoile = ({img1,img2,img3}) => {
  return (
    <div className='bg-vert z-50  absolute bottom-0 flex flex-row'>
       <img src={img1} alt="" />
       <img src={img2} alt="" />
       <img src={img3} alt="" />


    </div>
  )
}

export default Etoile