import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function LoginScreen() {
    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                    }}
                >
                    <Typography
                        component='h1'
                        variant='h4'
                        sx={{
                            display: 'flex',
                            width: '100%',
                        }}
                    >
                        Welcome
                        <br /> back!
                    </Typography>
                    <Typography
                        component='p'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            width: '100%',
                            mb: 1,
                        }}
                    >
                        Sign in to your account
                    </Typography>
                    <Box component='form' noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email'
                            name='email'
                            autoComplete='email'
                        />
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='start'>
                                        <Link
                                            href=''
                                            sx={{
                                                textDecoration: 'none',
                                                color: 'gray',
                                                borderBottom: '1px solid gray',
                                            }}
                                        >
                                            Forgot ?
                                        </Link>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Link
                            href=''
                            variant='body2'
                            sx={{
                                display: 'flex',
                                justifyContent: 'end',
                                alignItems: 'end',
                                color: 'black',
                                fontSize: '15px',
                                mt: 2,
                                ml: '50%',
                                width: '45%',
                                textDecoration: 'none',
                            }}
                        >
                            Sign in using mobile no
                        </Link>
                        <Button
                            href='/feed-india/NGO'
                            sx={{
                                background: 'lightgray',
                                color: 'black',
                                width: '50%',
                                margin: 'auto',
                                mt: 5,
                                mb: 5,
                                textTransform: 'none',
                                border: '1px solid transparent',
                                borderRadius: '40px',
                                fontSize: '18px',
                                display: 'block',
                                textAlign: 'center',
                                '&:hover': {
                                    border: '1px solid gray',
                                },
                            }}
                        >
                            Sign In
                        </Button>
                        <Link
                            href='/RoleSelector'
                            variant='body2'
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'black',
                                fontSize: '18px',
                                borderBottom: '2px solid gray',
                                width: '44%',
                                letterSpacing: '0.5px',
                                wordSpacing: '1.5px',
                                m: 'auto',
                                mt: 5,
                                textDecoration: 'none',
                            }}
                        >
                            New user? Sign up
                        </Link>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
