import React from 'react'
import Nav from 'components/Nav'
import {useState,useEffect } from 'react'
import CourA1 from './courpages-axiale/courA1'
import CourA2 from './courpages-axiale/courA2'
import CourA3 from './courpages-axiale/courA3'
import CourA4 from './courpages-axiale/courA4'
import CourA5 from './courpages-axiale/courA5'
import CourA6 from './courpages-axiale/courA6'
import CourA7 from './courpages-axiale/courA7'
import CourA8 from './courpages-axiale/courA8'
import CourA9 from './courpages-axiale/courA9'
import CourA10 from './courpages-axiale/courA10'
import CourA11 from './courpages-axiale/courA11'
import CourA12 from './courpages-axiale/courA12'
import CourA13 from './courpages-axiale/courA13'
import CourA14 from './courpages-axiale/courA14'
import CourA15 from './courpages-axiale/courA15'
import TBMA from "./courpages-axiale/TBMA"

const CourAxiale = () => {
    const [cpt, setCpt] = useState(0)
    const [boolean1,setBoolean1]=useState(false)
    const [boolean2,setBoolean2]=useState(true)
    const [mousse, setMousse]=useState(true)
    const tabA=[
    <TBMA />,
    <CourA1 />,<CourA2 />,
    <CourA3 />,
    <CourA4 />,
    <CourA5 />,<CourA6 />,
    <CourA7 />,
    <CourA8 />,<CourA9 />,
    <CourA10 />,<CourA11 />,
    <CourA12 />,<CourA13 />,
    <CourA14 />,<CourA15 />
  ]

const postab= tabA.length-1;
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
    <div className='bg-white h-screen'>
          <Nav  title="Cour"  pathAvant="/Menu-Cour"  />  

            <div className='pl-20 pr-20 pt-5'>
                      {tabA[cpt]}                    
                           <>
                          {boolean1 &&  mousse && <button className='absolute top-1/2 left-6 w-10 h-8' onClick={() =>{if(cpt>0){setCpt(cpt -1)}}}>&#9754;</button>}
                          {boolean2  && mousse && <button className='absolute top-1/2 right-6 w-10 h-8'  onClick={() =>  {if(cpt<16) setCpt(cpt + 1)}}>&#9755;</button>}
                          </>
                          {cpt>0 && <p className='absolute left-1/2 bottom-2'>{cpt}</p>}

              </div> 
    </div>
  )
}
export default CourAxiale