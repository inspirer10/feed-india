import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignUp() {
    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <Box
                    sx={{
                        mt: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component='h1' variant='h4'>
                        Sign up
                    </Typography>
                    <Box component='form' noValidate sx={{ mt: 6 }}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id='name'
                                label='Full Name'
                                name='name'
                                autoComplete='name'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name='password'
                                label='Mobile No'
                                type='password'
                                id='password'
                                autoComplete='new-password'
                                sx={{ mt: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id='email'
                                label='Email'
                                name='email'
                                autoComplete='email'
                                sx={{ mt: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name='password'
                                label='Password'
                                type='password'
                                id='password'
                                autoComplete='new-password'
                                sx={{ mt: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                multiline
                                rows='2'
                                name='Adress'
                                label='Adress'
                                type='Adress'
                                id='Adress'
                                autoComplete='Adress'
                                sx={{ mt: 2 }}
                            />
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete='zipCode'
                                    name='zipCode'
                                    required
                                    fullWidth
                                    id='zipCode'
                                    label='Zip Code'
                                    sx={{ mt: 2 }}
                                />
                            </Grid>

                            <Grid item textAlign='center' mt={4} ml={1.25}>
                                <Link
                                    href='#'
                                    sx={{
                                        display: 'flex',
                                        fontSize: '19px',
                                        color: 'black',
                                        textDecorationColor: 'black !important',
                                    }}
                                >
                                    <MyLocationIcon
                                        sx={{ color: 'gray', mr: 1.2 }}
                                    />
                                    Use my location
                                </Link>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete='city'
                                    name='city'
                                    required
                                    fullWidth
                                    id='city'
                                    label='City'
                                    sx={{ mt: 2 }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id='state'
                                    label='State'
                                    name='state'
                                    autoComplete='state'
                                    sx={{ mt: 2 }}
                                />
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id='aadharNo'
                                label='Aadhar No'
                                name='aadharNo'
                                autoComplete='aadharNo'
                                sx={{ mt: 2 }}
                            />
                        </Grid>

                        <Button
                            href='/NGO'
                            sx={{
                                textAlign: 'center',
                                background: 'lightgray',
                                color: 'black',
                                width: '50%',
                                margin: 'auto',
                                mt: 5,
                                mb: 1,
                                textTransform: 'none',
                                borderRadius: '40px',
                                fontSize: '18px',
                                display: 'block',
                                hoverColor: 'white',
                            }}
                        >
                            Sign up
                        </Button>
                        <Grid item xs={12} justifyContent='center'>
                            <Typography
                                component='h1'
                                variant='h6'
                                sx={{
                                    textAlign: 'center',
                                    fontSize: '13px',
                                }}
                            >
                                By Signingup, you agree with our terms &
                                conditions
                            </Typography>
                        </Grid>
                        <Grid container justifyContent='center' mt={2} mb={3}>
                            <Grid item>
                                <Link
                                    href='/LoginScreen'
                                    variant='body1'
                                    sx={{
                                        color: 'black',
                                        fontSize: '20px',
                                    }}
                                >
                                    Already a user? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
