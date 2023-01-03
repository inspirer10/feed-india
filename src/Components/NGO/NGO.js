import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function NGO() {
    return (
        <Container component='main' maxWidth='xs' sx={{ padding: '0' }}>
            <CssBaseline />
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
                            mt: 3.5,
                            mb: 4,
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

                <Tabs
                    sx={{
                        mt: 2,
                        mb: 2,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Tab
                        label='Restaurants'
                        sx={{
                            border: '1px solid gray',
                            borderRadius: '50px',
                            textTransform: 'none',
                            p: '6px 8px',
                            letterSpacing: '0',
                        }}
                    />
                    <Tab
                        label='Home'
                        sx={{
                            border: '1px solid gray',
                            borderRadius: '50px',
                            textTransform: 'none',
                            p: '6px 8px',
                            letterSpacing: '0',
                        }}
                    />
                    <Tab
                        label='Events'
                        sx={{
                            border: '1px solid gray',
                            borderRadius: '50px',
                            textTransform: 'none',
                            p: '6px 8px',
                            letterSpacing: '0',
                        }}
                    />
                    <Tab
                        label='Other'
                        sx={{
                            border: '1px solid gray',
                            borderRadius: '50px',
                            textTransform: 'none',
                            p: '6px 8px',
                            letterSpacing: '0',
                        }}
                    />
                </Tabs>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '90%',
                    }}
                >
                    <Typography sx={{ fontWeight: 'bold' }}>
                        Available Food by restaurants
                    </Typography>
                    <Link
                        sx={{
                            color: 'black',
                            textDecorationColor: 'gray',
                            cursor: 'pointer',
                        }}
                    >
                        View All
                    </Link>
                </Box>
            </Box>
            {/* RESTAURANT CART nr.1 */}
            <Paper
                sx={{
                    border: '1px solid grey',
                    position: 'relative',
                    backgroundColor: 'white',
                    color: 'grey',
                    m: 'auto',
                    mt: 1,
                    mb: 2,
                    display: 'block',
                    width: '92.5%',
                    borderRadius: '15px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Link href='/DonationDetails'>
                        <img
                            width='100%'
                            style={{ borderRadius: '15px 15px 0 0 ' }}
                            src='food1.jpg'
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
                            href='/DonationDetails'
                            variant='h6'
                            sx={{
                                textDecoration: 'none',
                                color: '#000',
                                fontSize: '18px',
                            }}
                        >
                            Shreeman Restaurant
                        </Link>
                        <Typography sx={{ fontSize: '13px' }}>
                            Meal for 20 available
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 0.5, textAlign: 'center' }}>
                        <Typography
                            sx={{
                                fontSize: '13.5px',
                                display: 'flex',
                                alignItems: 'center',
                                mb: 0.5,
                            }}
                        >
                            <LocationOnIcon sx={{ color: 'black' }} /> 6 Kms
                        </Typography>
                        <Typography sx={{ fontSize: '12px' }}>
                            1 hour ago
                        </Typography>
                    </Box>
                </Box>
            </Paper>{' '}
            {/* RESTAURANT CART nr.2 */}
            <Paper
                sx={{
                    border: '1px solid grey',
                    position: 'relative',
                    backgroundColor: 'white',
                    color: 'grey',
                    m: 'auto',
                    mt: 2.5,
                    mb: 2.5,
                    display: 'block',
                    width: '92.5%',
                    borderRadius: '15px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        width='100%'
                        style={{ borderRadius: '15px 15px 0 0 ' }}
                        src='food2.jpg'
                        alt='Restaurant'
                    />
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
                            href='#'
                            variant='h6'
                            sx={{
                                textDecoration: 'none',
                                color: '#000',
                                fontSize: '18px',
                            }}
                        >
                            Dawat Executive
                        </Link>
                        <Typography sx={{ fontSize: '13px' }}>
                            Meal for 25 available
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 0.5, textAlign: 'center' }}>
                        <Typography
                            sx={{
                                fontSize: '13.5px',
                                display: 'flex',
                                alignItems: 'center',
                                mb: 0.5,
                            }}
                        >
                            <LocationOnIcon sx={{ color: 'black' }} /> 10 Kms
                        </Typography>
                        <Typography sx={{ fontSize: '12px' }}>
                            3 hour ago
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}

export default NGO;
