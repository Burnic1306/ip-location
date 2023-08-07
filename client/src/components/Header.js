import * as React from 'react';
import { Typography } from '@mui/material';
import { StyledAppBar, StyledToolBar } from './../style';

const Header = () => {
    return (
        <StyledAppBar>
            <StyledToolBar variant="dense" >
                <Typography variant="h6" color="inherit" component="div" >
                    IP Locator
                </Typography>
            </StyledToolBar>
        </StyledAppBar>
    );
};

export default Header; 