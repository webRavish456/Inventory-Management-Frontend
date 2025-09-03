"use client"
import{useState} from "react";
import TextField from '@mui/material/TextField'; 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IconLock, IconMail} from "@tabler/icons-react";

 export default function logfunc(){
   const [enter,setenter]=useState({
    email:"",
    Password:"",
   })
//    handleSubmit =()=>{
   
//    }
   const handleChange=(e)=>{
    setenter({...enter,[e.target.name]:e.target.value});
   }
    return(
        <>
        <center>
       <Box 
       className="box"
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
      noValidate
      autoComplete="off"
    >
       <center> <p id="bold"><b>Log In</b></p></center><br></br>
        <div>
      <TextField 
      required 
       id="email" name="email" label="Enter Email id" variant="standard"
        type="Email" onChange={handleChange}
        InputProps={{endAdornment:<IconMail size={20} style={{marginRight:"8"}}/>
       }}/><br></br><br></br>
      <TextField 
      required
       id="password" name="password" label="Enter Password" variant="standard" 
       type="password" onChange={handleChange}
        InputProps={{endAdornment:<IconLock size={20} style={{marginRight:"8",position:"right"}}/>
       }} /><br></br><br></br>
       </div>
     <div id="forgot">
        <a href="#"> forgot Password?</a>
     </div>
     <Button required id="button" variant="contained" disableElevation>
      Log In
    </Button>
    </Box></center>
    
    </>
    );
 }
