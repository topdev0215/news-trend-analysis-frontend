import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useAlert } from '../components/alertContext';

const MyAlert = () => {

    const { alertOpen, setAlertOpen, status, severity } = useAlert();

    const alertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertOpen(false);
    };

    return (
        <>
            <Snackbar
                open={alertOpen}
                autoHideDuration={5000}
                onClose={alertClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Positioning the Snackbar
            >
                <Alert
                    onClose={alertClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {status}
                </Alert>
            </Snackbar>
        </>
    )

}

export default MyAlert
