"use client";


import { Box, Button, TextField } from "@mui/material";
import { IconEye, IconMail } from "@tabler/icons-react";
import { useState } from "react";

export default function login(){


    const [user,setUser]=useState({
email:"",
password:""
    
})
return(
    <>
    <Box
    component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' } }}
        noValidate
        autoComplete="off">
        <div className="login-container">
            <div className="login-box">
            
            <h2 >Log In</h2>
            <TextField
                id="email"
                label="Enter your E-mail Id"
               
                name="email"
                type="email"
                fullWidth
                
                InputProps={{
            endAdornment:<IconMail size={20} style={{marginRight:8}}/>
                }}
        />
        
        
        <br/><br/>
            <TextField
                required
                id="password"
                label="Enter your Password"
                name="password"
                type="password"
                fullWidth
                InputProps={{
            endAdornment:<IconEye size={20} style={{marginRight:8}}/>
                }}
                
        />
        <br/><br/>
        <div className="forgot">
        <a href="#" >Forgot Password?</a>
        </div>
        <br/>
        <Button className="btn" variant="contained" type="submit">Log In</Button>
        </div>
        </div>
    </Box>
    </>
)}

    
