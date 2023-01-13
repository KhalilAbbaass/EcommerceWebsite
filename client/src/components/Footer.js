import React from 'react';
import StoreIcon from '@mui/icons-material/Store';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import CopyrightIcon from '@mui/icons-material/Copyright';



const footerStyle = {
    position:"relative" ,
    bottom:'0', 
    left:'0', 
    right:'0',
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: "#005f6a",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" 
}

const storeIconStyle = {
    fontSize: "50px"
}

const firstContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const secondContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const thirdContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const facebookButton = {
    backgroundColor:"#3b5998",
    color:"white",
    margin: "1rem",
    padding: "1rem",
    borderRadius:"50%"

}
const twitterButton = {
    backgroundColor:"#00acee",
    color:"white",
    margin: "1rem",
    padding: "1rem",
    borderRadius:"50%"
}
const instagramButton = {
    backgroundColor:"#8a3ab9",
    color:"white",
    margin: "1rem",
    padding: "1rem",
    borderRadius:"50%"
}
const linkedinButton = {
    backgroundColor:"#0072b1",
    color:"white",
    margin: "1rem",
    padding: "1rem",
    borderRadius:"50%"
}

const Footer = () => {
  return (
    <div style={footerStyle}>
        <div style={firstContainer}>
             <StoreIcon style={storeIconStyle}/>
              <h2>Avira</h2>  
        </div>

        <div style={secondContainer}>
            <Button  variant = "outlined" style={facebookButton}><FacebookIcon/></Button>
            <Button variant = "outlined" style={twitterButton}><TwitterIcon/></Button>
            <Button variant = "outlined" style={instagramButton}><InstagramIcon/></Button>
            <Button variant = "outlined" style={linkedinButton}><LinkedInIcon/></Button>
        </div>
        
        <div style={thirdContainer}>
            <CopyrightIcon/><p>2023 Avira. All right reserved. Avira recpects the rights of all developers and copyright holders. Consequently, all works that appear on this website do so with the consent of the developers or the copyright holders.</p>
        </div>
     
    </div>
  )
}

export default Footer