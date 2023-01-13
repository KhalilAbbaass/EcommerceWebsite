import React from 'react';
import Button from '@mui/material/Button';
import AllImage from '../Assets/greenpic.jpg'

const divStyle = {
    height: "70vh",
    backgroundImage: `url(${AllImage})`,
    backgroundSize:"contain",
    backgroundRepeat: "no-repeat",
    padding: "15px 32px"
}
const allButton = {
    backgroundColor: "#005f6a" ,
    padding: "15px 32px", 
    width: "50%",
    top: "200px",
    left: "25%",
    fontSize: "25px",
    borderRadious: "15px",
    cursor: "pointer",
    border: "1px solid #005f6a",
    

}

const All = () => {
  return (
    <div style={divStyle}>
    <Button style={allButton} variant="contained">Shop now</Button>
    </div>
  )
}

export default All