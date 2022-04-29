import React from 'react'
import {useState,useEffect } from 'react'
import { useTranslation } from "react-i18next";
import img1 from "../assets/cour/flecheD.png"
import img2 from "../assets/cour/flecheL.png"
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
import i18n from 'utils/translation/i18n';

const CourCentrale = () => {
   //trans
const { i18n } = useTranslation();
const  [fr,setFR]=useState(true)
const [hover,setHover]=useState(false)
useEffect(() => {
 if(i18n.language==="ar"){
   setFR(false)
     }
    
},[i18n.language]);

    const [cpt, setCpt] = useState(0)
    const [boolean1,setBoolean1]=useState(false)
    const [boolean2,setBoolean2]=useState(true)
    const [mousse, setMousse]=useState(true)
    const tab=[ <TBMC />,<Courp1 />,<Courp2 />,<Courp3 />,<Courp4 />,<Courp5 />,<Courp6 />
    ,<Courp7/>,<Courp8 />,<Courp9 />,<Courp10 />]

const postab= tab.length-1;
    useEffect(() => {
             if(mousse)  {
             setTimeout(() => {  setMousse(false) }, 7000);
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
             {/* <Nav  title="Cour"  pathAvant="/Menu-Cour"  />    */}
   
                  <div className='pl-20 pr-20 pt-5'>
                      {tab[cpt]}                    
                        {/* <>
                          {boolean1 &&  mousse && <button className='absolute top-1/2 left-6 w-10 h-8' onClick={() =>{if(cpt>0){setCpt(cpt -1)}}}>&#9754;</button>}
                          {boolean2  && mousse && <button className='absolute top-1/2 right-6 w-10 h-8' onClick={() =>  {if(cpt<14) setCpt(cpt + 1)}}>&#9755;</button>}
                       </> */}
                        {fr?
                        <>
                          {boolean1 &&  (mousse || hover)  && <img onMouseMove={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} id="flh" src={img2} className='absolute top-1/2 left-6 w-10 h-8' onClick={() =>{if(cpt>0){setCpt(cpt -1)}}} alt="not found"/>}
                          {boolean2  && ( mousse || hover) && <img onMouseMove={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} id="flh" src={img1}className='absolute top-1/2 right-6 w-10 h-8' onClick={() =>  {if(cpt<14) setCpt(cpt + 1)}} alt="not found" />}
                       </>
                       :
                       <>
                       { !(cpt===postab) && (mousse || hover) && <img onMouseMove={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} src={img2} className='absolute top-1/2 left-6 w-10 h-8' onClick={() =>{setCpt(cpt +1)}} alt="not found"/>}
                       {cpt>0 && (mousse || hover) && <img onMouseMove={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} src={img1}className='absolute top-1/2 right-6 w-10 h-8' onClick={() =>  {setCpt(cpt -1)}} alt="not found" />}
                       </>
                       }
                       
                      {cpt>0 && <p className='absolute left-1/2 bottom-2'>{cpt}</p>}
                   </div>
     </div>
  )
  
}

export default CourCentrale