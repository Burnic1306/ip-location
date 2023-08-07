import { AppBar, Button, Card, CardContent, Chip, TextField, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    width: 500,
    borderRadius: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    // paddingBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
    height: '40px',
    padding: theme.spacing(1, 2),
    background: '#19857b',
    '&:hover': {
        backgroundColor: '#19857b',
    },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    position: 'static',
    flexGrow: 1,
}));

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    background: '#19857b',
    justifyContent: 'center',
    display: 'flex',
}));

const StyledChip = styled(Chip)(({ theme }) => ({
    color: '#19857b',
    border: 'none',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#19857b',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#19857b', // Focus border color
    },
    '&:not(:hover) .MuiOutlinedInput-root': {
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            // Focused border color when the mouse is not over
            borderColor: '#19857b',
        },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#19857b',
    },
}));

export { StyledCard, StyledCardContent, StyledButton, StyledTextField, StyledToolBar, StyledAppBar, StyledChip }; 
