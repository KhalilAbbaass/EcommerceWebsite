import React from 'react';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const firstDiv = {
    padding: "4rem",
    fontSize: "20px"
   
}
const secondDiv = {
    padding: "4rem",
    
    
}
const locationIcon = {
    color:"red",
    fontSize:"30px"
}
const mobileIcon = {
    color:"#005f6a",
    fontSize:"30px"
}
const mailIcon = {
    color:"#4F1C89",
    fontSize:"30px",
   
}
const firstText = {
    width:"100%"
}
const messageText = {
    width:"100%"
    
}
const secondText = {
    width:"100%"
}

const ContactUs = () => {
  return (
    <div>
    <Grid container spacing={2}>
        <Grid item xs={12} md={6} sm={12} >
            <div style={firstDiv}>
             <h1>Contact Us</h1>
               <p><LocationOnIcon style={locationIcon}/> aytaroun , mainroad bo jhash</p>
               <p><PhoneIcon style={mobileIcon}/> +961670544</p>
               <p><EmailIcon style={mailIcon}/> Avira@gmail.com</p>
               
            </div>
        </Grid>

        <Grid item xs={12} md={6} sm={12} sx={{display: { xs: 'none', sm: 'none', md: 'block' }}} >
            
            <Grid container spacing={2} style={secondDiv}>
                <Grid item xs= {12}>
                     <h1>Email Us</h1> 
                </Grid>
                <Grid item xs= {12} md= {6}>
                   <TextField style={firstText} required id="outlined-required" label="" defaultValue="your name"/>  
                </Grid>
                <Grid item xs= {12} md= {6}>
                   <TextField style={secondText} required id="outlined-required" label="" defaultValue="your email"/>
                </Grid>
                <Grid item xs= {12}>
                    <TextField style={messageText} id="outlined-multiline-static"  label="" multiline rows={4} defaultValue="Write your message" />
                </Grid>
                <Grid style={{display:"flex", alignItems:"center", justifyContent:"center"}} item xs= {12}>
                    <Button style={{backgroundColor: "#005f6a"}} variant="contained">submit</Button>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactUs