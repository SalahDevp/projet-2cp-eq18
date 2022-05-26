import React from 'react'
import Etoile from './etoile'
import et from '../components/nouveau-protype-component/et.png'

const Etoiles = ({num}) => {
  return (
    <div >
      {num===1? <Etoile img1={et} />:num===2? <Etoile img1={et} img2={et}  />:
       num===3? <Etoile img1={et} img2={et}  img3={et}  />:""}

    </div>
  )
}

export default Etoiles