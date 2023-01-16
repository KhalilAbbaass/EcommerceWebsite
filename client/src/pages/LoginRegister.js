import React from 'react';
import Grid from '@mui/material/Grid';
import greenleaf from "../Assets/greenleaf.jpg";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Login from '../components/Login';
import Register from '../components/Register';

const pageStyle = {

}
const formDivStyle = {
    boxShadow: '5px 5px 10px 2px rgba(0,0,0,.8)',
    margin:"1rem",
    height:"80vh",
    backgroundColor:"white",
    borderRadius:"1rem",

    alignItems:"center",
    display:"flex",
    flexDirection:"column",
    


}
const picDivStyle = {
    height:"80vh",
    margin:"1rem",
    width:"34vw", 
    boxShadow: '5px 5px 10px 2px rgba(0,0,0,.8)'
}
const imageStyle = {
    height:"100%",
    width:"100%",
    
}
const toggleButton = {
    padding:"1rem",
    
}
const toggleButons = {
   
}




const LoginRegister = () => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  return (
    <div style={pageStyle}>
        <Grid container spacing={0}>
            <Grid item xs={4} sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>
                <div style={picDivStyle} >
                    <img style={imageStyle} src={greenleaf} alt = ''/>
                   
                </div>
               
            </Grid>
            <Grid item xs={12} md={8}>
                <div style={formDivStyle}>
                <ToggleButtonGroup style={toggleButton}
                    color = "primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    >
                    <ToggleButton style={toggleButons} value="Register">Register</ToggleButton>
                    <ToggleButton style={toggleButons} value="Login">Login</ToggleButton>
                    </ToggleButtonGroup>
                    {/* <Login/> */}
                    {/* <Register/> */}
                    {alignment === 'Login' ? <Login/> : <Register/>}
                </div>
                 
            </Grid>
        </Grid>
        
    </div>
  )
}

export default LoginRegister