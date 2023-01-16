import React from 'react'
import Grid from '@mui/material/Grid';
import welcomeImage from "../Assets/ecomhome.png";
import Button from '@mui/material/Button';




const imageStyle = {
    height: "100vh",
    width: "40vw",
}
const imageDiv = {
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
}
const welcomeDiv = {
    padding: "2rem",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    alignItems: "center"
    
}
const welcomeTitle = {
    fontFamily: `'Courier New', monospace`,
    color: "#005f6a"
}
const welcomeParagraph = {
    fontFamily: `'Courier New', monospace`
}
const getStartedButton = {
    backgroundColor: "#005f6a" ,
    padding: "15px 32px", 
    width: "50%",
   
}

const Welcome = () => {
  return (
    <div >
        <Grid container spacing={2}>
        <Grid item lg={6} md={8} >
            <div style={welcomeDiv}>
                 <h1 style={welcomeTitle} >Welcome To AVIRA E-Commerce</h1>
                 <Button href = "LoginRegister" style={getStartedButton} variant="contained">Get Started</Button>
                <p style={welcomeParagraph}>
                Thank you for visiting my online store. This ecommerce website has been designed and developed by me using the MERN stack (MongoDB, Express, React, and Node.js). Take a look around and you'll find a range of products available for purchase. I hope you enjoy your shopping experience and come back again soon! 
                </p>
            </div>
        </Grid>
        <Grid item lg={6} md={4} sx={{display: {xs:'none' ,sm:'none', md:'block'}}}>
            <div style={imageDiv}>
                <img alt='' style={imageStyle} className='welcomeImage' src={welcomeImage}/>
            </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Welcome