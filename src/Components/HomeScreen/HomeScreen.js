import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function LoginScreen() {
    return (
        <Container component='main' maxWidth='sm' sx={{ padding: '0' }}>
            <CssBaseline />
            <Box margin={2}>
                <TextField
                    fullWidth
                    id='outlined-basic'
                    label=''
                    placeholder='Search'
                    variant='outlined'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='start'>
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: '#F1F1F1',
                        m: 'auto',
                        p: 0.75,
                    }}
                >
                    <Typography
                        component='h1'
                        variant='h6'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                            mb: 1,
                            mt: 4,
                        }}
                    >
                        Together We Can End Waste
                    </Typography>
                    <Typography
                        component='p'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '85%',
                            m: 'auto',
                            mb: 1,
                            fontSize: '13.5px',
                            textAlign: 'center',
                        }}
                    >
                        One third of what we produce goes to waste. We can stop
                        this using a bit of imagination.
                    </Typography>
                    <Button
                        fullWidth
                        sx={{
                            background: '#CDCDCD',
                            color: 'black',
                            width: '45%',
                            m: 'auto',
                            mt: 5,
                            mb: 5,
                            textTransform: 'none',
                            borderRadius: '40px',
                            fontSize: '15px',
                            display: 'block',
                            hoverColor: 'gray',
                        }}
                    >
                        Explore FeedIndia
                    </Button>
                </Box>

                <Typography
                    sx={{
                        mt: 3,
                        textAlign: 'left',
                        fontSize: '20px',
                        width: '90%',
                    }}
                >
                    Food Requests
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                }}
            >
                {/* RESTAURANT CART nr.1 */}
                <Paper
                    sx={{
                        border: '1px solid grey',
                        backgroundColor: 'white',
                        color: 'grey',
                        m: 'auto',
                        mt: 1,
                        mb: 3,
                        display: 'block',
                        width: '45%',
                        borderRadius: '15px',
                    }}
                >
                    <Link href='/DonationRequest'>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                height: '20vh',
                            }}
                        >
                            <img
                                width='100%'
                                style={{
                                    borderRadius: '15px 15px 0 0 ',
                                    objectFit: 'cover',
                                }}
                                src='food1.jpg'
                                alt='Restaurant'
                            />
                        </Box>
                    </Link>
                    <Box
                        sx={{
                            color: 'grey',
                            mt: 1,
                            mb: 1,
                            mr: 3,
                            ml: 2,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box>
                            <Link
                                href='/DonationRequest'
                                variant='h6'
                                sx={{
                                    textDecoration: 'none',
                                    color: '#000',
                                    fontSize: '18px',
                                    minHeight: 'calc(1.6*1.6rem)',
                                    lineHeight: '1.3rem',
                                    display: 'block',
                                }}
                            >
                                Sneha's Food Bank
                            </Link>
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                width='50%'
                            >
                                <Box>
                                    <Typography sx={{ fontSize: '13px' }}>
                                        Need Ready to cook food
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx={{ fontSize: '12px', mt: 1 }}>
                                Posted on 7th June
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                textAlign: 'center',
                                width: '20%',
                                mt: 5,
                            }}
                        >
                            <LocationOnIcon fontSize='small'></LocationOnIcon>
                            <Typography
                                sx={{ fontSize: '12px', textAlign: 'center' }}
                            >
                                6 Kms
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
                {/* RESTAURANT CART nr.2 */}
                <Paper
                    sx={{
                        border: '1px solid grey',
                        backgroundColor: 'white',
                        color: 'grey',
                        m: 'auto',
                        mt: 1,
                        mb: 3,
                        display: 'block',
                        width: '45%',
                        borderRadius: '15px',
                    }}
                >
                    <Link href=''>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                height: '20vh',
                            }}
                        >
                            <img
                                width='100%'
                                style={{
                                    borderRadius: '15px 15px 0 0 ',
                                    objectFit: 'cover',
                                }}
                                src='food2.jpg'
                                alt='Restaurant'
                            />
                        </Box>
                    </Link>
                    <Box
                        sx={{
                            color: 'grey',
                            mt: 1,
                            mb: 1,
                            mr: 3,
                            ml: 2,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box>
                            <Link
                                href=''
                                variant='h6'
                                sx={{
                                    textDecoration: 'none',
                                    color: '#000',
                                    fontSize: '18px',
                                    minHeight: 'calc(1.6*1.6rem)',
                                    lineHeight: '1.3rem',
                                    display: 'block',
                                }}
                            >
                                CRY Food Relief Foundation
                            </Link>
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                width='50%'
                            >
                                <Box>
                                    <Typography sx={{ fontSize: '13px' }}>
                                        Need dry food
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx={{ fontSize: '12px', mt: 1 }}>
                                Posted on 7th June
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                textAlign: 'center',
                                width: '30%',
                                mt: 5,
                            }}
                        >
                            <LocationOnIcon fontSize='small'></LocationOnIcon>
                            <Typography
                                sx={{ fontSize: '12px', textAlign: 'center' }}
                            >
                                12 Kms
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
                {/* RESTAURANT CART nr.3 */}
                <Paper
                    sx={{
                        border: '1px solid grey',
                        backgroundColor: 'white',
                        color: 'grey',
                        m: 'auto',
                        mt: 1,
                        mb: 3,
                        display: 'block',
                        width: '45%',
                        borderRadius: '15px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Link href=''>
                            <img
                                width='100%'
                                style={{ borderRadius: '15px 15px 0 0 ' }}
                                src='placeHolder.png'
                                alt='Restaurant'
                            />
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            color: 'grey',
                            mt: 1,
                            mb: 1,
                            mr: 3,
                            ml: 2,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box>
                            <Link
                                href=''
                                variant='h6'
                                sx={{
                                    textDecoration: 'none',
                                    color: '#000',
                                    fontSize: '18px',
                                    minHeight: 'calc(1.6*1.6rem)',
                                    lineHeight: '1.3rem',
                                    display: 'block',
                                }}
                            >
                                Placeholder
                            </Link>
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                width='50%'
                            >
                                <Box>
                                    <Typography sx={{ fontSize: '13px' }}>
                                        Placeholder
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx={{ fontSize: '12px', mt: 1 }}>
                                Placeholder
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                textAlign: 'center',
                                width: '30%',
                                mt: 5,
                            }}
                        >
                            <LocationOnIcon fontSize='small'></LocationOnIcon>
                            <Typography
                                sx={{ fontSize: '12px', textAlign: 'center' }}
                            >
                                Placeholder
                            </Typography>
                        </Box>
                    </Box>
                </Paper>{' '}
                {/* RESTAURANT CART nr.4 */}
                <Paper
                    sx={{
                        border: '1px solid grey',
                        backgroundColor: 'white',
                        color: 'grey',
                        m: 'auto',
                        mt: 1,
                        mb: 3,
                        display: 'block',
                        width: '45%',
                        borderRadius: '15px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Link href=''>
                            <img
                                width='100%'
                                style={{ borderRadius: '15px 15px 0 0 ' }}
                                src='placeHolder.png'
                                alt='Restaurant'
                            />
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            color: 'grey',
                            mt: 1,
                            mb: 1,
                            mr: 3,
                            ml: 2,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box>
                            <Link
                                href=''
                                variant='h6'
                                sx={{
                                    textDecoration: 'none',
                                    color: '#000',
                                    fontSize: '18px',
                                    minHeight: 'calc(1.6*1.6rem)',
                                    lineHeight: '1.3rem',
                                    display: 'block',
                                }}
                            >
                                Placeholder
                            </Link>
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                width='50%'
                            >
                                <Box>
                                    <Typography sx={{ fontSize: '13px' }}>
                                        Placeholder
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx={{ fontSize: '12px', mt: 1 }}>
                                Placeholder
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                textAlign: 'center',
                                width: '30%',
                                mt: 5,
                            }}
                        >
                            <LocationOnIcon fontSize='small'></LocationOnIcon>
                            <Typography
                                sx={{ fontSize: '12px', textAlign: 'center' }}
                            >
                                Placeholder
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}
