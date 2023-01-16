import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';


const divStyle = {
    border: 'solid 1px grey',
    margin: '2rem',
    boxShadow: '5px 5px 10px 2px rgba(0,0,0,.8)'
}
const inputStyle = {
    margin: "1rem",
    width:"50%"

}
const buttonStyle = {
    margin:"1rem",
    backgroundColor:"#005f6a"
}
const itemStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

}

const Register = () => {

    
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };


  return (
    <Grid style={divStyle} container spacing={0}>
    <Grid  style={itemStyle} item xs={12}>
          <h2>Register</h2>
        </Grid>
        <Grid  style={itemStyle} item xs={12}>
            <TextField style={inputStyle} id="outlined-multiline-flexible" label="Username" multiline maxRows={4}/>
        </Grid>
        <Grid  style={itemStyle} item xs={12}>
            <TextField style={inputStyle} id="outlined-multiline-flexible" label="Email" multiline maxRows={4}/>
        </Grid>

        <Grid style={itemStyle} item xs={12}>
            <FormControl style={inputStyle} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
        </Grid>

        <Grid style={itemStyle} item xs={12}>
            <Button style={buttonStyle} variant="contained">Register</Button>
        </Grid>
</Grid>

  )
}

export default Register