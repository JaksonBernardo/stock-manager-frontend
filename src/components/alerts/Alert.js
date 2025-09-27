import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const GeneralAlert = ({ type, text }) => {
    return (
        <div className="general-alert">
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity={type}>{text}</Alert>
            </Stack>
        </div>
    );
};

export default GeneralAlert;
