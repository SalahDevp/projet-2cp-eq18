import React from 'react'
import Etoile from './etoile'
import etjaune from '../components/nouveau-protype-component/etjaune.png'
import etgris from '../components/nouveau-protype-component/etgris.png'

const Etoiles = ({num}) => {
  return (
    <div >
      { num===0? <Etoile img1={etgris } img2={etgris} img3={etgris} />
       :num===1? <Etoile img1={etjaune } img2={etgris} img3={etgris} />
       :num===2? <Etoile img1={etjaune} img2={etjaune} img3={etgris}  />
       :num===3? <Etoile img1={etjaune} img2={etjaune}  img3={etjaune}  />
       :""}

    </div>
  )
}

export default Etoiles