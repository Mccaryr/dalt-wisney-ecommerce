import React from 'react'
import UnderConstructionLogo from '../../assets/under_construction.png'

const UnderConstruction = () => {
  return (
    <div style={{display:'flex', alignContent:'center', justifyContent:'center'}}>
        <img src={UnderConstructionLogo} alt="page under construction"/>
    </div>
  )
}

export default UnderConstruction