import { createTheme } from "@mui/material";

const customMuiTheme = createTheme({
    palette: {
        primary: {
            main: '#9B274F',
        },
        secondary: {
            main: '#D57193',
        },
        success: {
            main: '#00C3A4',
        },
        error: {
            main: '#EA492B',
        },
        warning: {
            main: '#FB2',
        },
    },
});

export default customMuiTheme;

