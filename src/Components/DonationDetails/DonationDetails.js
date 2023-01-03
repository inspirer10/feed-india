import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

export default function ActionAreaCard() {
    const [value, setValue] = React.useState(dayjs('2022-11-12T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <Container
            maxWidth='sm'
            sx={{
                marginTop: 3,
                mb: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Paper
                sx={{
                    border: '1px solid grey',
                    position: 'relative',
                    backgroundColor: 'white',
                    mb: 3,
                    display: 'flex',
                    width: 'inherit',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        m: 2,
                        width: '150px',
                        height: '150px',
                        overflow: 'hidden',
                        backgroundImage: 'url(/food1.jpg)',
                        backgroundSize: 'cover',
                        borderRadius: '8px',
                    }}
                ></Box>
                <Typography
                    sx={{
                        color: 'grey',
                        mt: 2,
                        mr: 8,
                    }}
                >
                    <Link href='#' variant='h6' sx={{ color: 'black' }}>
                        Shreeman Restaurant
                    </Link>
                    <Typography
                        sx={{
                            mt: 1,
                        }}
                    >
                        Meal for 20 available
                    </Typography>
                    <Box display='flex' justifyContent='space-between'>
                        <Box
                            sx={{
                                mt: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '15px',
                                    color: 'black',
                                }}
                            >
                                <LocationOnIcon
                                    sx={{ fontSize: '20px', mr: 0.5 }}
                                />
                                6 Kms
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 1,
                                    display: 'flex',
                                    fontSize: '15px',
                                    color: 'black',
                                }}
                            >
                                4.2
                                <StarIcon
                                    sx={{
                                        ml: 0.5,
                                        fontSize: '20px',
                                        color: 'gray',
                                    }}
                                />
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: 2,
                            }}
                        >
                            <Typography
                                sx={{ color: 'black', fontSize: '15px' }}
                            >
                                1 hour ago
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 1,
                                    display: 'flex',
                                    fontSize: '15px',
                                }}
                            >
                                <Box sx={{ color: 'black', mr: 1 }}>32 </Box>
                                Reviews
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
                    <Box display='flex'>
                        <FormGroup
                            sx={{
                                border: '1px solid grey',
                                borderRadius: '5px',
                                position: 'relative',
                                backgroundColor: 'white',
                                color: 'grey',
                                display: 'flex',
                                pl: 1.5,
                                width: '25%',
                            }}
                        >
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label='Veg'
                            />
                        </FormGroup>
                        <FormGroup
                            sx={{
                                border: '1px solid grey',
                                borderRadius: '5px',
                                position: 'relative',
                                backgroundColor: 'white',
                                color: 'grey',
                                display: 'flex',
                                ml: 3,
                                pl: 1.5,
                                width: '30%',
                            }}
                        >
                            <FormControlLabel
                                control={<Checkbox />}
                                label='Non-Veg'
                            />
                        </FormGroup>
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
                            placeholder='Roti, rice, dal, salad'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                            <Box display='flex' justifyContent='space-between'>
                                <DesktopDatePicker
                                    label='Cooking date'
                                    inputFormat='MM/DD/YYYY'
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                                <TimePicker
                                    label='Cooking time'
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </Box>

                            <Box display='flex' justifyContent='space-around'>
                                <Box
                                    sx={{
                                        display: 'flex',
                                    }}
                                >
                                    <img
                                        src='placeHolder2.png'
                                        alt='placeholder'
                                        width={70}
                                        height={70}
                                        style={{
                                            borderRadius: '15px',
                                            marginBottom: '15px',
                                            filter: 'brightness(90%)',
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                    }}
                                >
                                    <img
                                        src='placeHolder2.png'
                                        alt='placeholder'
                                        width={70}
                                        height={70}
                                        style={{
                                            borderRadius: '15px',
                                            marginBottom: '15px',
                                            filter: 'brightness(90%)',
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                    }}
                                >
                                    <img
                                        src='placeHolder2.png'
                                        alt='placeholder'
                                        width={70}
                                        height={70}
                                        style={{
                                            borderRadius: '15px',
                                            marginBottom: '15px',
                                            filter: 'brightness(90%)',
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                    }}
                                >
                                    <img
                                        src='placeHolder2.png'
                                        alt='placeholder'
                                        width={70}
                                        height={70}
                                        style={{
                                            borderRadius: '15px',
                                            marginBottom: '15px',
                                            filter: 'brightness(90%)',
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                    }}
                                >
                                    <img
                                        src='placeHolder2.png'
                                        alt='placeholder'
                                        width={70}
                                        height={70}
                                        style={{
                                            borderRadius: '15px',
                                            marginBottom: '15px',
                                            filter: 'brightness(90%)',
                                        }}
                                    />
                                </Box>
                            </Box>

                            <TextField
                                width='100%'
                                name='foodItems'
                                label='Pick up time'
                                id='foodItems'
                                sx={{ mb: 3 }}
                                placeholder='till 23:30 PM today'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <DateTimePicker
                                label='Food expiration date & time'
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => (
                                    <TextField {...params} />
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
                        </Stack>
                    </LocalizationProvider>
                    <TextField
                        fullWidth
                        name='foodItems'
                        label='Special instruction'
                        id='foodItems'
                        sx={{
                            mt: 3,
                            mb: 3,
                        }}
                        placeholder='Food should be consumed within 24 hrs from cooking tome, if remains refrigate maximum for 12 hrs more'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        multiline
                    />
                    <Box display='flex' justifyContent='space-around'>
                        <Button
                            size='large'
                            sx={{
                                textTransform: 'capitalize',
                                border: '1px solid black',
                                color: 'black',
                                width: '45%',
                            }}
                        >
                            Self Pick up
                        </Button>
                        <Button
                            size='large'
                            sx={{
                                textTransform: 'capitalize',
                                border: '1px solid black',
                                color: 'black',
                                width: '45%',
                            }}
                        >
                            Spot Delivery
                        </Button>
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
                            href=''
                            sx={{
                                textAlign: 'center',
                                background: 'white',
                                color: 'black',
                                width: '35%',
                                margin: 'auto',
                                mt: 5,
                                mb: 5,
                                p: 2,
                                textTransform: 'none',
                                border: '1px solid gray',
                                borderRadius: '40px',
                                fontSize: '18px',
                                display: 'block',
                            }}
                        >
                            Message
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
                                mb: 5,
                                p: 2,
                                textTransform: 'none',
                                borderRadius: '40px',
                                fontSize: '18px',
                                display: 'block',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    border: '1px solid gray',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            Claim
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}
