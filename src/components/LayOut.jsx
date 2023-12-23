import { Outlet } from "react-router-dom"
import Header from "./header"
import Footer from "./footer/footer"
import { useState } from "react"
import ModalForm from "../features/modal/modal"


export default function Layout(){
  const[click,setClick]=useState(false);

  function handleClick(){
    setClick(click=>!click)
  }
  
  function handleClose(){
    setClick(false);
  
  }
  return(
    <>
    <Header handleClick={handleClick}/>
    {click && <ModalForm handleClose={handleClose}/>}
     <Outlet/>
    <h5>whatsapp icon</h5>
    <Footer/>
    </>
  )
}