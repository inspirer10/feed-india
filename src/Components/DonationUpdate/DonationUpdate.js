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

import AddIcon from '@mui/icons-material/Add';

export default function DonationUpdate() {
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
                                pl: 1,
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
                                ml: 2,
                                pl: 1,
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
                                mb: 2,
                            }}
                            placeholder='Roti, rice, dal, salad'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                    <Box item xs={12}>
                        <TextField
                            fullWidth
                            name='foodquality'
                            label='Food quality'
                            id='foodquality'
                            sx={{
                                mt: 1,
                                mb: 3,
                            }}
                            placeholder='Meal available for 10 people'
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

                            <Paper
                                sx={{
                                    border: '1px solid lightgray',
                                    backgroundColor: 'white',
                                    mb: 3,
                                    mt: 3,
                                    width: 'inherit',
                                    borderRadius: '8px',
                                }}
                            >
                                <Box display='flex' p={1}>
                                    <Typography
                                        sx={{
                                            fontSize: '20px',
                                            mt: 1,
                                            mb: 1,
                                            ml: 2,
                                        }}
                                    >
                                        Add photos (optional)
                                    </Typography>
                                    <Button
                                        sx={{
                                            background: 'lightgray',
                                            ml: 2,
                                            color: 'black',
                                        }}
                                    >
                                        <AddIcon></AddIcon>
                                    </Button>
                                </Box>
                            </Paper>

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
                            {/*<MobileDatePicker
              label="Date mobile"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
          />*/}
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
                            Self Pick up
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
                            fullWidth
                            sx={{
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
                            fullWidth
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
                                mt: 5,
                                mb: 5,
                                p: 1.5,
                                textTransform: 'none',
                                borderRadius: '40px',
                                fontSize: '18px',
                                display: 'block',
                            }}
                        >
                            Update
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}
