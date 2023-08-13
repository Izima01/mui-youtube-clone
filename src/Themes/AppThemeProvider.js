import { ThemeProvider } from '@emotion/react';
import { grey, pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: 400
        }
    },
    pallete: {
        primary: {
            main: grey[700]
        },
        secondary: {
            main: pink[500]
        }
    },
    components: {
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    background: 'transparent'
                },
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    backgroundColor: '#eee',
                    borderRadius: 30,
                    marginRight: '10px',
                    marginTop: '10px',
                    minHeight: '20px',
                    minWidth: '60px',
                    ':active': {
                        backgroundColor: 'black',
                        color: 'white'
                    },
                    ':focus': {
                        backgroundColor: 'black',
                        color: 'white'
                    },
                    ':selected': {
                        backgroundColor: 'black',
                        color: 'white'
                    },
                },
                indicator: {
                    backgroundColor: 'transparent'
                }
            }
        }
    }
});

const AppThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default AppThemeProvider;
