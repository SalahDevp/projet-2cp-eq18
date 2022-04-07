import React from 'react'
import {useState,useEffect } from 'react'
import Nav from 'components/Nav'
import Courp1 from './courpages-centrale/courp1'
import Courp2 from './courpages-centrale/courp2'
import Courp3 from './courpages-centrale/courp3'
import Courp4 from './courpages-centrale/courp4'
import Courp5 from './courpages-centrale/courp5'
import Courp6 from './courpages-centrale/courp6'
import Courp7 from './courpages-centrale/courp7'
import Courp8 from './courpages-centrale/courp8'
import Courp9 from './courpages-centrale/courp9'
import Courp10 from './courpages-centrale/courp10'
import TBMC from "./courpages-centrale/TABC"
const Cour = () => {
    const [cpt, setCpt] = useState(0)
    const [boolean1,setBoolean1]=useState(false)
    const [boolean2,setBoolean2]=useState(true)
    const [mousse, setMousse]=useState(true)
    const tab=[ <TBMC />,<Courp1 />,<Courp2 />,<Courp3 />,<Courp4 />,<Courp5 />,<Courp6 />
    ,<Courp7/>,<Courp8 />,<Courp9 />,<Courp10 />]

const postab= tab.length-1;
    useEffect(() => {
             if(mousse)  {
             setTimeout(() => {  setMousse(false) }, 5000);
             if(!(cpt===0)){setBoolean1(true)}
             else{
                setBoolean1(false)
             }
              if(postab===cpt){setBoolean2(false)}else{
                 setBoolean2(true)
              }
           
    } 
    },[mousse,cpt,postab])

    window.addEventListener('mousemove',()=>{
      setMousse(true)
    })   
  return (
      <div className='bg-white h-screen' > 
             <Nav  title="Cour"  pathAvant="/menu"  />   
   
                  <div className='pl-20 pr-20 pt-5'>
                      {tab[cpt]}                    
                     <div className=' absolute top-3 left-1/2
                      -translate-x-1/2 -translate-y-1/2  w-72'> 
                          {boolean1 &&  mousse && <button onClick={() =>{if(cpt>0){setCpt(cpt -1)}}}>&#9754;</button>}
                          {boolean2  && mousse && <button onClick={() =>  {if(cpt<14) setCpt(cpt + 1)}}>&#9755;</button>}
                      </div>  
                   </div>
     </div>
  )
}

export default Cour