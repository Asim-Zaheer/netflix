import React, { useEffect, useState } from 'react'
import img from "../img/bg.png"

function Navbar() {
    const [show , handleShow] = useState(false)
    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            handleShow(true)

        }else{
            handleShow(false)
        }
        return()=>{
            window.removeEventListener("scroll")
        }
      })
    },[])




  return (
    <>
    <div className={` nav ${show && "nav_black"}`}>

    
        <img className="nav_logo ms-3 pt-1" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="Netflix Logo" />
    
        <img className="nav_avt me-3 pt-1" src={img} alt="Netflix Logo" />
    
    </div>
    </>
  )
}

export default Navbar