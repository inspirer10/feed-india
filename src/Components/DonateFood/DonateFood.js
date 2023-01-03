import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import dayjs from 'dayjs';
import Paper from '@mui/material/Paper';
import PlaceIcon from '@mui/icons-material/Place';
import AddIcon from '@mui/icons-material/Add';
import InputAdornment from '@mui/material/InputAdornment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function ActionAreaCard() {
    const [value, setValue] = React.useState(dayjs('2022-11-12T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
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
                    mt: 3,
                    display: 'flex',
                    width: 'inherit',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        m: 2,
                        width: '180px',
                        height: '150px',
                        overflow: 'hidden',
                        backgroundImage: 'url(food1.jpg)',
                        backgroundSize: 'cover',
                        borderRadius: '10px',
                    }}
                ></Box>
                <Typography
                    sx={{
                        color: 'grey',
                        mt: 2.5,
                        width: '50%',
                    }}
                >
                    <Link
                        href='#'
                        variant='h5'
                        sx={{ color: 'black', textDecoration: 'none' }}
                    >
                        CRY Food Foundation
                    </Link>
                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: '15px',
                        }}
                    >
                        Need dry food
                    </Typography>
                    <Box display='flex' justifyContent='space-between'>
                        <Box
                            sx={{
                                mt: 2.5,
                            }}
                        >
                            <Typography
                                sx={{ display: 'flex', color: 'black' }}
                            >
                                <PlaceIcon></PlaceIcon>12 Kms
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 2,
                                }}
                            >
                                Post ID: 7865
                            </Typography>
                        </Box>
                    </Box>
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
                    <Box display='flex' justifyContent='space-between'>
                        <Button
                            variant='outlined'
                            size='large'
                            sx={{
                                textTransform: 'capitalize',
                                width: '45%',
                                border: '1px solid gray',
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: 'lightgray',
                                    borderColor: 'black',
                                },
                            }}
                        >
                            Dry Uncooked Food
                        </Button>
                        <Button
                            variant='outlined'
                            size='large'
                            sx={{
                                textTransform: 'capitalize',
                                width: '45%',
                                border: '1px solid gray',
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: 'lightgray',
                                    borderColor: 'black',
                                },
                            }}
                        >
                            + Add Food Type
                        </Button>
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
                            label='Food quanity'
                            id='foodItems'
                            sx={{
                                mt: 0,
                                mb: 3,
                            }}
                            placeholder='Total 80 Kg'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        ></TextField>
                        <LocalizationProvider
                            item
                            xs={12}
                            dateAdapter={AdapterDayjs}
                        >
                            <DateTimePicker
                                label='Food expiration'
                                fullWidth
                                inputFormat='MM/DD/YYYY'
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => (
                                    <TextField
                                        sx={{ width: '100%' }}
                                        {...params}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                    </Box>

                    <Box item xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label='Food expiration date & time'
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => (
                                    <TextField
                                        sx={{ width: '100%', mt: 3, mb: 3 }}
                                        {...params}
                                    />
                                )}
                            >
                                <TimePicker
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </DateTimePicker>
                        </LocalizationProvider>
                    </Box>
                    <Box item xs={12}>
                        <TextField
                            fullWidth
                            color='secondary'
                            name='foodItems'
                            label='Pick up Location'
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
                            color=''
                            name='foodItems'
                            label=''
                            id='foodItems'
                            sx={{
                                mt: 3,
                                mb: 0,
                            }}
                            placeholder='Add more details'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <AddIcon></AddIcon>
                                    </InputAdornment>
                                ),
                            }}
                        ></TextField>
                    </Box>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography
                            sx={{
                                color: 'gray',
                                mt: 3,
                            }}
                        >
                            Post ID: #12637
                        </Typography>
                        <Link
                            sx={{
                                color: 'gray',
                                mt: 3,
                            }}
                        >
                            Report Post
                        </Link>
                    </Box>
                    <Box display='flex'>
                        <Button
                            href='/DonationRequest'
                            sx={{
                                textAlign: 'center',
                                background: 'white',
                                color: 'black',
                                width: '35%',
                                margin: 'auto',
                                mt: 5,
                                mb: 5,
                                p: 1.5,
                                textTransform: 'none',
                                border: '1px solid gray',
                                borderRadius: '40px',
                                fontSize: '18px',
                                display: 'block',
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            href='/RequestAccepted'
                            sx={{
                                textAlign: 'center',
                                background: 'lightgray',
                                color: 'black',
                                width: '35%',
                                margin: 'auto',
                                mt: 5,
                                mb: 5,
                                p: 1.5,
                                textTransform: 'none',
                                borderRadius: '40px',
                                fontSize: '18px',
                                display: 'block',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    border: '1px solid gray',
                                },
                            }}
                        >
                            Send Message
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}
