import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import PlaceIcon from '@mui/icons-material/Place';
import InputAdornment from '@mui/material/InputAdornment';

export default function ActionAreaCard() {
    return (
        <Container
            maxWidth='sm'
            sx={{
                marginTop: 5,
                mb: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Paper
                sx={{
                    border: '1px solid grey',
                    backgroundColor: 'white',
                    mb: 3,
                    mt: 0,
                    display: 'block',
                    width: 'inherit',
                    borderRadius: '8px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '20px',
                        mt: 2,
                        mb: 0,
                        ml: 2,
                        textAlign: 'center',
                    }}
                >
                    <Link
                        href=''
                        sx={{
                            display: 'inline-block',
                            color: 'black',
                            mb: 2,
                            ml: 2,
                            textDecoration: 'none',
                            borderBottom: '1px solid grey',
                        }}
                    >
                        E - mart Supermarket
                    </Link>
                    <Typography display='inline-block' fontSize='20px' ml={1}>
                        reviewed your request
                    </Typography>
                    <Typography
                        sx={{
                            color: 'gray',
                            fontSize: '14px',
                            textAlign: 'center',
                            mb: 3,
                        }}
                    >
                        They have surplus dry food to donate you
                    </Typography>
                </Typography>
            </Paper>
            <Paper
                elevation={2}
                sx={{
                    width: '100%',
                }}
            >
                {/**DRUGA SEKCJA !!!! */}
                <Box margin={2}>
                    <Box item xs={12}>
                        <TextField
                            fullWidth
                            name='foodItems'
                            label=''
                            id='foodItems'
                            sx={{
                                mt: 2,
                                mb: 0,
                            }}
                            placeholder='Dry uncooked food'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        ></TextField>
                    </Box>
                    <Box item xs={12}>
                        <TextField
                            fullWidth
                            name='foodItems'
                            label='Food items'
                            id='foodItems'
                            sx={{
                                mt: 3,
                                mb: 3,
                            }}
                            multiline
                            rows='2'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder='Indrayani Rice 50 Kg
Lokawan Wheat 30 Kg'
                        ></TextField>
                    </Box>
                    <Box item xs={12}>
                        <TextField
                            fullWidth
                            name='foodItems'
                            label=''
                            id='foodItems'
                            sx={{
                                mt: 0,
                                mb: 3,
                                color: 'red',
                            }}
                            placeholder='Total 80 Kg'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        ></TextField>
                    </Box>

                    <Box item xs={12}>
                        <TextField
                            fullWidth
                            name='foodItems'
                            label=''
                            id='foodItems'
                            sx={{
                                mt: 0,
                                mb: 3,
                            }}
                            placeholder='Expiry 10th July 22'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        ></TextField>
                    </Box>

                    <Box item xs={12}>
                        <TextField
                            fullWidth
                            name='foodItems'
                            label=''
                            id='foodItems'
                            sx={{
                                mt: 0,
                                mb: 3,
                            }}
                            placeholder='Use before one month'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        ></TextField>
                    </Box>

                    <Box item xs={12}>
                        <TextField
                            fullWidth
                            color='secondary'
                            name='foodItems'
                            label=''
                            id='foodItems'
                            sx={{
                                mt: 0,
                                mb: 0,
                            }}
                            placeholder='33, Adodhayanagari, B. H. Road, muambai'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <PlaceIcon></PlaceIcon>
                                    </InputAdornment>
                                ),
                            }}
                        ></TextField>
                    </Box>
                    <Box item xs={12}>
                        <TextField
                            fullWidth
                            name='foodItems'
                            label=''
                            id='foodItems'
                            border-color='black'
                            sx={{
                                mt: 3,
                                mb: 0,
                            }}
                            placeholder='Pick up on 8th June 22'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='start'>
                                        <Typography sx={{ cursor: 'Pointer' }}>
                                            Any time in a day
                                        </Typography>
                                    </InputAdornment>
                                ),
                            }}
                        ></TextField>
                    </Box>

                    <Box display='flex'>
                        <Button
                            href=''
                            sx={{
                                textAlign: 'center',
                                background: 'white',
                                color: 'black',
                                width: '35%',
                                margin: 'auto',
                                mt: 5,
                                mb: 4,
                                p: 1.5,
                                textTransform: 'none',
                                border: '1px solid gray',
                                borderRadius: '40px',
                                fontSize: '18px',
                                display: 'block',
                            }}
                        >
                            Chat
                        </Button>
                        <Button
                            href='/ClaimFood'
                            sx={{
                                textAlign: 'center',
                                background: 'lightgray',
                                color: 'black',
                                width: '35%',
                                margin: 'auto',
                                mt: 5,
                                mb: 4,
                                p: 1.5,
                                textTransform: 'none',
                                borderRadius: '40px',
                                fontSize: '18px',
                                display: 'block',
                                border: '1px solid transparent',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    border: '1px solid gray',
                                },
                            }}
                        >
                            Confirm
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}
