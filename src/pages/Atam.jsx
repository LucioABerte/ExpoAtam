import React from 'react'
import CEC from "../assets/CEC.png"
import CER from "../assets/CER.png"
import CEL from "../assets/CEL.png"
import CIC from "../assets/CIC.png"
import CIR from "../assets/CIR.png"
import CIL from "../assets/CIL.png"

export const Atam = () => {
  return (
    <div className='animate-fade-in'>
      <img src={CEC} alt='' className='mb-1'/>
      <img src={CER} alt='' className='mb-1'/>
      <img src={CEL} alt='' className='mb-1'/>
      <img src={CIL} alt='' className='mb-1'/>
      <img src={CIC} alt='' className='mb-1'/>
      <img src={CIR} alt='' className=''/>
    </div>
  )
}
