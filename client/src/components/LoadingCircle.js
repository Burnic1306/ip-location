import Backdrop from "@mui/material/Backdrop";
import CircularProgress from '@mui/material/CircularProgress';

function LoadingCircle() {
    return (
        <Backdrop open={true} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}

export default LoadingCircle; 