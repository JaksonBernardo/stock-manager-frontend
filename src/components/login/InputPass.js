import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const InputPassword = (props) => {

    return(
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '31vw' } }}
            noValidate
            autoComplete="off"
        >
            <TextField id="password-login" type="password" label="Senha" variant="outlined" onChange={(e) => props.onChange(e.target.value)} />
        </Box>            
    )

}

export default InputPassword;
