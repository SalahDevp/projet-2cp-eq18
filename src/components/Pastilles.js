import React from 'react'
import pastille from "../components/nouveau-protype-component/passtilles.png"

const Pastilles = ({MenuPr,Mcour}) => {
  return (
      <>               
     <img className={MenuPr?'w-96 h-pstmenu absolute top-5 left-1/4 -translate-x-1/2':
    Mcour? 'w-96 h-pstmenu absolute top-4 left-1/3 -translate-x-1/2': 'w-96 h-pstmode absolute top-5 left-1/3 -translate-x-1/2'} src={pastille} alt="" />
      </>
  )
}

export default Pastilles