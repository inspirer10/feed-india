import React, { useState } from 'react';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Dashboard() {
    const handleDetails = (e) => {
        e.preventDefault();
        const icons = document.querySelector('#detailElements');
        const text = document.querySelector('#viewText');
        icons.classList.toggle('toggleDetailElements');
        text.classList.toggle('toggleViewDetails');
    };
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        e.preventDefault();
        setValue(newValue);
    };

    return (
        <Container
            component='main'
            maxWidth='sm'
            sx={{ padding: '0 !important' }}
        >
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label='basic tabs example'
                    >
                        <Tab label='My Posts' {...a11yProps(0)} />
                        <Tab label='NGO Requests' {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Box
                        display='flex'
                        mt={1}
                        justifyContent='center'
                        sx={{
                            background: '#F2EFEF',
                        }}
                    >
                        <List
                            sx={{
                                p: 3,
                            }}
                        >
                            <ListItem>No of Donors</ListItem>
                            <ListItem>No of NGOs</ListItem>
                            <ListItem>No of volunteers</ListItem>
                            <ListItem>No of donations</ListItem>
                        </List>
                        <List
                            sx={{
                                p: 3,
                            }}
                        >
                            <ListItem>124</ListItem>
                            <ListItem>87</ListItem>
                            <ListItem>65</ListItem>
                            <ListItem>911</ListItem>
                        </List>
                    </Box>
                    <Paper
                        sx={{
                            border: '1px solid grey',
                            backgroundColor: 'white',
                            mb: 3,
                            mt: 3,
                            display: 'block',
                            width: 'inherit',
                            borderRadius: '8px',
                            textAlign: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '20px',
                                mt: 1,
                                mb: 1,
                                ml: 2,
                                color: 'gray',
                            }}
                        >
                            Do you have some food to donate?
                        </Typography>
                        <Box display='flex'>
                            <Button
                                href='/DonationDetailsRestaurant'
                                sx={{
                                    background: 'lightgray',
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        border: '1px solid gray',
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                    color: 'black',
                                    width: '35%',
                                    margin: 'auto',
                                    border: '1px solid transparent',
                                    mt: 1,
                                    mb: 2,
                                    p: 0.8,
                                    textTransform: 'none',
                                    borderRadius: '40px',
                                    fontSize: '19px',
                                    display: 'block',
                                }}
                            >
                                + Create Post
                            </Button>
                        </Box>
                    </Paper>
                    <Box display='flex' justifyContent='space-between' mb={1}>
                        <Typography fontSize={18}>Posts</Typography>
                        <Box display='flex' mt={0.3}>
                            <Link>
                                <Typography
                                    sx={{ color: 'black' }}
                                    marginRight={2}
                                >
                                    Sort
                                </Typography>
                            </Link>
                            <Link>
                                <Typography sx={{ color: 'black' }}>
                                    View All
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                    <Paper
                        elevation={2}
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Box p={2}>
                            <Box display='flex' justifyContent='space-between'>
                                <Typography fontSize={22} color='gray'>
                                    #12637
                                </Typography>
                                <Box
                                    display='none'
                                    mt={0.3}
                                    id='detailElements'
                                >
                                    <Link href='/DonationUpdate'>
                                        <Typography
                                            sx={{ color: 'black' }}
                                            mr={2}
                                        >
                                            edit
                                        </Typography>
                                    </Link>
                                    <Link>
                                        <Typography>
                                            <DeleteOutlineIcon
                                                sx={{ color: 'black' }}
                                            />
                                        </Typography>
                                    </Link>
                                </Box>
                                {/* SECOND ELEMENT */}
                                <Box
                                    mt={0.5}
                                    onClick={handleDetails}
                                    id='viewText'
                                >
                                    View Details
                                </Box>
                            </Box>
                            <Box display='flex' justifyContent='space-between'>
                                <Typography fontSize={14} color='lightgray'>
                                    1 hour ago
                                </Typography>
                                <Box display='flex' mt={0.3}>
                                    <Typography
                                        fontSize={14}
                                        marginRight={2}
                                        color='lightgray'
                                    >
                                        Pending
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper
                        elevation={2}
                        sx={{
                            width: '100%',
                            mt: 2,
                        }}
                    >
                        <Box p={2}>
                            <Box display='flex' justifyContent='space-between'>
                                <Typography fontSize={22} color='gray'>
                                    #11282
                                </Typography>
                                <Box display='flex' mt={0.3}>
                                    <Link>
                                        <Typography
                                            mr={2}
                                            sx={{ color: 'black' }}
                                        >
                                            edit
                                        </Typography>
                                    </Link>
                                    <Link>
                                        <Typography>
                                            <DeleteOutlineIcon
                                                sx={{ color: 'black' }}
                                            />
                                        </Typography>
                                    </Link>
                                </Box>
                            </Box>
                            <Box display='flex' justifyContent='space-between'>
                                <Typography fontSize={14} color='lightgray'>
                                    1 day ago
                                </Typography>
                                <Box display='flex' mt={0.3}>
                                    <Typography
                                        fontSize={14}
                                        marginRight={2}
                                        color='lightgray'
                                    >
                                        Completed
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper
                        elevation={2}
                        sx={{
                            width: '100%',
                            mt: 2,
                        }}
                    >
                        <Box p={2}>
                            <Box display='flex' justifyContent='space-between'>
                                <Typography fontSize={22} color='gray'>
                                    #9256
                                </Typography>
                                <Box display='flex' mt={0.3}>
                                    <Link>
                                        <Typography
                                            mr={2}
                                            sx={{ color: 'black' }}
                                        >
                                            edit
                                        </Typography>
                                    </Link>
                                    <Link>
                                        <Typography>
                                            <DeleteOutlineIcon
                                                sx={{ color: 'black' }}
                                            />
                                        </Typography>
                                    </Link>
                                </Box>
                            </Box>
                            <Box display='flex' justifyContent='space-between'>
                                <Typography fontSize={14} color='lightgray'>
                                    3 June 22
                                </Typography>
                                <Box display='flex' mt={0.3}>
                                    <Typography
                                        fontSize={14}
                                        marginRight={2}
                                        color='lightgray'
                                    >
                                        Pending
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box margin={1.5}>
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
                                One third of what we produce goes to waste. We
                                can stop this using a bit of imagination.
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
                                            <Typography
                                                sx={{ fontSize: '13px' }}
                                            >
                                                Need Ready to cook food
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Typography
                                        sx={{ fontSize: '12px', mt: 1 }}
                                    >
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
                                        sx={{
                                            fontSize: '12px',
                                            textAlign: 'center',
                                        }}
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
                                            <Typography
                                                sx={{ fontSize: '13px' }}
                                            >
                                                Need dry food
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Typography
                                        sx={{ fontSize: '12px', mt: 1 }}
                                    >
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
                                        sx={{
                                            fontSize: '12px',
                                            textAlign: 'center',
                                        }}
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
                                        style={{
                                            borderRadius: '15px 15px 0 0 ',
                                        }}
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
                                            <Typography
                                                sx={{ fontSize: '13px' }}
                                            >
                                                Placeholder
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Typography
                                        sx={{ fontSize: '12px', mt: 1 }}
                                    >
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
                                        sx={{
                                            fontSize: '12px',
                                            textAlign: 'center',
                                        }}
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
                                        style={{
                                            borderRadius: '15px 15px 0 0 ',
                                        }}
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
                                            <Typography
                                                sx={{ fontSize: '13px' }}
                                            >
                                                Placeholder
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Typography
                                        sx={{ fontSize: '12px', mt: 1 }}
                                    >
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
                                        sx={{
                                            fontSize: '12px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Placeholder
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </TabPanel>
            </Box>
            {/* <Box
                sx={{
                    pl: 4,
                    pr: 4,
                    width: '100%',
                    backgroundColor: 'lightgray',
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label='wrapped label tabs example'
                >
                    <Tab
                        value='one'
                        label='My Posts'
                        sx={{ color: 'black !important' }}
                    />
                    <Link href=''>
                        <Tab
                            value='two'
                            label='NGO Requests'
                            sx={{ color: 'black !important' }}
                        />
                    </Link>
                </Tabs>
            </Box> */}
        </Container>
    );
}
