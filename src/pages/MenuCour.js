import React from 'react'
import Nav from "components/Nav";
import { useNavigate } from "react-router-dom";
import Box from "components/menu-mode/Box";

const MenuCour = () => {
    const navigate = useNavigate();
    const handleCentralMode = () => {
       
        navigate("/cour-centrale");
      };
      const handleAxialeMode = () => {
      
        navigate("/cour-axiale");
      };
  return (
  <div>
    <Nav  title="Cour"  pathAvant="/menu"  />   
        <div className=''>
        

        <div
            className=" absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2 
        h-96 w-128 flex items-center justify-between "
        >
            <Box
            // image={}
            title="Centale"
            handleClick={handleCentralMode}
            />
            <Box
            //  image={}
            title="Axiale"
            handleClick={handleAxialeMode}
            />
        </div>
        </div>
    </div>
  )
}

export default MenuCour