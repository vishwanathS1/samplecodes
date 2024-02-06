import React, { useState } from 'react';
import { Avatar, Button, Grid,Paper,TextField, Typography,Link, Input} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
// import React {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login=()=> {
    const paperStyle={padding:20,height:'70vh',width:280,margin:"20px auto"}
    const avatarstyle={backgroundColor:'Lightgreen'}
    const btnstyle={margin:'8px 0 '}
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        
            
        const navigateTo = useNavigate()
        const handleUsernameChange = (event) => {
            setUsername(event.target.value);
          };
          const handlePasswordChange = (event) => {
            setPassword(event.target.value);
          };
     const singinHandler=()=>{
    //    alert("welcome"+ " " + username)
        navigateTo(`/home/${username}`)
        

    }
    return(
        <Grid>
            <Paper className='homee' elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarstyle}><AdUnitsIcon/></Avatar>
                

            <h2>Sign In</h2>
                </Grid>
            <div>
            <TextField label='username' placeholder='Enter Username' value={username} onChange={handleUsernameChange}  fullWidth required/></div>
            <br></br>
            <div>
            <TextField label='Password' placeholder='Enter Password' type='password' value={password} onChange={handlePasswordChange} fullWidth required/>
            </div>
            <div>
            <FormControlLabel 
            control={
            <Checkbox
            name="checkedB"
            color="primary" 
            />
            } 
            label="Remeber me" />
            </div>
            <Button type='submit' color='primary' onClick={singinHandler} variant="contained" style={btnstyle} fullWidth>SIGN IN</Button>
            <Typography>
            <Link href="#">
                Forgot password
           </Link>
             </Typography>
             <Typography> Do you have an account ?
            <Link href="#">
                Sign up
           </Link>
             </Typography>
            </Paper>
            
        </Grid>
    )
}

export default Login;