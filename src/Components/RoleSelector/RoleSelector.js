import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

function RoleSelector() {
    return (
        <>
            <Container component='main' maxWidth='xs' sx={{ padding: '0' }}>
                <Paper
                    elevation={2}
                    sx={{
                        backgroundColor: 'lightgray',
                        pb: 7.5,
                        width: '95%',
                        margin: 'auto',
                        borderRadius: '10px',
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: 'center',
                            pt: 7.5,
                            mt: 25,
                            mb: 5,
                            fontSize: '22px',
                        }}
                    >
                        Select your role
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <Link
                            href='/Dashboard'
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: '#000',
                                fontSize: '18px',
                            }}
                        >
                            <img
                                src='placeHolder.png'
                                alt='placeholder'
                                width={75}
                                height={75}
                                style={{
                                    objectFit: 'cover',
                                    objectSize: '10%',
                                    backgroundColor: 'white',
                                    borderRadius: '15px',
                                    marginBottom: '15px',
                                }}
                            />
                            Donor
                        </Link>
                        <Link
                            href='/SignUp'
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: '#000',
                                fontSize: '18px',
                            }}
                        >
                            <img
                                src='placeHolder.png'
                                alt='placeholder'
                                href='/NGO'
                                width={75}
                                height={75}
                                style={{
                                    objectFit: 'cover',
                                    objectSize: '10%',
                                    backgroundColor: 'white',
                                    borderRadius: '15px',
                                    marginBottom: '15px',
                                }}
                            />
                            NGO
                        </Link>
                    </Box>
                </Paper>
            </Container>
        </>
    );
}

export default RoleSelector;
