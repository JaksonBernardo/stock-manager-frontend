import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const InputText = (props) => {

    const [email, setEmail] = useState()

    return(
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '31vw' } }}
            noValidate
            autoComplete="off"
            >
            <TextField id="email-login" type="email" label="Email" variant="outlined" onChange={(e) => props.onChange(e.target.value)} />
        </Box>
    )

}

export default InputText;
